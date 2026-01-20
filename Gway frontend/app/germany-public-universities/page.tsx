import { getPageInformationBySlug } from "@/lib/api/pageInformation";
import UniversityPageTemplate from "@/components/PageComponent/UniversityPageTemplate";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Metadata for SEO
export async function generateMetadata() {
  try {
    const pageData = await getPageInformationBySlug('germany-public-universities');
    
    return {
      title: pageData?.metaTitle || pageData?.title || 'Germany Public Universities - GAway Prep',
      description: pageData?.metaDescription || pageData?.subTitle || 'Your path to Germany Public Universities',
      keywords: Array.isArray(pageData?.keywords) ? pageData.keywords.join(', ') : (pageData?.keywords || 'germany universities, study in germany, education, study abroad'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Germany Public Universities - GAway Prep',
      description: 'Your path to Germany Public Universities',
      keywords: 'germany universities, study in germany, education, study abroad',
    };
  }
}

export default async function GermanyPublicUniversitiesPage() {
  let pageData = null;
  try {
    pageData = await getPageInformationBySlug('germany-public-universities');
  } catch (error) {
    console.error('Error fetching page data:', error);
  }
  
  return <UniversityPageTemplate slug="germany-public-universities" pageData={pageData} />;
}