"use client"

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// import ThreeDButton from "./3dbutton"

export function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-100 pt-32 pb-10 overflow-visible">
        <div className=" mx-auto px-4 sm:px-6 lg:px-16 overflow-visible">

          {/* ================= MAIN FOOTER CARD with Orange Border ================= */}
          <div className="rounded-[50px] px-6 md:px-12 pt-8 pb-12 relative bg-white">

            {/* ================= TOP IMAGE STRIP with Orange Border - Positioned Upward ================= */}
           <div className="w-full mb-16 -mt-20">

  {/* OUTER ORANGE FRAME */}
  <div className="relative h-[180px] md:h-[220px] rounded-[70px] bg-[#f46c44] shadow-xl">

    {/* INNER IMAGE HOLDER */}
    <div
      className="
        absolute
        top-[14px]
        bottom-[14px]
        left-[40px]
        right-[40px]
        rounded-[45px]
        overflow-hidden
        bg-white
      "
    >
      <img
        src="/images/footer-image.png"
        alt="European landmarks"
        className="w-full h-full object-cover grayscale"
      />
    </div>

  </div>

</div>


            <div className="flex flex-col lg:flex-row">

              {/* BRAND */}
              <div className="w-full lg:w-1/4 pr-0 lg:pr-8 mb-10 lg:mb-0">
                <Image
                  src="images/logo.png"
                  alt="GAway Global"
                  width={150}
                  height={50}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-3">GA Way Global</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Your trusted partner for global education, university admissions, and international study planning.
                </p>

                {/* <ThreeDButton children="Get In Touch" textColor="text-white" /> */}
              </div>

              {/* CONTENT AREA WITH DIVIDERS */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:flex lg:flex-row">
                
                {/* STUDY DESTINATIONS */}
                <div className="flex-1 px-0 sm:px-4 lg:px-6 relative mb-8 sm:mb-0">
                  <div className="h-full flex flex-col">
                    <h4 className="text-orange-500 font-bold text-lg mb-4">
                      Study Destinations
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base flex-1">
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">
                         <Link href="/usa-universities">USA Universities</Link>
                       </li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">
                         <Link href="/uk-universities">UK Universities</Link>
                       </li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">
                         <Link href="/germany-public-universities">Germany Public Universities</Link>
                       </li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">
                         <Link href="/italy-france">Italy & France</Link>
                       </li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">
                         <Link href="/canada-australia">Canada & Australia</Link>
                       </li>
                    </ul>
                  </div>
                  {/* Right divider - only on lg screens */}
                  <div className="hidden lg:block absolute right-0 top-0 w-[2px] h-full bg-[#e87a4d] rounded-full"></div>
                </div>

                {/* SERVICES */}
                <div className="flex-1 px-0 sm:px-4 lg:px-6 relative mb-8 sm:mb-0">
                  <div className="h-full flex flex-col">
                    <h4 className="text-orange-500 font-bold text-lg mb-4">
                      Our Services
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base flex-1">
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Profile Evaluation</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">University Shortlisting</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">SOP & LOR Guidance</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Visa Assistance</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Scholarship Support</li>
                    </ul>
                  </div>
                  {/* Right divider - only on lg screens */}
                  <div className="hidden lg:block absolute right-0 top-0 w-[2px] h-full bg-[#e87a4d] rounded-full"></div>
                </div>

                {/* RESOURCES */}
                <div className="flex-1 px-0 sm:px-4 lg:px-6 relative mb-8 sm:mb-0">
                  <div className="h-full flex flex-col">
                    <h4 className="text-orange-500 font-bold text-lg mb-4">
                      Resources
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base flex-1">
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Blogs</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Case Studies</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Student Testimonials</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">FAQs</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Events & Webinars</li>
                    </ul>
                  </div>
                  {/* Right divider - only on lg screens */}
                  <div className="hidden lg:block absolute right-0 top-0 w-[2px] h-full bg-[#e87a4d] rounded-full"></div>
                </div>

                {/* CONNECT */}
                <div className="flex-1 px-0 sm:px-4 lg:px-6">
                  <div className="h-full flex flex-col">
                    <h4 className="text-orange-500 font-bold text-lg mb-4">
                      Connect
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-base flex-1">
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Instagram</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Facebook</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">LinkedIn</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">YouTube</li>
                       <li className="cursor-pointer
              transition-all duration-300
              hover:text-[#f46c44]
              hover:translate-x-2
            ">Contact Us</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>

            

          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-base text-gray-500 gap-4">
            <p>© 2023 GAway Global. All rights reserved.</p>

            <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
              <a href="privacy-policy" className="hover:text-orange-500">Privacy Policy</a>
              <a href="terms-condition" className="hover:text-orange-500">Terms of Service</a>
              <a href="#" className="hover:text-orange-500">Cookie Policy</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}