"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BadgeIcon, Globe, NutOffIcon, PanelsTopLeftIcon, TargetIcon, Users, VideoIcon, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import UniversitySliderClient from "@/components/PageComponent/Unversity"
import AboutTabsSection from "@/components/PageComponent/TrustTabs"
import VideoTestimonialsSlider from "@/components/PageComponent/VideoTestimonial"
import ImageTestimonial from "@/components/ImageTestimonial"
import VideoInSvgShape from "@/components/PageComponent/VideoShape"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

function TimelineItem({
  top = false,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  icon,
}: {
  top?: boolean;
  title: string;
  subtitle: string;
  titleColor: string;
  subtitleColor: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative text-center px-4">

      {/* CONNECTOR LINE */}
      <div
        className="
          absolute
          left-1/2 -translate-x-1/2
          top-0
          w-[3px]
          h-[60%]
          bg-[#6b7280]
          lg:-top-21 lg:h-[70%]
        "
      />

      {/* CONTENT */}
      <div
        className={`
          relative
          ${top ? "mt-8 lg:mt-10" : "mt-6 lg:mt-0"}
        `}
      >
        {/* ICON */}
        <div
          className="
            relative z-10
            mx-auto mb-3
            w-16 h-16
            lg:w-20 lg:h-20
            rounded-full
            border-[2px] border-[#f46c44]
            bg-white
            flex items-center justify-center
          "
        >
          {icon}
        </div>

        {/* TITLE */}
        <h3
          className="
            font-bold leading-tight
            text-lg sm:text-xl lg:text-2xl
          "
          style={{ color: titleColor }}
        >
          {title}
        </h3>

        {/* SUBTITLE */}
        <p
          className="
            leading-tight
            text-base sm:text-lg lg:text-xl
          "
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}



export default function Home() {
  return (
    <main className="">
      <section
  className="
    relative overflow-hidden
    bg-white
    bg-[url('/images/hero.jpg')]
    bg-no-repeat bg-cover bg-bottom
    py-12 sm:py-16 lg:py-0
  "
>
  {/* mobile overlay only */}
  <div className="absolute inset-0 bg-white/50 md:bg-transparent pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
    {/* HERO GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-2">
      
      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight">
          <span className="block text-[#646162]">
            Your Gateway to the World&apos;s
          </span>

          <span className="relative inline-block mt-3 text-[#ea6c46]">
            Top Universities
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#f46c44]">
              <span className="absolute right-0 -top-[3px] w-2 h-2 rounded-full bg-[#f46c44]" />
            </span>
          </span>
        </h1>

        <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
          Specialized admissions guidance for{" "}
          <span className="font-semibold text-[#f46c44]">
            Ivy League, Russell Group, German & Italian Public Universities
          </span>
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            className="
              text-white px-6 sm:px-8 py-2.5 sm:py-3
              rounded-2xl text-base sm:text-lg font-semibold
              flex items-center justify-center gap-2
              transition-all hover:opacity-90
            "
            style={{
              backgroundColor: "#f46c44",
              transform: "perspective(1000px) rotateY(12deg)",
              transformStyle: "preserve-3d",
            }}
          >
            Get Free Counselling
          </button>

          <button
            className="
              text-white px-6 sm:px-8 py-2.5 sm:py-3
              rounded-2xl text-base sm:text-lg font-semibold
              transition-all hover:bg-black
            "
            style={{
              backgroundColor: "#1f2937",
              transform: "perspective(1000px) rotateY(15deg)",
              transformStyle: "preserve-3d",
            }}
          >
            Check Your Eligibility
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/images/logo-design.png"
          alt="Graduation Cap Illustration"
          width={550}
          height={450}
          className="object-contain max-w-[85%] sm:max-w-[70%] lg:max-w-full"
        />
      </div>
    </div>

    {/* STATS SECTION */}
    <div className="py-12 lg:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {[
          { value: "97%", title: "Application Acceptance", sub: "in Public Universities" },
          { value: "#1", title: "Consultancy for", sub: "Top-Tier Programs" },
          { value: "5000+", title: "Successful", sub: "Student Applications" },
          { value: "15+", title: "Years of", sub: "Expert Experience" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center sm:items-start gap-4 text-center sm:text-left"
          >
            <Image
              src="https://toppng.com/uploads/preview/graduation-cap-svg-icon-free-graduation-cap-icon-11553393846gq7rcr1qsx.png"
              alt="Graduation Cap"
              width={70}
              height={70}
              className="object-contain mx-auto sm:mx-0"
            />
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-800">
                {item.value}
              </div>
              <div className="text-gray-700 leading-snug">
                <div>{item.title}</div>
                <div>{item.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <UniversitySliderClient />

      <section
  className="
    relative py-12 sm:py-16 lg:py-20 overflow-hidden
    bg-[url('/shapes/bg-02.jpg')]
    bg-cover bg-center bg-no-repeat
  "
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* HEADING */}
    <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-center mb-10 lg:mb-12">
      <span className="text-[#ea6c46]">Why</span>{" "}
      <span className="text-[#646162]">GAway Global ?</span>
    </h2>

    {/* TIMELINE WRAPPER */}
    <div className="relative">
      
      {/* HORIZONTAL LINE (desktop only) */}
      <div className="hidden lg:block absolute top-0 left-0 right-0 h-[4px] bg-[#f46c44]">
        <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#f46c44] rounded-full" />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#f46c44] rounded-full" />
      </div>

      {/* MOBILE / TABLET VERTICAL LINE */}
      <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#f46c44] -translate-x-1/2" />

      {/* ITEMS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12 pt-12 lg:pt-24">

        {/* ITEM 1 */}
        <TimelineItem
          title="Specialized ONLY"
          subtitle="in elite admissions"
          titleColor="#646162"
          subtitleColor="#ea6c46"
          icon={<TargetIcon className="h-9 w-9 lg:h-10 lg:w-10 text-[#646162]" />}
        />

        {/* ITEM 2 */}
        <TimelineItem
          top
          title="10+ yrs"
          subtitle="experience"
          titleColor="#ea6c46"
          subtitleColor="#646162"
          icon={<BadgeIcon className="h-9 w-9 lg:h-10 lg:w-10 text-[#646162]" />}
        />

        {/* ITEM 3 */}
        <TimelineItem
          title="Transparent process"
          subtitle="(No hidden fees)"
          titleColor="#ea6c46"
          subtitleColor="#646162"
          icon={<NutOffIcon className="h-9 w-9 lg:h-10 lg:w-10 text-[#646162]" />}
        />

        {/* ITEM 4 */}
        <TimelineItem
          top
          title="Country-specific"
          subtitle="experts"
          titleColor="#646162"
          subtitleColor="#ea6c46"
          icon={<PanelsTopLeftIcon className="h-9 w-9 lg:h-10 lg:w-10 text-[#646162]" />}
        />
      </div>
    </div>
  </div>
</section>


      <section
  className="
    relative overflow-hidden w-full
    py-12 sm:py-16 lg:py-18
    bg-[url('/shapes/bg01.jpg')]
    bg-cover bg-center bg-no-repeat
  "
>
  <div className="max-w-7xl mx-auto">
    <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-2 items-center w-full min-h-[500px]">

        {/* LEFT – IMAGE STACK */}
        <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[550px] flex justify-center lg:justify-start">

          {/* BACK IMAGE */}
          <div
            className="relative"
            style={{ perspective: "500px" }}
          >
            <div
              className="
                w-[200px] h-[260px]
                sm:w-[280px] sm:h-[380px]
                lg:w-75 lg:h-95
                rounded-4xl overflow-hidden
                border-[2px] border-orange-500
                bg-white
                cursor-pointer
                transition-all duration-500 ease-out
                hover:scale-[1.01] hover:shadow-2xl
              "
              style={{
                transform: "rotateY(12deg) rotateX(5deg) rotateZ(4deg) skewX(6deg)",
              }}
            >
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_639205-CBT99685072123_112025-O.webp"
                alt=""
                className="w-full h-full object-cover scale-110"
                style={{
                  transform: "rotateY(-12deg) rotateX(5deg) rotateZ(-5deg) skewX(-5deg)",
                }}
              />
            </div>
          </div>

          {/* FRONT IMAGE */}
          <div
            className="
              absolute bottom-0
              left-1/2 lg:left-30
              -translate-x-1/2 lg:translate-x-0
            "
            style={{ perspective: "500px" }}
          >
            <div
              className="
                w-[220px] h-[280px]
                sm:w-[300px] sm:h-[380px]
                lg:w-80 lg:h-95
                rounded-4xl overflow-hidden
                border-[2px] border-orange-500
                bg-white z-20
                cursor-pointer
                transition-all duration-500 ease-out
                hover:scale-[1.01] hover:shadow-2xl
              "
              style={{
                transform: "rotateY(-10deg) rotateX(5deg) rotateZ(-5deg) skewX(-5deg)",
              }}
            >
              <img
                src="https://img.freepik.com/fotos-premium/uma-garota-universitaria-sorrindo-com-passaporte-e-carta-de-aceitacao-para-estudar-no-exterior-visto-de-estudante_1317017-1759.jpg"
                alt=""
                className="w-full h-full object-cover scale-115"
                style={{
                  transform: "rotateY(5deg) rotateX(15deg) rotateZ(8deg) skewX(8deg)",
                }}
              />
            </div>

            {/* EXPERIENCE BADGE */}
            <div
              className="
                absolute -left-8 sm:-left-12 bottom-16
                w-24 h-24 sm:w-28 sm:h-28 lg:w-30 lg:h-30
                rounded-full bg-white
                border-[3px] border-orange-600
                shadow-2xl z-40
                flex flex-col items-center justify-center
              "
            >
              <span className="text-3xl sm:text-4xl font-bold text-orange-500">15</span>
              <span className="text-[10px] sm:text-xs text-orange-500 text-center font-semibold leading-tight">
                Years of<br />Experience
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-tight mb-3">
            <span className="text-[#ea6c46]">Your Trusted Partner in</span>
            <br />
            <span className="text-[#646162]">Immigration Services</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
            We provide reliable guidance for study, work, and permanent residency
            applications. Our experienced team supports you at every step of your
            immigration journey.
          </p>

          <AboutTabsSection />

          {/* CTA */}
          <div className="mt-4 flex justify-center lg:justify-start">
            <button
              className="
                text-white px-6 sm:px-8 py-2.5 sm:py-3
                rounded-full font-semibold text-base sm:text-lg
                shadow-lg transition-all hover:opacity-90
              "
              style={{ backgroundColor: "#f46c44" }}
            >
              About Us
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      <VideoTestimonialsSlider />
      <ImageTestimonial />
      <section className="py-18 overflow-hidden" style={{ backgroundColor: '#ffece5' }}>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[2.6rem] font-bold mb-2">
              <span style={{ color: '#f46c44' }}>Top Universities</span>{" "}
              <span className="text-gray-600">Hub</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore globally recognized university groups across major study destinations,
              carefully curated for ambitious international students.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

            <div className="text-center group">
              <div className="relative mx-auto w-full max-w-[280px] mb-6">
                <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
                  <defs>
                    <clipPath id="tiltedClip1">
                      <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z" />
                    </clipPath>
                  </defs>
                  <image
                    href="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
                    x="0" y="0" width="300" height="200"
                    clipPath="url(#tiltedClip1)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z"
                    fill="none"
                    stroke="#f46c44"
                    strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Ivy League Universities
              </h3>
              <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
                America&apos;s most prestigious institutions
              </p>
            </div>

            {/* Russell Group */}
            <div className="text-center group">
              <div className="relative mx-auto w-full max-w-[280px] mb-6">
                <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
                  <defs>
                    <clipPath id="tiltedClip2">
                      <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z" />
                    </clipPath>
                  </defs>
                  <image
                    href="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
                    x="0" y="0" width="300" height="200"
                    clipPath="url(#tiltedClip2)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z"
                    fill="none"
                    stroke="#f46c44"
                    strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Russell Group Universities
              </h3>
              <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
                Leading UK research universities
              </p>
            </div>

            {/* TU9 */}
            <div className="text-center group">
              <div className="relative mx-auto w-full max-w-[280px] mb-6">
                <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
                  <defs>
                    <clipPath id="tiltedClip3">
                      <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z" />
                    </clipPath>
                  </defs>
                  <image
                    href="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop"
                    x="0" y="0" width="300" height="200"
                    clipPath="url(#tiltedClip3)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z"
                    fill="none"
                    stroke="#f46c44"
                    strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                TU9 & Public Universities
              </h3>
              <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
                Germany&apos;s top technical institutions
              </p>
            </div>

            {/* Italian Public */}
            <div className="text-center group">
              <div className="relative mx-auto w-full max-w-[280px] mb-6">
                <svg viewBox="0 0 300 200" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
                  <defs>
                    <clipPath id="tiltedClip4">
                      <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z" />
                    </clipPath>
                  </defs>
                  <image
                    href="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop"
                    x="0" y="0" width="300" height="200"
                    clipPath="url(#tiltedClip4)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 16 190 81 195 L 251 196 Q 289 187 287 153 L 277 74 Q 271 40 233 32 L 72 10 Z"
                    fill="none"
                    stroke="#f46c44"
                    strokeWidth="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Italian Public Universities
              </h3>
              <p className="text-sm font-medium" style={{ color: '#f46c44' }}>
                Affordable education with global value
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="
  py-12 sm:py-14 lg:py-16
  bg-gradient-to-b from-[#f3f3f3] to-white
  bg-[url('/bg-01.jpg')]
  bg-cover bg-center bg-no-repeat
  relative
">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">

    {/* Heading */}
    <div className="text-center mb-10 lg:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold">
        <span className="text-[#f46c44]">GA way</span>{" "}
        <span className="text-gray-600">global Blogs</span>
      </h2>
      <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
        Smart insights, expert guidance, and real updates to help you plan your
        study abroad journey with confidence.
      </p>
    </div>

    {/* Grid */}
    <div className="
      grid grid-cols-1
      md:grid-cols-3
      gap-y-14 sm:gap-y-16
      gap-x-8 lg:gap-x-12
    ">
      {[
        {
          title: "Preparing for TOEFL Speaking Scoring section: Key Skills and Practice",
          desc: "Particularly for non-native English speakers, the TOEFL",
          img: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
        },
        {
          title: "Scholarships for Indian Students",
          desc: "Top funding opportunities for Indian applicants",
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
        },
        {
          title: "Admissions Success Guide",
          desc: "Complete roadmap for global university admissions",
          img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="
            text-center group
            max-w-[340px] sm:max-w-[380px] lg:w-full
            mx-auto
          "
        >
          <div className="relative mx-auto w-full mb-3">
            <svg viewBox="0 0 305 200" className="w-full h-auto">
              <defs>
                <clipPath id={`blogclip-${i}`}>
                  <path d="M 71 10 Q 20 8 15 55 L 16 137 Q 15 195 80 196 L 273 197 Q 306 194 303 155 L 292 60 Q 284 21 247 20 L 72 10 Z" />
                </clipPath>
              </defs>
              <image
                href={card.img}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#blogclip-${i})`}
              />
              <path
                d="M 71 10 Q 20 8 15 55 L 16 137 Q 15 195 80 196 L 273 197 Q 306 194 303 155 L 292 60 Q 284 21 247 20 L 72 10 Z"
                fill="none"
                stroke="#f46c44"
                strokeWidth="1"
              />
            </svg>
          </div>

          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-2 leading-snug">
            {card.title}
          </h3>

          <p className="text-xs sm:text-sm font-medium text-[#f46c44]">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


 


    </main>
  )
}
