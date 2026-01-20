import { getPageInformationBySlug } from "@/lib/api/pageInformation";
import UniversityPageTemplate from "@/components/PageComponent/UniversityPageTemplate";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Metadata for SEO
export async function generateMetadata() {
  try {
    const pageData = await getPageInformationBySlug('italy-france');
    
    return {
      title: pageData?.metaTitle || pageData?.title || 'Italy & France Universities - GAway Prep',
      description: pageData?.metaDescription || pageData?.subTitle || 'Your path to Italy & France Universities',
      keywords: Array.isArray(pageData?.keywords) ? pageData.keywords.join(', ') : (pageData?.keywords || 'italy universities, france universities, study in europe, education, study abroad'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Italy & France Universities - GAway Prep',
      description: 'Your path to Italy & France Universities',
      keywords: 'italy universities, france universities, study in europe, education, study abroad',
    };
  }
}

export default async function ItalyFrancePage() {
  let pageData = null;
  try {
    pageData = await getPageInformationBySlug('italy-france');
  } catch (error) {
    console.error('Error fetching page data:', error);
  }
  
  return <UniversityPageTemplate slug="italy-france" pageData={pageData} />;
}