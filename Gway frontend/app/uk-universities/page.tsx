import { getPageInformationBySlug } from "@/lib/api/pageInformation";
import UniversityPageTemplate from "@/components/PageComponent/UniversityPageTemplate";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Metadata for SEO
export async function generateMetadata() {
  try {
    const pageData = await getPageInformationBySlug('uk-universities');
    
    return {
      title: pageData?.metaTitle || pageData?.title || 'UK Universities - GAway Prep',
      description: pageData?.metaDescription || pageData?.subTitle || 'Your path to UK Universities',
      keywords: Array.isArray(pageData?.keywords) ? pageData.keywords.join(', ') : (pageData?.keywords || 'uk universities, study in uk, education, study abroad'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'UK Universities - GAway Prep',
      description: 'Your path to UK Universities',
      keywords: 'uk universities, study in uk, education, study abroad',
    };
  }
}

export default async function UKUniversitiesPage() {
  let pageData = null;
  try {
    pageData = await getPageInformationBySlug('uk-universities');
  } catch (error) {
    console.error('Error fetching page data:', error);
  }
  
  return <UniversityPageTemplate slug="uk-universities" pageData={pageData} />;
}