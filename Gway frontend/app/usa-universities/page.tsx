import { getPageInformationBySlug } from "@/lib/api/pageInformation";
import UniversityPageTemplate from "@/components/PageComponent/UniversityPageTemplate";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Metadata for SEO
export async function generateMetadata() {
  try {
    const pageData = await getPageInformationBySlug('usa-universities');
    
    return {
      title: pageData?.metaTitle || pageData?.title || 'USA Universities - GAway Prep',
      description: pageData?.metaDescription || pageData?.subTitle || 'Your path to USA Universities',
      keywords: Array.isArray(pageData?.keywords) ? pageData.keywords.join(', ') : (pageData?.keywords || 'usa universities, study in usa, education, study abroad'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'USA Universities - GAway Prep',
      description: 'Your path to USA Universities',
      keywords: 'usa universities, study in usa, education, study abroad',
    };
  }
}

export default async function USAUniversitiesPage() {
  let pageData = null;
  try {
    pageData = await getPageInformationBySlug('usa-universities');
  } catch (error) {
    console.error('Error fetching page data:', error);
  }
  
  return <UniversityPageTemplate slug="usa-universities" pageData={pageData} />;
}