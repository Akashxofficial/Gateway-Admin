"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Send, Linkedin } from "lucide-react";

export default function CareerPage() {
  return (
    <main className="bg-[#fffaf6] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#f46c44] py-45 text-center text-white relative overflow-hidden">

      


         {/* Decorative Arrow on Left Side */}
        <div className="absolute -left-30 top-52 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
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
        <h1 className="text-3xl md:text-7xl font-bold">Join Our Team</h1>
        <p className="mt-4 max-w-7xl lg:leading-11 mx-auto text-sm md:text-2xl opacity-90">
          Be part of a dynamic team that helps students achieve their study
          abroad dreams. Explore exciting career opportunities with Gateway
          Abroad Education.
        </p>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="max-w-7xl mx-auto  py-40 grid md:grid-cols-2 gap-14 items-center relative">
           {/* Decorative Arrow on Left Side */}
       <div className="absolute -right-100 -top-22 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block w-[600px] h-[700px]">
  <div
    className="w-full h-full rotate-[20deg]"
    style={{
      filter:
        "brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",
      mixBlendMode: "multiply",
    }}
  >
    <Image
      src="/images/g logo.png"
      alt="Decorative Arrow"
      fill
      className="object-contain scale-x-[-1]"
    />
  </div>
</div>
        <Image
          src="https://t4.ftcdn.net/jpg/00/35/30/85/360_F_35308534_WGRVXlymcjQqoRXzeWEfVCOfBHBq9YdW.jpg"
          width={750}
          height={480}
          className="rounded-tr-[100px] object-cover px-2"
          alt=""
        />

        <div>
          <h2 className="text-[50px] font-semibold text-orange-500 px-6">
            Culture of Success at <span className="text-gray-700">Gateway Abroad</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed px-6">
            We support the empowerment of everyone in our community.
            Join us if you enjoy exploring and want to learn more about
            schooling outside of India. We are seeking people who are ready
            to promote high-quality education and grow in a collaborative
            environment.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-[50px] font-semibold text-orange-500">
            Working with <span className="text-gray-700">Gateway Abroad</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We support empowerment and career growth. Join our driven team
            of professionals who collaborate, learn, and achieve success
            together in a welcoming environment.
          </p>
        </div>

        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?cs=srgb&dl=pexels-fauxels-3184291.jpg&fm=jpg"
          width={850}
          height={380}
          className="rounded-tl-[100px] object-cover"
          alt=""
        />
      </section>

      {/* ================= VACANCIES ================= */}
      <section className="py-20 text-center relative overflow-hidden">
         {/* Decorative Arrow on Left Side */}
        <div className="absolute -left-30 top-40  -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
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
        <h2 className="text-3xl font-semibold text-gray-700 mb-12">
          Vacancies
        </h2>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#f46c44] text-white rounded-tr-[100px] pb-25 pt-10   shadow-[0_3px_5px_rgba(0,0,0,0.45)]
 relative "
            >
              <h3 className="text-3xl font-semibold mb-2">
                Front Desk Receptionist
              </h3>

              <p className="text-lg opacity-90 text-left ml-6">No. of Vacancy: 2</p>
              <p className="text-lg opacity-90 text-left ml-6">Location: Civil Lines</p>
              <p className="text-lg opacity-90 text-left ml-6">Role Description</p>

              <p className="mt-4 text-lg  pt-3 text-left ml-6">
                This is a full-time on-site role...
              </p>

              <button className="mt-10 bg-white text-orange-500  py-2 absolute  font-medium w-full left-0 bottom-0">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-20 relative overflow-hidden">

  {/* Decorative Arrow */}
  <div className="absolute -right-30 -bottom-40 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
    <div
      style={{
        transform: "rotate(20deg)",
        filter:
          "brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",
        mixBlendMode: "multiply",
      }}
    >
      <Image
        src="/images/g logo.png"
        alt="Decorative Arrow"
        width={400}
        height={40}
        className="w-64 h-66 lg:w-96 lg:h-96 object-contain scale-x-[-1]"
      />
    </div>
  </div>

  {/* BACKGROUND */}
  <div className="max-w-7xl mx-auto bg-[#fff3ec] py-12 sm:py-16 md:py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">

      {/* HEADING */}
      <h2 className="
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        font-semibold
        text-orange-500
        leading-tight
      ">
        Boost Your Career!
        <span className="text-gray-700 block lg:inline">
          {" "}Find the Perfect Role with Gateway Abroad
        </span>
      </h2>

      {/* FORM */}
      <form className="
        bg-white
        mt-8
        sm:mt-10
        p-5
        sm:p-6
        md:p-8
        shadow-lg
        flex
        flex-col
        gap-5
        text-left
      ">

        <input
          className="border-0 border-b-2 border-gray-300 p-2 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
          placeholder="Name*"
        />

        <input
          className="border-0 border-b-2 border-gray-300 p-2 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
          placeholder="Mobile Number*"
        />

        <input
          className="border-0 border-b-2 border-gray-300 p-2 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
          placeholder="Email Address*"
        />

        <input
          className="border-0 border-b-2 border-gray-300 p-2 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
          placeholder="State, City"
        />

        <select className="border-0 border-b-2 border-gray-300 p-2 bg-transparent focus:outline-none focus:border-orange-500 text-sm sm:text-base">
          <option>Select Time</option>
        </select>

        <select className="border-0 border-b-2 border-gray-300 p-2 bg-transparent focus:outline-none focus:border-orange-500 text-sm sm:text-base">
          <option>Preferred Study Destination</option>
        </select>

        <div className="text-xs sm:text-sm text-gray-500">
          <input type="checkbox" className="mr-2" />
          I agree to receive updates and offers.
        </div>

        {/* BUTTON */}
        <button
          className="
            bg-orange-500
            text-white
            py-3
            font-semibold
            w-full
            sm:w-40
            mx-auto
          "
        >
          Submit
        </button>

      </form>

    </div>
  </div>
</section>


    



       {/* Join Our Exclusive Study Abroad Network */}
      <section className="py-10 bg-[#FF6B35] relative overflow-visible">
        {/* Decorative Arrow on Left Side */}
        <div className="absolute -left-30 top-52 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
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



    </main>
  );
}
