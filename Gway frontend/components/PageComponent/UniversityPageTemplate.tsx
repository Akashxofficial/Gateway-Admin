import Image from "next/image";
import type { PageInformation } from "@/lib/api/pageInformation";
import ImageTestimonial from "@/components/ImageTestimonial";
import IvyLeagueUniversitySlider from "@/components/IvyLeagueUniversitySlider";
import VideoBackground from "@/components/VideoBackground";
import StatisticsSlider from "@/components/StatisticsSlider";
import OffersSlider, { AdmissionRequirementsUK, HowGawayHelps, IvyLeagueSection, ScholarshipRequirements } from "@/components/PageComponent/DistinationSliders";
import CaseStudy from "@/components/PageComponent/CaseStudy";

// Default fallback values
const defaultImages = [
  "https://t3.ftcdn.net/jpg/06/23/84/22/360_F_623842281_ECGgEpMEkQdH83gbmexIn5l3ACl7V3M0.jpg",
  "https://img.freepik.com/premium-photo/young-handsome-man-pointing-camera-choosing-you-university-student-concept_1194-262936.jpg",
  "https://as2.ftcdn.net/jpg/05/29/12/57/1000_F_529125762_omW1yTehDLLFJKwLJjRET0G3sXiQnK5g.jpg",
];

interface University {
  name: string;
  generalRate: number;
  gawayRate: number;
  logo: string;
  alt: string;
}

const defaultUniversities: University[] = [
  { name: 'Harvard', generalRate: 3.2, gawayRate: 20.0, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'Harvard' },
  { name: 'Stanford', generalRate: 4.3, gawayRate: 80.0, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'Stanford' },
  { name: 'Yale', generalRate: 4.6, gawayRate: 70.2, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'Yale' },
  { name: 'Columbia', generalRate: 3.9, gawayRate: 78.1, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'Columbia' },
  { name: 'UPenn', generalRate: 5.9, gawayRate: 83.3, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'UPenn' },
  { name: 'Dartmouth', generalRate: 6.2, gawayRate: 77.0, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'Dartmouth' },
  { name: 'Princeton', generalRate: 5.7, gawayRate: 60.6, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'Princeton' },
  { name: 'Cornell', generalRate: 7.3, gawayRate: 80.6, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'Cornell' },
  { name: 'MIT', generalRate: 6.5, gawayRate: 85.0, logo: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'MIT' }
];

const defaultNewsDaily = [
  {
    uni: 'University',
    text: 'University Class of 2028 Early Action Admission Rate',
    date: 'December 15, 2023',
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
  },
  {
    uni: 'University',
    text: 'University Class of 2028 Early Decision Admission Rate',
    date: 'December 15, 2023',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
  },
  {
    uni: 'University',
    text: 'University Class of 2028 Early Action Admission Rate',
    date: 'December 15, 2023',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop'
  }
];

// Helper function to get section data by type
function getSectionData(pageData: PageInformation | null, sectionType: string) {
  if (!pageData?.sections) return null;
  
  let section = pageData.sections.find(s => s.type === sectionType);
  
  if (!section) {
    const variant = sectionType.endsWith('_section') 
      ? sectionType.replace('_section', '') 
      : `${sectionType}_section`;
    section = pageData.sections.find(s => s.type === variant);
  }
  
  return section?.data || null;
}

// Helper function to get hero section data
function getHeroData(pageData: PageInformation | null) {
  const heroSection = getSectionData(pageData, 'hero_section');
  return {
    title: heroSection?.title || pageData?.title || "Your path to\nUniversities",
    subtitle: heroSection?.subtitle || pageData?.subTitle || "",
    description: heroSection?.description || "GAway helps you get into top universities. We'll guide you through the application process and help you achieve your academic goals.",
    backgroundImage: pageData?.heroImage || null,
    backgroundImage1: pageData?.roadmapImage || null,
    backgroundImage2: pageData?.mobileRoadmapImage || null,
    backgroundImage3: pageData?.universityCapBg || null,
  };
}

// Helper function to get default page name from slug
function getPageNameFromSlug(slug: string): string {
  const pageNames: Record<string, string> = {
    'usa-universities': 'USA Universities',
    'uk-universities': 'UK Universities',
    'germany-public-universities': 'Germany Public Universities',
    'italy-france': 'Italy & France',
    'canada-australia': 'Canada & Australia',
    'ivy-league': 'Ivy League',
  };
  return pageNames[slug] || slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

interface UniversityPageTemplateProps {
  slug: string;
  pageData: PageInformation | null;
}

export default function UniversityPageTemplate({ slug, pageData }: UniversityPageTemplateProps) {
  const pageName = getPageNameFromSlug(slug);
  
  // Extract data from API or use defaults
  const heroData = getHeroData(pageData);
  const titleParts = heroData.title.split('\n');
  
  // Get images from sections or use defaults
  const statsSection = getSectionData(pageData, 'stats_section');
  const sliderImages = statsSection?.images || defaultImages;
  
  // Get universities data from sections or use defaults
  const universitiesSection = getSectionData(pageData, 'universities_section');
  const universities = universitiesSection?.universities || defaultUniversities;
  
  // Get News Daily data
  const newsSection = getSectionData(pageData, 'news_daily') || getSectionData(pageData, 'ivy_coach_daily');
  const newsDaily = newsSection?.articles || defaultNewsDaily;
  
  // Get other section data
  const trackRecordSection = getSectionData(pageData, 'track_record') || getSectionData(pageData, 'track_record_section');
  const totalOffers = trackRecordSection?.totalOffers || "1,485";
  const successRate = trackRecordSection?.successRate || "98%";
  const successDescription = trackRecordSection?.successDescription || "of our students are admitted to atleast 1 of their top 5 college choices";
  
  const trackRecordTitle = trackRecordSection?.title || `${pageName.toUpperCase()}\nADMISSIONS TRACK RECORD`;
  const trackRecordDescription = trackRecordSection?.description || "The percentage of GAway's packaged clients over the last 10 years\nwho earned admission to the following schools.";
  const trackRecordNote = trackRecordSection?.note || trackRecordSection?.subTitle || "At most of these schools, we typically have 3-4 applicants annually.";
  
  const newsTitle = newsSection?.title || `${pageName.toUpperCase()} NEWS`;
  const newsSubtitle = newsSection?.subtitle || `"Latest Updates from ${pageName}"`;
  
  const ctaSection = getSectionData(pageData, 'cta_section');
  const ctaTitle = ctaSection?.title || "TOWARD THE CONQUEST OF ADMISSION";
  const ctaDescription = ctaSection?.description || `If you're interested in studying, fill out our contact form or schedule a free consultation to learn more and get in touch.`;
  const ctaButtonText = ctaSection?.buttonText || "GET STARTED";

  // Get Offers Slider data
  const offersSection = getSectionData(pageData, 'offers_slider') || getSectionData(pageData, 'slider_card');
  const offersData = offersSection?.offers || offersSection?.items || [];

  // Get Ivy League Section data (What Makes X Special)
  const ivyLeagueSpecialSection = getSectionData(pageData, 'why_choose_us') || getSectionData(pageData, 'ivy_league_section');
  const ivyLeagueCards = ivyLeagueSpecialSection?.cards || ivyLeagueSpecialSection?.items || [];

  // Get Admission Requirements data
  const admissionReqSection = getSectionData(pageData, 'requirements') || getSectionData(pageData, 'admission_requirements');
  
  // Get How GAway Helps / Scholarships data
  const howGawayHelpsSection = getSectionData(pageData, 'how_gaway_helps') || getSectionData(pageData, 'scholarships');
  
  // Get Scholarship Requirements data
  const scholarshipReqSection = getSectionData(pageData, 'scholarship_requirements');
  
  // Get Image Testimonials data
  const imageTestimonialsSection = getSectionData(pageData, 'testimonials') || getSectionData(pageData, 'image_testimonials');
  const testimonialsData = imageTestimonialsSection?.testimonials || imageTestimonialsSection?.items || [];

  // Get Case Studies data
  const caseStudiesSection = getSectionData(pageData, 'case_studies') || getSectionData(pageData, 'case_study');
  const caseStudiesTitle = caseStudiesSection?.title || null;
  const caseStudiesSubTitle = caseStudiesSection?.subTitle || null;
  const caseStudies = caseStudiesSection?.studies || [];

  // Get background images for hero section
  const heroBgImage = heroData.backgroundImage || null;
  const bgVideo1 = heroData.backgroundImage1 || "/0_Queens_University_Belfast_Belfast_1920x1080.mp4";
  const bgVideo2 = heroData.backgroundImage2 || "/4730892_Cheyenne_Wyoming_1920x1080.mp4";
  
  // Get background images for roadmap
  const roadmapImage = heroData.backgroundImage1 || pageData?.roadmapImage || null;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section - Dynamic */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {heroBgImage ? (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroBgImage})` }}
            />
          ) : (
            <VideoBackground
              videos={[bgVideo1, bgVideo2]}
            />
          )}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left max-w-7xl mx-auto px-4">
          <div className="max-w-4xl" style={{ transform: 'none', perspective: 'none' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-0 leading-tight" style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500, textAlign: 'left', transform: 'none', transformStyle: 'flat', transformOrigin: 'initial', letterSpacing: 'normal' }}>
              {titleParts.map((part: string, i: number) => (
                <span key={i} className="block" style={{ transform: 'none', display: 'block' }}>
                  {part}
                </span>
              ))}
            </h1>
            {heroData.subtitle && (
              <p className="text-lg md:text-xl text-white mb-4 leading-relaxed" style={{ textAlign: 'left' }}>
                {heroData.subtitle}
              </p>
            )}
            <p className="text-lg md:text-xl text-white mb-10 leading-relaxed" style={{ textAlign: 'left' }}>
              {heroData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Global University Network - Dynamic */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-5">
          <h2 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500, textAlign: 'center', transform: 'none', transformStyle: 'flat', transformOrigin: 'initial', letterSpacing: 'normal' }} className="text-[2.6rem] font-bold text-center mb-6 text-gray-600">
            {getSectionData(pageData, 'university_network_section')?.title || universitiesSection?.title || `Our ${pageName} Network`}
          </h2>
          {universities && universities.length > 0 && universities !== defaultUniversities ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {universities.map((uni: any, index: number) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={uni.logo || uni.image || defaultUniversities[0]?.logo || ""}
                    alt={uni.name || uni.alt || `University ${index + 1}`}
                    width={150}
                    height={80}
                    className="object-contain h-16 w-auto"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          ) : (
            <IvyLeagueUniversitySlider />
          )}
        </div>
      </section>

      {/* Track Record - Dynamic */}
      <section className="py-5 bg-gray-50" style={{ overflow: 'visible' }}>
        <div className="mb-8 mx-auto" style={{ borderTop: '3px solid rgb(94, 77, 77)', width: '70%' }}></div>

        <div className="text-center py-6 mb-12 bg-[#f5f1f0]">
          <h2 className="text-[2.6rem] font-bold mb-4 uppercase tracking-wide" style={{ color: '#f46c44', fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", textAlign: 'center' }}>
            {trackRecordTitle.split('\n').map((line: string, i: number) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="text-lg text-gray-800 max-w-4xl mx-auto mb-2 font-semibold" style={{ textAlign: 'center' }}>
            {trackRecordDescription.split('\n').map((line: string, i: number) => (
              <span key={i} className="block">{line}</span>
            ))}
          </p>
          {trackRecordNote && (
            <p className="text-lg text-gray-800 font-semibold mx-auto" style={{ textAlign: 'center' }}>
              {trackRecordNote}
            </p>
          )}
        </div>
        <div className="max-w-7xl mx-auto px-4" style={{ overflow: 'visible' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start" style={{ overflow: 'visible' }}>
            {/* Left Panel - Proven Success */}
            <div className="col-span-2">
              <h3 className="text-3xl font-bold mb-3">
                <span className="block text-2xl font-bold italic" style={{
                  fontFamily: "'Mileast Italic', 'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                  background: 'linear-gradient(180deg, #ff8c5a 0%, #f46c44 50%, #e55a2b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 1px 2px rgba(244, 108, 68, 0.3))'
                }}>Numbers Don&apos;t Lie.</span>
                <span className="block text-gray-600">Proven Success.</span>
                <span className="block text-gray-600">Unmatched Results.</span>
              </h3>

              <div className="w-full">
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px]">
                  <div className="lg:relative lg:w-[92%] lg:h-[91%]">
                    <div
                      className="lg:absolute inset-0 z-10 lg:top-[41px] lg:left-[38px]"
                      style={{
                        backgroundImage: `url(${sliderImages[0] || defaultImages[0]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        maskSize: "100% 100%",
                        width: "335px",
                        height: "335px",
                        borderRadius: "100px",
                      }}
                    />
                    <img
                      src="/images/student-rank-img.png"
                      alt="frame"
                      className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              <div className="text-left border-l-2 border-b-2 p-4 mt-0">
                <div className="text-5xl" style={{ color: '#f46c44' }}>{successRate}</div>
                <p className="text-sm text-gray-700">{successDescription}</p>
              </div>
            </div>

            <div className="col-span-3" style={{ overflow: 'visible' }}>
              <div className="mb-1 text-left p-4 w-100" style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: '#f46c44', borderRadius: '20px', overflow: 'visible' }}>
                <i className="text-7xl mb-0" style={{ color: '#f46c44', fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}>{totalOffers}</i>
                <p style={{ color: '#2f2c29', fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500 }} className="text-gray-600 text-lg">Total Offers in Last 10 Years</p>
              </div>

              <div className="">
                <h4 className="text-[1.8rem] font-bold text-gray-600" style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}>
                  <span className="border-b-2 border-gray-300 pb-2 inline-block">College Specific Acceptance Rates</span>
                </h4>
                <div className="flex items-center gap-6 pb-2">
                  <div className="">
                    <span className="text-sm font-semibold text-gray-600">General Admit Rate</span>
                  </div>
                  <div className="w-[px] h-full min-h-[4px] bg-gray-300 self-stretch"></div>
                  <div className="">
                    <span className="text-sm font-semibold" style={{ color: '#f46c44' }}>GAway Student Admit Rate</span>
                  </div>
                </div>
                <div className="space-y-0">
                  {universities.map((uni: any, i: number) => (
                    <div key={i} className="flex items-center">
                      <div className="w-16 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src={uni.logo || uni.image || defaultUniversities[0]?.logo || ""}
                          alt={uni.alt || uni.name || `University ${i + 1}`}
                          width={60}
                          height={60}
                          className="object-contain w-full h-full"
                          unoptimized
                        />
                      </div>

                      <div className="w-19 flex-shrink-0">
                        <span className="text-base font-semibold text-gray-800">{uni.name}</span>
                      </div>
                      <div className="flex-1">
                      </div>
                      <div className="h-10 mr-3 w-0.5 bg-gray-300"></div>

                      <div className="flex-10">
                        <div style={{ marginLeft: '2px', position: 'relative' }}>
                          <div className=" rounded-full h-4 relative" style={{ overflow: 'visible' }}>
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${(uni.gawayRate / 85.0) * 100}%`,
                                background: `linear-gradient(to right, #f46c44 50%,rgba(231, 218, 214, 0.78) 100%)`
                              }}
                            ></div>
                          </div>
                          <span
                            className="text-sm font-bold absolute top-1/2 -translate-y-1/2 whitespace-nowrap"
                            style={{
                              color: '#1f1d1dbd',
                              left: `calc(${(uni.gawayRate / 85.0) * 100}% + 8px)`
                            }}
                          >
                            {uni.gawayRate}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center item-center">
            <button className="mt-8 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:text-orange-500 transition border-2" style={{ borderColor: '#f46c44', outline: 'none', background: 'transparent' }}>
              VIEW STATISTICS
            </button>
          </div>
        </div>
      </section>

      {/* News Section - Dynamic */}
      <section className="py-12 bg-[#f5f1f0] overflow-visible">
        <div className="max-w-7xl mx-auto px-4 overflow-visible">
          <div className="text-center mb-8">
            <h2 className="text-[2.6rem] font-bold  uppercase" style={{ color: '#f46c44', fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500, textAlign: 'center', transform: 'none', transformStyle: 'flat', transformOrigin: 'initial', letterSpacing: 'normal' }}>
              {newsTitle}
            </h2>
            <p className="text-lg font-semibold text-gray-700 ">{newsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10" style={{ width: '100%' }}>
            {newsDaily.map((item: any, i: number) => (
              <div key={`news-${i}`} className=" overflow-hidden transition w-full">
                <Image
                  src={item.img || item.image || defaultNewsDaily[0].img}
                  alt={item.uni || item.title || `News item ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                  unoptimized
                />
                <div className="py-4">
                  <h4 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500, textAlign: 'center', transform: 'none', transformStyle: 'flat', transformOrigin: 'initial' }} className="text-lg font-bold text-gray-700 mb-2 leading-tight">
                    {item.text || item.title || item.uni}
                  </h4>
                  <p className="text-sm text-center text-gray-600">by {item.author || 'S.K'}. Date: {item.date || 'December 15, 2023'}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-gray-700 px-10 py-3 rounded-lg font-semibold hover:text-orange-500 transition border-2" style={{ borderColor: '#f46c44', outline: 'none', background: 'transparent' }}>
              VIEW ALL
            </button>
          </div>
        </div>
      </section>
      
      {/* Dynamic Sections from Admin Panel */}
      <OffersSlider data={offersData.length > 0 ? offersData : undefined} />
      
      {/* What Makes X Special - Dynamic */}
      {ivyLeagueCards.length > 0 ? (
        <section
          className="min-h-screen py-16 px-4 md:px-8 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #fffaf7 0%,  100%)'
          }}
        >
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 relative">
              <h4 className="text-[2.6rem] mb-6 text-[#f46c44] font-semibold" style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}>
                {ivyLeagueSpecialSection?.title || `What Makes ${pageName} Special`}
              </h4>
              <div className="relative perspective-1000">
                {ivyLeagueCards.map((card: any, index: number) => (
                  <div
                    key={card.id || index}
                    style={{
                      transform: 'perspective(1000px) rotateY(25deg) rotateZ(-5deg) skewX(-6deg) skewY(2deg) rotateX(3deg)',
                      transition: 'transform 0.5s ease-in-out'
                    }}
                    className="bg-gradient-to-r from-[#f46c44] max-w-lg rounded-3xl mb-12 via-[#f46c44]/90 to-[#f46c44]/40 p-6 transition-all duration-300"
                  >
                    <div className="relative z-20">
                      <h3 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                        className="text-[2rem] font-bold mb-1 text-white"
                      >
                        {card.title}
                      </h3>
                      <p className="mb-2 text-white text-base">
                        {card.description}
                      </p>
                      {card.ctaText && (
                        <div className="flex items-center justify-center">
                          <a
                            href={card.ctaLink || "#"}
                            className="inline-block bg-[#ffffff]/80 text-gray-600 font-semibold py-2 px-4 rounded-full transition-all duration-300"
                          >
                            {card.ctaText}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-full">
                {ivyLeagueSpecialSection?.image ? (
                  <Image
                    src={ivyLeagueSpecialSection.image}
                    alt={ivyLeagueSpecialSection?.title || `${pageName} Special`}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    style={{
                      filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))",
                    }}
                  >
                    <defs>
                      <clipPath id={`til-${slug}`} clipPathUnits="userSpaceOnUse">
                        <path d="M45.235 17.808Q21.782 19.632 22.621 47.924L22.412 220.324Q21.782 245.981 51.393 252.749L204.127 281.166Q233.417 288.339 235.357 260.421L235.97 53.425Q236.438 16.291 204.181 17.969L49.519 17.358Z" />
                      </clipPath>
                    </defs>
                    <image
                      href="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200"
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      clipPath={`url(#til-${slug})`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                    <path
                      d="M45.235 17.808Q21.782 19.632 22.621 47.924L22.412 220.324Q21.782 245.981 51.393 252.749L204.127 281.166Q233.417 288.339 235.357 260.421L235.97 53.425Q236.438 16.291 204.181 17.969L49.519 17.358Z"
                      fill="none"
                      stroke="#f46c44"
                      strokeWidth="1"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <IvyLeagueSection />
      )}
      
      {/* Admission Requirements - Dynamic */}
      {admissionReqSection ? (
        <section className="bg-[#f5f1f0] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 600 }} className="text-[2.6rem] font-bold text-[#f46c44] mb-3 leading-tight">
              <span className="block text-[#656565]">
                {admissionReqSection.title || "Admission Requirements for"}
              </span>
              <span className="block">
                {admissionReqSection.subTitle || `${pageName} Study Abroad`}
              </span>
            </h2>
            {admissionReqSection.description && (
              <p className="text-lg text-gray-700 mb-8">
                {admissionReqSection.description}
              </p>
            )}
            {admissionReqSection.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {admissionReqSection.items.map((item: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    {item.icon && <div className="mb-4">{item.icon}</div>}
                    {item.title && <h3 className="text-xl font-bold mb-2">{item.title}</h3>}
                    {item.description && <p className="text-gray-600">{item.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <AdmissionRequirementsUK />
      )}
      
      {/* How GAway Helps / Scholarships - Dynamic */}
      {howGawayHelpsSection ? (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[2.6rem] font-bold text-center mb-12" style={{ color: '#f46c44', fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}>
              {howGawayHelpsSection.title || `How GAway helps Scholarships to Study in ${pageName}`}
            </h2>
            {howGawayHelpsSection.description && (
              <p className="text-center text-lg text-gray-700 mb-8">
                {howGawayHelpsSection.description}
              </p>
            )}
            {howGawayHelpsSection.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {howGawayHelpsSection.items.map((item: any, index: number) => (
                  <div key={index} className="text-center">
                    {item.icon && <div className="mb-4 text-4xl">{item.icon}</div>}
                    {item.title && <h3 className="text-xl font-bold mb-2">{item.title}</h3>}
                    {item.description && <p className="text-gray-600">{item.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <HowGawayHelps />
      )}
      
      {/* Admission Process Roadmap - Dynamic */}
      <section className="mx-auto bg-[#fff9f4] py-20">
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-[2.6rem] font-bold text-center" style={{ color: '#f46c44', fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}>
            {getSectionData(pageData, 'roadmap_section')?.title || "Admission Process"}
            <span className="text-[#656565]"> {getSectionData(pageData, 'roadmap_section')?.subTitle || "Roadmap"}</span>
          </h2>
          <div className="max-w-5xl mx-auto flex justify-center">
            {roadmapImage || getSectionData(pageData, 'roadmap_section')?.image ? (
              <Image 
                src={roadmapImage || getSectionData(pageData, 'roadmap_section')?.image} 
                alt={`${slug}-admission-process`} 
                width={1000} 
                height={800} 
                className="w-full h-full" 
              />
            ) : (
              <Image src="/images/00123.png" alt={`${slug}-admission-process`} width={1000} height={800} className="w-full h-full" />
            )}
          </div>
        </div>
      </section>
      
      {/* Scholarship Requirements - Dynamic */}
      {scholarshipReqSection ? (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[2.6rem] font-bold text-center mb-12" style={{ color: '#f46c44', fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}>
              {scholarshipReqSection.title || "Scholarship Requirements"}
            </h2>
            {scholarshipReqSection.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scholarshipReqSection.items.map((item: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    {item.title && <h3 className="text-lg font-bold mb-2">{item.title}</h3>}
                    {item.description && <p className="text-gray-600">{item.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <ScholarshipRequirements />
      )}
      
      {/* Image Testimonials - Dynamic */}
      <ImageTestimonial 
        font={true} 
        testimonials={testimonialsData.length > 0 ? testimonialsData : undefined}
        title={imageTestimonialsSection?.title || undefined}
        description={imageTestimonialsSection?.description || imageTestimonialsSection?.subTitle || undefined}
      />
      
      {/* Case Studies - Dynamic */}
      <CaseStudy 
        font={true} 
        caseStudies={caseStudies.length > 0 ? caseStudies : undefined}
        title={caseStudiesTitle || undefined}
        description={caseStudiesSubTitle || caseStudiesSection?.description || undefined}
      />

      {/* CTA Section - Dynamic */}
      <section className="py-24" style={{ backgroundColor: '#f46c44' }}>
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 600 }} className="text-5xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wide">
            {ctaTitle.includes('<span') || ctaTitle.includes('CONQUEST') ? (
              <>
                TOWARD THE <span className="line-through">CONQUEST OF</span> ADMISSION
              </>
            ) : (
              ctaTitle
            )}
          </h2>
          <p style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500 }} className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            {ctaDescription}
          </p>
          <button className="bg-white text-orange-500 px-6 py-2 rounded-lg text-xl font-semibold hover:bg-gray-100 transition shadow-lg">
            {ctaButtonText}
          </button>
        </div>
      </section>
    </div>
  );
}