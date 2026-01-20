import { z } from 'zod'

// Page Section Schema
// Flexible: koi bhi section type allowed hai (enum removed for flexibility)
// Examples: 'hero_section', 'form_section', 'why_choose_us', 'slider_card',
//          'testimonials', 'faq', 'pricing', 'gallery', 'team', etc.
export const pageSectionSchema = z.object({
  type: z.string().min(1, 'Section type is required').toLowerCase(),
  data: z.record(z.any()),
  order: z.number().default(0),
})

// Page Information Schema
export const pageInformationSchema = z.object({
  _id: z.string(),
  pageType: z.enum(['home_page', 'about_page', 'contact_page', 'city_page', 'ivy_league', 'other']).default('home_page'),
  title: z.string().min(1, 'Title is required'),
  subTitle: z.string().optional(),
  slug: z.string().min(1, 'Slug is required').toLowerCase(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  status: z.enum(['Draft', 'Published']).default('Draft'),
  isFeatured: z.enum(['Yes', 'No']).default('No'),
  
  // Image fields
  heroImage: z.string().optional().default(''),
  heroImagePublicId: z.string().optional().default(''),
  roadmapImage: z.string().optional().default(''),
  roadmapImagePublicId: z.string().optional().default(''),
  mobileRoadmapImage: z.string().optional().default(''),  
  mobileRoadmapImagePublicId: z.string().optional().default(''),
  universityCapBg: z.string().optional().default(''),
  universityCapBgPublicId: z.string().optional().default(''),
  universitySliderBg: z.string().optional().default(''),
  universitySliderBgPublicId: z.string().optional().default(''),
  immigrationServicesBg: z.string().optional().default(''),
  immigrationServicesBgPublicId: z.string().optional().default(''),
  
  // Sections array
  sections: z.array(pageSectionSchema).default([]),
  
  // SEO fields
  keywords: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  canonicalUrl: z.string().optional(),
  
  // Timestamps
  createdAt: z.string().or(z.date()).optional(),
  updatedAt: z.string().or(z.date()).optional(),
})

// API Response Schema
export const pageInformationResponseSchema = z.object({
  success: z.boolean(),
  data: pageInformationSchema,
  message: z.string().optional(),
})

// Image Response Schema
export const imageResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    imageUrl: z.string().nullable(),
    publicId: z.string().nullable(),
    imageType: z.string(),
    slug: z.string(),
    message: z.string().optional(),
  }),
}).passthrough() // Allow additional fields from backend

// Image Type
export const imageTypeSchema = z.enum([
  'heroImage',
  'universityCapBg',
  'universitySliderBg',
  'immigrationServicesBg',
  'roadmapImage',
  'mobileRoadmapImage',
])

// Hero Section Data Type (for type safety when working with hero sections)
export interface HeroSectionData {
  title?: string
  subTitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  buttonText?: string
  buttonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundImage?: string
  backgroundImagePublicId?: string
}

// Type exports for TypeScript
export type PageSection = z.infer<typeof pageSectionSchema>
export type PageInformation = z.infer<typeof pageInformationSchema>
export type PageInformationResponse = z.infer<typeof pageInformationResponseSchema>
export type ImageResponse = z.infer<typeof imageResponseSchema>
export type ImageType = z.infer<typeof imageTypeSchema>
