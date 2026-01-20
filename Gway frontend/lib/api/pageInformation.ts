/**
 * Universal Page Information API
 * 
 * This API handles ALL pages dynamically using slugs:
 * - Home page: slug = 'home'
 * - About page: slug = 'about'
 * - Contact page: slug = 'contact'
 * - Any future pages: just use their slug
 * 
 * No need for separate APIs for each page type!
 */

import type { 
  ImageType, 
  ImageResponse, 
  PageInformation, 
  PageInformationResponse 
} from '../schemas/pageInformation'
import { 
  imageResponseSchema, 
  pageInformationResponseSchema 
} from '../schemas/pageInformation'

// Re-export types from schema
export type { ImageType, ImageResponse, PageInformation, PageInformationResponse }

// Get API URL from environment variable
const API_BASE_URL = 
  typeof window !== 'undefined' 
    ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api')
    : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api')

/**
 * Universal API endpoints - work for any page slug
 */
const API_ENDPOINTS = {
  /**
   * Get page information by slug
   * Works for: home, about, contact, services, etc.
   * @example /api/page-information/public/home
   * @example /api/page-information/public/about
   */
  getPageBySlug: (slug: string) => `${API_BASE_URL}/page-information/public/${slug}`,
  
  /**
   * Get image by slug and image type
   * Works for any page slug
   * @example /api/page-information/images/home/heroImage
   * @example /api/page-information/images/about/heroImage
   */
  getImageBySlug: (slug: string, imageType: ImageType) => 
    `${API_BASE_URL}/page-information/images/${slug}/${imageType}`,
} as const

/**
 * Universal function to fetch image for ANY page by slug
 * 
 * Works for all pages: home, about, contact, services, blog, etc.
 * Just pass the page slug and image type.
 * 
 * @param slug - Page slug (e.g., 'home', 'about', 'contact', 'services')
 * @param imageType - Type of image to fetch
 * @returns Image URL or null if not found
 * 
 * @example
 * ```ts
 * // For home page
 * const heroImage = await getImageBySlug('home', 'heroImage')
 * 
 * // For about page
 * const heroImage = await getImageBySlug('about', 'heroImage')
 * 
 * // For any future page
 * const heroImage = await getImageBySlug('services', 'heroImage')
 * ```
 */
export async function getImageBySlug(
  slug: string,
  imageType: ImageType
): Promise<string | null> {
  try {
    const url = API_ENDPOINTS.getImageBySlug(slug, imageType)
    
    // Check if API_BASE_URL is set
    if (!API_BASE_URL || API_BASE_URL === 'undefined') {
      console.warn('API_BASE_URL is not set. Using fallback image.')
      return null
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data
    })

    if (!response.ok) {
      // If image not found, return null (fallback to default)
      if (response.status === 404) {
        console.log(`Image not found: ${slug}/${imageType} - Using fallback`)
        return null
      }
      throw new Error(`Failed to fetch image: ${response.statusText} (${response.status})`)
    }

    const jsonData = await response.json()
    const data = imageResponseSchema.parse(jsonData)
    
    if (data.success && data.data?.imageUrl) {
      return data.data.imageUrl
    }

    return null
  } catch (error) {
    // Network error or other fetch errors
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      console.warn(
        `Network error fetching image (${slug}/${imageType}): Backend may not be running at ${API_BASE_URL}. Using fallback image.`
      )
    } else {
      console.error(`Error fetching image (${slug}/${imageType}):`, error)
    }
    return null // Return null on error to allow fallback
  }
}

/**
 * Universal function to fetch complete page information for ANY page
 * 
 * Works for all pages: home, about, contact, services, blog, etc.
 * Just pass the page slug.
 * 
 * @param slug - Page slug (e.g., 'home', 'about', 'contact', 'services')
 * @returns Complete page information or null if not found
 * 
 * @example
 * ```ts
 * // For home page
 * const homePage = await getPageInformationBySlug('home')
 * 
 * // For about page
 * const aboutPage = await getPageInformationBySlug('about')
 * 
 * // For any future page
 * const servicesPage = await getPageInformationBySlug('services')
 * ```
 */
export async function getPageInformationBySlug(
  slug: string
): Promise<PageInformation | null> {
  try {
    const response = await fetch(
      API_ENDPOINTS.getPageBySlug(slug),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    )

    if (!response.ok) {
      if (response.status === 404) {
        // Try to get error message from response
        try {
          const errorData = await response.json()
          if (process.env.NODE_ENV === 'development') {
            console.warn(`⚠️ Page not found (404) for slug: ${slug}`);
            if (errorData.message) {
              console.warn(`   Backend message: ${errorData.message}`);
            }
            console.warn(`💡 Make sure:`);
            console.warn(`   1. Page exists in database with slug: "${slug}"`);
            console.warn(`   2. Page status is "Published" (not "Draft")`);
            console.warn(`   3. API is running and accessible`);
          }
        } catch (e) {
          // Response is not JSON, just log the status
          if (process.env.NODE_ENV === 'development') {
            console.warn(`⚠️ Page not found (404) for slug: ${slug}`);
          }
        }
        return null
      }
      throw new Error(`Failed to fetch page: ${response.status} ${response.statusText}`)
    }

    const jsonData = await response.json()
    
    // Debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ API Response for ${slug}:`, {
        success: jsonData.success,
        hasData: !!jsonData.data,
        status: jsonData.data?.status,
        sections: jsonData.data?.sections?.length || 0,
        warning: jsonData.warning,
      });
    }
    
    // In development, allow draft pages with warning
    // In production, only allow published pages
    const isDevelopment = process.env.NODE_ENV !== 'production'
    
    try {
      const data = pageInformationResponseSchema.parse(jsonData)
      
      if (data.success && data.data) {
        // In development, allow draft pages
        // In production, only allow published pages
        if (!isDevelopment && data.data.status !== 'Published') {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`⚠️ Page found but status is "${data.data.status}" (not "Published")`);
            console.warn(`💡 Update page status to "Published" in admin panel for production`);
          }
          return null; // Don't show draft pages in production
        }
        
        // Show warning in development if draft
        if (isDevelopment && data.data.status === 'Draft') {
          console.warn(`⚠️ Page "${slug}" is in Draft status. Update to "Published" for production.`);
        }
        
        return data.data
      }
    } catch (parseError) {
      console.error(`❌ Schema validation error for ${slug}:`, parseError)
      // In development, try to return data anyway if it exists
      if (isDevelopment && jsonData.success && jsonData.data) {
        console.warn(`⚠️ Schema validation failed, but returning data in development mode`)
        return jsonData.data as PageInformation
      }
      throw parseError
    }

    return null
  } catch (error) {
    console.error(`❌ Error fetching page information (${slug}):`, error)
    return null
  }
}

/**
 * Universal function to fetch multiple images at once for ANY page
 * 
 * Works for all pages: home, about, contact, services, etc.
 * 
 * @param slug - Page slug (e.g., 'home', 'about', 'contact')
 * @param imageTypes - Array of image types to fetch
 * @returns Object with image types as keys and URLs as values
 * 
 * @example
 * ```ts
 * // For home page
 * const images = await getImagesBySlug('home', ['heroImage', 'universitySliderBg'])
 * 
 * // For about page
 * const images = await getImagesBySlug('about', ['heroImage'])
 * ```
 */
export async function getImagesBySlug(
  slug: string,
  imageTypes: ImageType[]
): Promise<Record<ImageType, string | null>> {
  const results: Record<string, string | null> = {}
  
  // Fetch all images in parallel
  const promises = imageTypes.map(async (imageType) => {
    const url = await getImageBySlug(slug, imageType)
    return { imageType, url }
  })

  const responses = await Promise.all(promises)
  
  responses.forEach(({ imageType, url }) => {
    results[imageType] = url
  })

  return results as Record<ImageType, string | null>
}
