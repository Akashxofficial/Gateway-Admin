"use client"
import Image from 'next/image';
// import Navigation from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import UniversitySliderClient from "@/components/UniversitySliderClient";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <>
    

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden" style={{ paddingTop: '100px', backgroundColor: '#4d4d4d', borderTop: 'none', boxShadow: 'none', isolation: 'isolate', zIndex: 1 }}>
        {/* Left Orange Accent Bar */}
        <div className="absolute left-[1px] top-[-288px] h-full w-8 bg-[#FF6B35] hidden lg:block z-10"></div>

        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-8 items-center z-10 relative">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#FF6B35] tracking-tight">
              About Us
            </h1>
            <p className="text-lg leading-relaxed max-w-xl text-white">
              Gateway Abroad: Your Launchpad to Global Education. We empower students 
              to achieve their dreams of studying abroad with expert coaching for: 
              IELTS, TOEFL, PTE, GRE, GMAT, SAT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <div className="bg-[#FF6B35] inline-block" style={{ borderTopRightRadius: '25px', overflow: 'hidden' }}>
                <button className="bg-[#FF6B35] hover:bg-orange-600 text-white px-8 py-3 font-bold transition-all" style={{ borderTopRightRadius: '25px' }}>
                  Get Started Today
                </button>
              </div>
              <button className="bg-white hover:bg-gray-100 text-[#FF6B35] px-10 py-3 font-bold transition-all" style={{ borderTopRightRadius: '25px' }}>
                Learn More
              </button>
            </div>
          </div>

          {/* Curved SVG Frame with Image */}
          <div className="relative w-[760px] h-[500px]">
            <div
              className="w-full lg:absolute lg:-top-31  lg:h-[130%] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')",

                WebkitMaskImage: "url('images/about-hero-shape.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",

                maskImage: "url('images/about-hero-shape.png')",
                maskRepeat: "no-repeat",
                maskSize: "cover",
                maskPosition: "center",
              }}
            />
          </div>
        </div>
      </section>
      <div className="relative w-full mt-12 h-[260px] sm:h-[320px] lg:absolute lg:right-0 lg:top-[63px] lg:mt-0 lg:w-auto lg:max-w-[50vw]">
        <img className="w-full h-auto max-w-full object-contain" src="images/about-hero-shape.png" alt="" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
      </div>

      <section className="py-5 mt-35 relative -z-1 " style={{ isolation: 'isolate', zIndex: 0, position: 'relative' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#FF6B35' }}>
              Succeed with the world&apos;s most trusted
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#FF6B35' }}>
              higher education specialist
            </h2>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="pt-2 pb-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">About Company</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                We specialize in helping students achieve their dreams of studying abroad. Our comprehensive support includes university selection, application assistance, visa guidance, and pre-departure preparation. With years of experience and a proven track record, we are committed to making your study abroad journey smooth and successful.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our team of experienced counselors and education experts work tirelessly to provide personalized guidance to each student, ensuring they find the perfect fit for their academic and career goals.
              </p>
              <a href="#" className="text-lg font-semibold hover:opacity-80 transition inline-flex items-center gap-2" style={{ color: '#FF6B35' }}>
                Read More →
              </a>
            </div>
            <div className="relative w-[600px] h-[500px] overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')",
                  backgroundSize: "cover",
                  backgroundPosition: "center right",

                  /* 🔥 MASK FIX */
                  WebkitMaskImage: "url('images/about-hero-shape-2.png')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskPosition: "right center",

                  maskImage: "url('images/about-hero-shape-2.png')",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                  maskPosition: "right center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="pt-12 pb-20 bg-gray-50 w-full mt-8 mb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 pb-10 mb-10">
          <div className="md:w-1/4 md:ml-25">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-800">Our Mission</h2>
          </div>
          <div className="md:w-3/4">
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower students worldwide by providing seamless access to international education through innovative technology and expert mentorship. We are committed to making quality education accessible to all, helping students achieve their academic and career aspirations.
            </p>
          </div>
        </div>
        </div>
        <div className="w-full border-b border-gray-700 mb-10"></div>
        <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/4 md:ml-25">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-gray-800">Our Vision</h2>
          </div>
          <div className="md:w-3/4">
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the most trusted global platform for student recruitment, bridging the gap between talent and opportunity. We envision a world where every student has access to world-class education opportunities, regardless of their background or location.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-5">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <span className="bg-[#FF6B35] text-white px-6 py-3 inline-block font-bold text-2xl lg:text-3xl" style={{ borderTopRightRadius: '50px' }}>What we do</span>
            <div className="h-1 bg-[#FF6B35] mt-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 hover:bg-[#4A4A4A] cursor-pointer" style={{ borderTopRightRadius: '50px' }}>
              <h3 className="font-bold text-xl mb-2 text-gray-800 transition-colors duration-300 group-hover:text-white">University Application Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Step-by-step guidance on selecting the right course and university for your career goals. We help you navigate the complex application process with expert advice.</p>
            </div>
            <div className="group bg-white p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 hover:bg-[#4A4A4A] cursor-pointer rounded-bl-[50px]">
              <h3 className="font-bold text-xl mb-2 text-gray-800 transition-colors duration-300 group-hover:text-white">Visa & Immigration Guidance</h3>
              <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Expert assistance with documentation and interview preparation for a high success rate. We ensure all your visa requirements are met.</p>
            </div>
            <div className="group bg-white p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 hover:bg-[#4A4A4A] cursor-pointer rounded-bl-[50px]">
              <h3 className="font-bold text-xl mb-2 text-gray-800 transition-colors duration-300 group-hover:text-white">Scholarship & Funding Advice</h3>
              <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Help identify and apply for scholarships, grants, and funding opportunities to make your international education more affordable.</p>
            </div>
            <div className="group bg-white p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 hover:bg-[#4A4A4A] cursor-pointer" style={{ borderTopLeftRadius: '50px' }}>
              <h3 className="font-bold text-xl mb-2 text-gray-800 transition-colors duration-300 group-hover:text-white">Accommodation & Pre-Departure Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Assistance with finding accommodation, travel arrangements, and pre-departure orientation to help you settle in comfortably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Behind Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                The Story Behind
              </h2>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#FF6B35' }}>
                GAway Global
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded with a vision to bridge the gap between ambitious students and world-class education opportunities, GAway Global has been at the forefront of international education consultancy.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our journey began with a simple belief: every student deserves access to quality education, regardless of their background. Over the years, we have helped thousands of students realize their dreams of studying abroad, building a reputation for excellence, integrity, and personalized service.
              </p>
            </div>
            <div className="lg:relative lg:-right-40 w-full lg:h-[600px]">
              {/* IMAGE INSIDE SHAPE */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600')",
                  backgroundSize: "cover",
                  backgroundPosition: "center right",

                  WebkitMaskImage: "url('images/about-hero-shape-3.png')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskPosition: "right center",

                  maskImage: "url('images/about-hero-shape-3.png')",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                  maskPosition: "right center",
                }}
              />

              {/* OPTIONAL: ORANGE BACK SHAPE */}
              <div className='w-full h-full  inset-0 bg-black-100'></div>

              {/* OPTIONAL: FRONT SHAPE / BORDER */}
              <motion.div
                className="lg:absolute lg:top-60 lg:-left-30 inset-0 lg:w-100 lg:h-110 border-2 border-white"
                initial={{ y: 200, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.4 }}
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/premium-photo/cute-smiling-girl-student-holding-notebooks-looking-cheerful-camera-studying-college-university-standing-blue-background_1258-70144.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",

                  WebkitMaskImage: "url('images/about-hero-shape-front-3.png')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskPosition: "right center",

                  maskImage: "url('images/about-hero-shape-front-3.png')",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                  maskPosition: "right center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10" style={{ left: '-4px', gap: '100px' }}>
        {/* Left Orange Border */}
        <div className="absolute w-8 bg-[#FF6B35] hidden lg:block z-0" style={{ left: 'calc(50% - 50vw)', top: '-1px', height: '200px' }}></div>
        {/* Right Orange Border */}
        <div className="absolute w-8 bg-[#FF6B35] hidden lg:block z-0" style={{ right: 'calc(50% - 50vw + 20px)', top: '408px', height: '200px' }}></div>
        <div className="md:w-2/5 grid grid-cols-2 bg-[#4A4A4A] text-white p-8 md:p-10 rounded-lg min-h-[450px] border border-gray-300 overflow-hidden relative z-10 md:ml-[100px]">
          <div className="p-4 md:p-5 border-r border-white-400 flex flex-col justify-center items-center text-center overflow-hidden relative">
            <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight" style={{ color: 'white' }}>
              10<span style={{ color: 'white', marginLeft: '6px' }}>+</span>
            </h4>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase text-white mt-3 md:mt-4">Countries</p>
            <div className="absolute bottom-0 right-3 h-px bg-white" style={{ left: '11px' }}></div>
          </div>
          <div className="p-4 md:p-5 flex flex-col justify-center items-center text-center overflow-hidden relative">
            <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight" style={{ color: 'white' }}>
              900<span style={{ color: 'white', marginLeft: '4px'}}>+</span>
            </h4>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase text-white mt-3 md:mt-4 px-2">Universities</p>
            <div className="absolute bottom-0 right-3 h-px bg-white" style={{ left: '12px' }}></div>
          </div>
          <div className="p-4 md:p-5 border-r border-white-600 flex flex-col justify-center items-center text-center overflow-hidden">
            <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight" style={{ color: 'white' }}>
              150k<span style={{ color: 'white', marginLeft: '6px' }}>+</span>
            </h4>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase text-white mt-3 md:mt-4 px-2">Courses</p>
          </div>
          <div className="p-4 md:p-5 flex flex-col justify-center items-center text-center overflow-hidden">
            <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight" style={{ color: 'white' }}>
              90k<span style={{ color: 'white', marginLeft: '6px' }}>+</span>
            </h4>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase text-white mt-3 md:mt-4 px-2">Students Joined</p>
          </div>
        </div>
        <div className="md:w-1/2 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Impact</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We take pride in our ability to transform lives through education. Our numbers reflect the trust students place in us.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With a presence spanning over 10 countries and partnerships with more than 900 universities worldwide, GAway Global has made a significant impact on the international education landscape.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50" style={{ left: '-4px' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          
          <div className="bg-white border border-black rounded-lg overflow-hidden max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Consultation",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  title: "Profile Assessment",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: "University Applications",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: "IELTS Preparation",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Visa Guidance",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "Post-Immigration Guidance",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                }
              ].map((service, index) => (
                <div key={index} className={`p-8 min-h-[320px] bg-white border-black ${index % 3 !== 2 ? 'border-r' : ''} ${index < 3 ? 'border-b' : ''}`}>
                  <div className="text-gray-900 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* University Sliders */}
      {/* <section className="bg-white py-12 space-y-6">
        <UniversitySliderClient direction="left" speed={35} />
        <UniversitySliderClient direction="right" speed={40} />
      </section> */}

      {/* Book Your Online Counselling Session */}
      <section className="py-12 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-7xl font-bold text-white mb-40">
                Book Your Online 
                Counselling
                 Session
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-80">
                
              </p>
            </div>

            <div className="bg-white p-5" style={{ maxWidth: '650px', marginTop: '50px', marginLeft: '-40px', borderRadius: '0' }}>
              <form className="space-y-2.5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name*</label>
                  <input
                    type="text"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">+91 What&apos;s App Number*</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email Address*</label>
                  <input
                    type="email"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">State/City</label>
                  <input
                    type="text"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Select Term</label>
                    <select className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
                      <option>Fall 2024</option>
                      <option>Spring 2025</option>
                      <option>Summer 2025</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Preferred Study Destination</label>
                    <select className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
                      <option>USA</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>Canada</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the terms and conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full text-white px-6 py-2 rounded-lg font-semibold text-base hover:opacity-90 transition"
                  style={{ backgroundColor: '#FF6B35' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
