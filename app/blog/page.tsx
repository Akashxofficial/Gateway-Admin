"use client"
import Image from 'next/image';
// import Navigation from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import UniversitySliderClient from "@/components/UniversitySliderClient";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Send, Linkedin } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Affordable Countries To Studyin Abroad",
      category: "Study Abroad",
      date: "January 7, 2026",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "This section explores emerging and budget friendly destinations offering globally recognised MBA programmes, including Germany, France..."
    },
    {
      id: 2,
      title: "Top Universities for Engineering Programs",
      category: "Universities",
      date: "January 5, 2026",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "Discover the best engineering programs worldwide and what makes these universities stand out in the field of technology and innovation."
    },
    {
      id: 3,
      title: "Visa Application Process Simplified",
      category: "Visa",
      date: "January 3, 2026",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "A comprehensive guide to understanding visa requirements, documentation, and the application process for studying abroad."
    },
    {
      id: 4,
      title: "Scholarship Opportunities in 2026",
      category: "Scholarships",
      date: "December 30, 2025",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "Explore various scholarship opportunities available for international students in top study destinations around the world."
    },
    {
      id: 5,
      title: "IELTS vs TOEFL: Which One Should You Choose?",
      category: "Exams",
      date: "December 28, 2025",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "A detailed comparison between IELTS and TOEFL to help you decide which English proficiency test is right for your goals."
    },
    {
      id: 6,
      title: "Student Life in Canada: What to Expect",
      category: "Study Abroad",
      date: "December 25, 2025",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "Get insights into student life, culture, accommodation, and opportunities available for international students in Canada."
    },
    {
      id: 7,
      title: "MBA Programs in Europe: A Complete Guide",
      category: "Study Abroad",
      date: "December 22, 2025",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "Explore top MBA programs across Europe, including admission requirements, costs, and career opportunities for international students."
    },
    {
      id: 8,
      title: "Understanding Student Visa Requirements",
      category: "Visa",
      date: "December 20, 2025",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "Complete guide to student visa requirements for major study destinations including USA, UK, Canada, and Australia."
    },
    {
      id: 9,
      title: "Preparing for GRE and GMAT Exams",
      category: "Exams",
      date: "December 18, 2025",
      image: "https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg",
      excerpt: "Essential tips and strategies for preparing for GRE and GMAT exams to achieve your target scores for graduate programs."
    }
  ];

  const filterTagsRow1 = ["UK", "USA", "VISA", "NEW ZEALAND", "PTE"];
  const filterTagsRow2 = ["CANADA", "DUBAI", "SAT", "IRELAND"];
  const filterTagsRow3 = ["UK", "USA", "VISA", "NEW ZEALAND", "PTE"];

  return (
   <>
  

      {/* Hero Section */}
      <section className="relative py-10 bg-gray-50" style={{ paddingTop: '150px' }}>
        {/* Decorative Arrow on Left Side */}
        <div className="absolute -left-30 top-[55%] -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <div style={{ 
            transform: 'rotate(35deg)',
            filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
            mixBlendMode: 'multiply'
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={400}
              height={40}
              className="w-64 h-66 lg:w-96 lg:h-96 object-contain"
            />
          </div>
        </div>
        {/* Decorative Arrow on Right Side */}
        <div className="absolute -right-30 top-[55%] -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <Image
            src="images/g logo.png"
            alt="Decorative Arrow"
            width={400}
            height={40}
            className="w-64 h-66 lg:w-96 lg:h-96 object-contain"
            style={{ transform: 'scaleX(-1) rotate(-35deg)' }}
          />
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-6xl lg:text-[150px] font-bold text-gray-800 tracking-tight flex items-center justify-center gap-2">
              BLO
              <Image
                src="images/g logo.png"
                alt="G Logo"
                width={150}
                height={150}
                
                className="w-16 h-16 lg:w-35 lg:h-35   object-contain "
              />
              S
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Studying abroad is not only academic experience but it&apos;s a lifetime experience. Global Study Abroad Blog will help you with best resources, advice and tips.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="flex flex-col sm:flex-row gap-4 bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-400">
                <div className="flex-1 flex items-center gap-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="flex-1 outline-none text-gray-700"
                  />
                </div>
                <button className="bg-[#4A4A4A] hover:bg-gray-700 text-white px-8 py-3 font-bold transition-all rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Map with Filter Tags */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-0">
          <div className="relative bg-[#FF6B35] rounded-lg p-8 md:p-12 overflow-hidden min-h-[390px]" style={{ backgroundImage: 'url(images/map.png)', backgroundSize: '50% auto', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat' }}>
            {/* Filter Tags - Right Side */}
            <div className="relative z-15 flex flex-col items-end gap-2 mr-40 mt-8">
              {/* First Row */}
              <div className="flex flex-wrap justify-end gap-2">
                {filterTagsRow1.map((tag, index) => (
                  <button
                    key={index}
                    className={`px-8 py-5 font-semibold text-base transition-all bg-white text-gray-800 border border-white hover:bg-gray-600 hover:text-white ${
                      index === 0 && tag === "UK" ? "rounded-tl-3xl" : "rounded-none"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {/* Second Row */}
              <div className="flex flex-wrap justify-end gap-2">
                {filterTagsRow2.map((tag, index) => (
                  <button
                    key={index}
                    className={`${tag === "CANADA" ? "px-10" : "px-11"} py-5 rounded-none font-semibold text-base transition-all bg-white text-gray-800 border border-white hover:bg-gray-600 hover:text-white`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {/* Third Row */}
              <div className="flex flex-wrap justify-end gap-2">
                {filterTagsRow3.map((tag, index) => (
                  <button
                    key={index}
                    className="px-8 py-5 rounded-none font-semibold text-base transition-all bg-white text-gray-800 border border-white hover:bg-gray-600 hover:text-white"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-white py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* G Logo for third row last column - behind the card */}
          <div className="absolute right-[-70px] top-[70%] -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block z-0">
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={400}
              height={80}
              className="w-64 h-66 lg:w-96 lg:h-96 object-contain"
              style={{ transform: 'scaleX(-1) rotate(-40deg)' }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-[111]">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className="
                  relative bg-white border border-[#FF6B35]
                  rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[100px]
                  transition-all duration-300 hover:shadow-xl
                "
              >
                {/* ORANGE BACKGROUND SHAPE */}
                <div
                  className="
                    absolute -top-2 -left-2
                    w-28 h-28 sm:w-36 sm:h-36 lg:w-45 lg:h-45
                    rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[100px]
                    bg-[#FF6B35] -z-10
                  "
                ></div>

                {/* IMAGE */}
                <div
                  className="
                    relative overflow-hidden bg-gray-300
                    h-[200px] sm:h-[220px] lg:h-[260px]
                    rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[100px]
                  "
                >
                  <img
                    src={post.image || 'https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg'}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg';
                    }}
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0 bg-black/50
                      flex flex-col items-center justify-center text-center px-4
                      rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[100px]
                      pointer-events-none
                    "
                  >
                    <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-semibold mb-2 sm:mb-4 lg:mb-6">
                      {post.title}
                    </h3>
                    <p className="text-white text-sm sm:text-base lg:text-lg">
                      {post.category} {post.date}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5 lg:p-6 text-center">
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-4 lg:mb-6">
                    {post.excerpt}
                  </p>

                  <button
                    className="
                      bg-[#FF6B35] hover:bg-[#e85f2f]
                      text-white text-sm font-semibold
                      px-5 py-2 rounded transition-colors
                    "
                  >
                    Read More »
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all text-gray-700">
              &lt;&lt;
            </button>
            <button className="px-4 py-2 rounded-full bg-[#FF6B35] text-white font-semibold w-10 h-10">
              1
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all text-gray-700 w-10 h-10">
              2
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all text-gray-700 w-10 h-10">
              3
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all text-gray-700 w-10 h-10">
              19
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all text-gray-700">
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Join Our Exclusive Study Abroad Network */}
      <section className="py-10 bg-[#FF6B35] relative overflow-visible">
        {/* Decorative Arrow on Left Side */}
        <div className="absolute -left-30 top-2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
          <div style={{ 
            transform: 'rotate(-20deg)',
            filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
            mixBlendMode: 'multiply'
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={400}
              height={40}
              className="w-64 h-66 lg:w-96 lg:h-96 object-contain"
            />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Join Our Exclusive Study Abroad Network
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Get updates on what&apos;s happening around in the study abroad space, important notifications on events and journeys of other students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-[500px] px-6 py-3 rounded-none outline-none text-gray-800 bg-white border border-gray-300"
              />
              <button className="bg-white text-[#FF6B35] w-full sm:w-[200px] px-6 py-3 rounded-none font-bold hover:bg-gray-100 transition-all whitespace-nowrap">
                I AM IN
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </button>
              <button
                className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </button>
              <button
                className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </button>
              <button
                className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </button>
              <button
                className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                aria-label="Telegram"
              >
                <Send size={24} />
              </button>
              <button
                className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </button>
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
                    <label className="block text-gray-700 font-medium mb-1">Select Time</label>
                    <select className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]">
                      <option>10:00 AM</option>
                      <option>2:00 PM</option>
                      <option>4:00 PM</option>
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
                    Keep me informed of scholarship news and special offers. By clicking submit I agree to MGSC Terms and privacy policy.
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
