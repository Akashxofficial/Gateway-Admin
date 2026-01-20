import { getPageInformationBySlug } from "@/lib/api/pageInformation";
import UniversityPageTemplate from "@/components/PageComponent/UniversityPageTemplate";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Metadata for SEO
export async function generateMetadata() {
  try {
    const pageData = await getPageInformationBySlug('canada-australia');
    
    return {
      title: pageData?.metaTitle || pageData?.title || 'Canada & Australia Universities - GAway Prep',
      description: pageData?.metaDescription || pageData?.subTitle || 'Your path to Canada & Australia Universities',
      keywords: Array.isArray(pageData?.keywords) ? pageData.keywords.join(', ') : (pageData?.keywords || 'canada universities, australia universities, study abroad, education'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Canada & Australia Universities - GAway Prep',
      description: 'Your path to Canada & Australia Universities',
      keywords: 'canada universities, australia universities, study abroad, education',
    };
  }
}

export default async function CanadaAustraliaPage() {
  let pageData = null;
  try {
    pageData = await getPageInformationBySlug('canada-australia');
  } catch (error) {
    console.error('Error fetching page data:', error);
  }
  
  return <UniversityPageTemplate slug="canada-australia" pageData={pageData} />;
}