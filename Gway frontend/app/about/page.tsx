"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import { GraduationCap } from 'lucide-react';
import UniversitySliderClient from '@/components/PageComponent/Unversity';
import UniversitiesSlider from '@/components/PageComponent/UniversitiesSlider';

export default function AboutUsPage() {
  return (
    <div className='bg-[#fffaf7] relative'>
      <section className="relative flex items-center overflow-hidden" style={{ backgroundColor: '#f46c44', borderTop: 'none', boxShadow: 'none', isolation: 'isolate', zIndex: 1 }}>
        <div className="absolute -left-40 top-[0%] opacity-10 pointer-events-none hidden lg:block">
          <div style={{
            transform: 'rotate(-30deg) scaleY(1)',
            mixBlendMode: 'multiply'
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={600}
              height={40}
              className="w-64 h-66 lg:w-116 lg:h-116 object-contain"
            />
          </div>
        </div>
        {/* <div className="absolute left-[1px] top-[-288px] h-full w-8 bg-[#FF6B35] hidden lg:block z-10"></div> */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative">
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
              About Us
            </h1>
            <p className="text-lg max-w-2xl font-medium text-white">
              Gateway Abroad: Your Launchpad to Global Education. We empower students
              to achieve their dreams of studying abroad with expert coaching for:
              IELTS, TOEFL, PTE, GRE, GMAT, SAT.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="
              text-white px-6 sm:px-8 py-2.5 sm:py-3 bg-[#1f2937]
              rounded-tr-4xl shadow-[-4px_0px_4px_0px_rgba(0,0,0,0.55)] text-base font-semibold
              hover:bg-black hover:shadow-[-6px_6px_5px_0_rgba(0,0,0,0.60)] 
              flex items-center justify-center gap-2
              transition-all hover:opacity-90
            "
              >
                Get Free Counselling
              </button>

              <button
                className="
              text-black/80 px-6 sm:px-8 py-2.5 sm:py-3 bg-white
              rounded-tr-4xl shadow-[-4px_0px_4px_0px_rgba(0,0,0,0.55)] text-base  font-semibold
              transition-all hover:bg-black hover:text-white hover:shadow-[-6px_6px_5px_0_rgba(0,0,0,0.60)] 
            "
              >
                Check Your Eligibility
              </button>
            </div>
          </div>
          <div className="relative w-[760px] h-full">
            <div
              className="w-full h-[600px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://buffer.com/resources/content/images/2025/03/social-media-image-sizes.png')",
                WebkitMaskImage: "url('images/about-hero-shape.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "bottom",
                maskImage: "url('images/about-hero-shape.png')",
                maskRepeat: "no-repeat",
                maskSize: "cover",
                maskPosition: "center",
              }}
            />

          </div>
        </div>


      </section>
      <div className="relative w-full -mt-12 h-[260px] sm:h-[220px] lg:absolute lg:right-0 lg:top-[-15px] lg:mt-0 lg:w-auto lg:max-w-[48vw]">
        <img className="w-full h-auto max-w-full object-contain" src="images/about-hero-shape.png" alt="" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
      </div>


      <section className="py-5 mt-35 " style={{ isolation: 'isolate', zIndex: 0, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-2">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-[3rem] font-bold mb-2" style={{ color: '#FF6B35' }}>
              Succeed with the world&apos;s most trusted
            </h2>
            <h2 className="text-4xl lg:text-[3rem] font-bold" style={{ color: '#FF6B35' }}>
              higher education specialist
            </h2>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-12 px-2">
        <div className="max-w-7xl mx-auto bg-[#f9f5f2]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
            <div className='py-10'>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">About Company</h2>
              <p className="text-gray-700 text-base font-semibold leading-relaxed mb-10">
                We specialize in helping students achieve their dreams of studying abroad. Our comprehensive support includes university selection, application assistance, visa guidance, and pre-departure preparation. With years of experience and a proven track record, we are committed to making your study abroad journey smooth and successful.
              </p>
              <p className="text-gray-700 text-base font-semibold leading-relaxed mb-6">
                Our team of experienced counselors and education experts work tirelessly to provide personalized guidance to each student, ensuring they find the perfect fit for their academic and career goals.
              </p>
              <a href="#" className="text-base font-semibold hover:opacity-80 transition inline-flex items-center gap-2" style={{ color: '#FF6B35' }}>
                Read More →
              </a>
            </div>
            <div className="relative w-full min-h-[550px] h-full overflow-hidden">
              <div
                className="w-full h-full "
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')",
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
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
      <section className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 pb-4">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold uppercase text-gray-800">Our Mission</h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 text-base font-semibold leading-relaxed">
                To empower students worldwide by providing seamless access to international education through innovative technology and expert mentorship. We are committed to making quality education accessible to all, helping students achieve their academic and career aspirations.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-gray-500 mb-4"></div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            <div className="md:w-1/4">
              <h2 className="text-3xl font-bold uppercase text-gray-800">Our Vision</h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600 text-base font-semibold leading-relaxed">
                To be the most trusted global platform for student recruitment, bridging the gap between talent and opportunity. We envision a world where every student has access to world-class education opportunities, regardless of their background or location.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-7xl mx-auto ">
          <div className="mb-8">
            <span className="bg-[#FF6B35] text-white px-6 py-3 inline-block font-bold text-2xl lg:text-3xl" style={{ borderTopRightRadius: '50px' }}>What we do</span>
            <div className="h-1 bg-[#FF6B35] mt-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
            <div className="group bg-white p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 hover:bg-[#4A4A4A] cursor-pointer" style={{ borderTopRightRadius: '50px' }}>
              <GraduationCap className='h-12 w-12 mb-2 group-hover:text-white' />
              <h3 className="font-bold text-2xl mb-2 text-[#616262] transition-colors duration-300 group-hover:text-white">University Application Support</h3>
              <p className="text-gray-600 text-base font-semibold leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Step-by-step guidance on selecting the right course and university for your career goals. We help you navigate the complex application process with expert advice.</p>
            </div>
            <div className="group bg-[#4A4A4A] p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 hover:bg-white cursor-pointer rounded-bl-[50px]">
              <GraduationCap className='h-12 w-12 mb-2 text-white group-hover:text-black' />
              <h3 className="font-bold text-2xl mb-2 group-hover:text-[#616262] text-white transition-colors duration-300">University Application Support</h3>
              <p className=" group-hover:text-gray-600 text-white  text-base font-semibold leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Step-by-step guidance on selecting the right course and university for your career goals. We help you navigate the complex application process with expert advice.</p>
            </div>
            <div className="group hover:bg-white p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 bg-[#4A4A4A] cursor-pointer rounded-tr-[50px]">
              <GraduationCap className='h-12 w-12 mb-2 text-white group-hover:text-black' />
              <h3 className="font-bold text-2xl mb-2 group-hover:text-[#616262] text-white transition-colors duration-300">University Application Support</h3>
              <p className=" group-hover:text-gray-600 text-white  text-base font-semibold leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Step-by-step guidance on selecting the right course and university for your career goals. We help you navigate the complex application process with expert advice.</p>
            </div>
            <div className="group bg-white p-8 shadow-sm border border-gray-200 min-h-[280px] transition-colors duration-300 hover:bg-[#4A4A4A] cursor-pointer" style={{ borderTopLeftRadius: '50px' }}>
              <GraduationCap className='h-12 w-12 mb-2 group-hover:text-white' />
              <h3 className="font-bold text-2xl mb-2 text-[#616262] transition-colors duration-300 group-hover:text-white">University Application Support</h3>
              <p className="text-gray-600 text-base font-semibold leading-relaxed transition-colors duration-300 group-hover:text-gray-300">Step-by-step guidance on selecting the right course and university for your career goals. We help you navigate the complex application process with expert advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Behind Section */}
      <section className="py-20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-[2.6rem] font-bold text-[#616262] mb-2">
                The Story Behind
              </h3>
              <h3 className="text-4xl md:text-[2.6rem] font-bold mb-6 underline" style={{ color: '#FF6B35' }}>
                GAway Global
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-semibold mb-3">
                Founded with a vision to bridge the gap between ambitious students and world-class education opportunities, GAway Global has been at the forefront of international education consultancy.
              </p>
              <p className="text-gray-600 text-base leading-relaxed font-semibold">
                Our journey began with a simple belief: every student deserves access to quality education, regardless of their background. Over the years, we have helped thousands of students realize their dreams of studying abroad, building a reputation for excellence, integrity, and personalized service.
              </p>
            </div>
            <div className="lg:relative lg:-right-32 w-full lg:h-[600px]">
              <div className="absolute inset-0"
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
              <div className='w-full h-full  inset-0 bg-black-100'></div>
              <motion.div
                className="lg:absolute lg:top-50 lg:-left-20 inset-0 lg:w-100 lg:h-110 border-1 border-white"
                initial={{ y: 200, opacity: 0 }}
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
      <section className="py-20 max-w-7xl mx-auto px-2 flex flex-col gap-6 md:flex-row items-center relative z-10">
        {/* Left Orange Border */}
        <div className="absolute w-8 bg-[#f46c44] hidden lg:block z-0" style={{ left: 'calc(50% - 50vw)', top: '-1px', height: '200px' }}></div>
        {/* Right Orange Border */}
        <div className="absolute w-8 bg-[#f46c44] hidden lg:block z-0" style={{ right: 'calc(50% - 50vw + 20px)', top: '408px', height: '200px' }}></div>

        <div className="md:w-1/2 grid grid-cols-2 bg-[#f46c44] text-white min-h-[480px] border border-gray-300 overflow-hidden relative">
          <div className="p-2 border-r border-white-400 flex flex-col justify-center items-center text-center overflow-hidden relative">
            <h4 className="text-lg sm:text-3xl md:text-7xl font-extrabold mb-0 pb-0" style={{ color: 'white' }}>
              10<span style={{ color: 'white', marginLeft: '2px' }}>+</span>
            </h4>
            <p className="text-base lg:text-base xl:text-lg 2xl:text-xl uppercase text-white font-bold mt-2">Countries</p>
            <div className="absolute bottom-0 right-3 h-px bg-white" style={{ left: '11px' }}></div>
          </div>
          <div className="p-4 md:p-5 flex flex-col justify-center items-center text-center overflow-hidden relative">
            <h4 className="text-lg sm:text-3xl md:text-7xl font-extrabold" style={{ color: 'white' }}>
              900<span style={{ color: 'white', marginLeft: '4px' }}>+</span>
            </h4>
            <p className="text-base lg:text-base xl:text-lg 2xl:text-xl uppercase text-white font-bold mt-2">Universities</p>
            <div className="absolute bottom-0 right-3 h-px bg-white" style={{ left: '12px' }}></div>
          </div>
          <div className="p-4 md:p-5 border-r border-white-600 flex flex-col justify-center items-center text-center overflow-hidden">
            <h4 className="text-lg sm:text-3xl md:text-7xl font-extrabold" style={{ color: 'white' }}>
              150k<span style={{ color: 'white', marginLeft: '6px' }}>+</span>
            </h4>
            <p className="text-base lg:text-base xl:text-lg 2xl:text-xl uppercase text-white font-bold mt-2">Courses</p>
          </div>
          <div className="p-4 md:p-5 flex flex-col justify-center items-center text-center overflow-hidden">
            <h4 className="text-lg sm:text-3xl md:text-7xl font-extrabold" style={{ color: 'white' }}>
              90k<span style={{ color: 'white', marginLeft: '6px' }}>+</span>
            </h4>
            <p className="text-base lg:text-base xl:text-lg 2xl:text-xl uppercase text-white font-bold mt-2">Students Joined</p>
          </div>
        </div>
        <div className="md:w-1/2 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 text-[#626362]">Our Impact</h2>
          <p className="text-gray-700 font-semibold text-base leading-relaxed mb-4">
            We take pride in our ability to transform lives through education. Our numbers reflect the trust students place in us.
          </p>
          <p className="text-gray-700 font-semibold text-base leading-relaxed">
            With a presence spanning over 10 countries and partnerships with more than 900 universities worldwide, GAway Global has made a significant impact on the international education landscape.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20" style={{ left: '-4px' }}>
        <div className="max-w-7xl mx-auto px-2">
          <h2 className="text-4xl font-bold text-center text-[#626362] mb-12">Our Services</h2>

          <div className="bg-white border border-[#626362] overflow-hidden mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {[
                {
                  icon: (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Consultation",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  title: "Profile Assessment",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: "University Applications",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: "IELTS Preparation",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Visa Guidance",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                },
                {
                  icon: (
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "Post-Immigration Guidance",
                  description: "We provide a free consultation to students who wish to study abroad. Our expert counsellors will help you pick the right direction and be with you every step of the way."
                }
              ].map((service, index) => (
                <div key={index} className={`p-8 min-h-[200px] bg-white border-[#626362] ${index % 3 !== 2 ? 'border-r' : ''} ${index < 3 ? 'border-b' : ''}`}>
                  <div className="text-orange-500 mb-2  flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-700 font-semibold text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <UniversitiesSlider />

      {/* Book Your Online Counselling Session */}
      <section className="py-12 bg-gray-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(1px)' }}></div>
        <div className="max-w-7xl mx-auto px-2 py-12 relative z-1">
          <div className="flex justify-between items- gap-6">
            <div className='w-35/80'>
              <h2 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
                Book Your Online
                Counselling
                Session
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-80">

              </p>
            </div>

            <div className="bg-white w-40/80 p-6 py-12 rounded-lg">
              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder='Name *'
                    className="w-full px-2 py-1.5 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#FF6B35]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder='Mobile Number *'
                    className="w-full px-2 py-1.5 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#FF6B35]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder='Email Address *'
                    className="w-full px-2 py-1.5 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#FF6B35]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder='Preferred Study Destination *'
                    className="w-full px-2 py-1.5 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#FF6B35]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder='Message *'
                    className="w-full px-2 py-1.5 border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-[#FF6B35]"
                  />
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
    </div>
  );
}
