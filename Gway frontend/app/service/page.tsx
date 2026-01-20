"use client"

import Image from "next/image"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Send, Linkedin } from "lucide-react";





export default function ServicePage(){
  const [step, setStep] = useState(1);
const [direction, setDirection] = useState(1);

const [course, setCourse] = useState("");
const [country, setCountry] = useState("");



const variants = {
  initial: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  }),
};



    return(
        <>
         <section className="bg-[#fffaf6] py-14 md:py-20 overflow-hidden relative">
           <div className="absolute -left-30 top-50 -translate-y-1/2  pointer-events-none hidden lg:block lg:w-[250px] opacity-10">
          <div style={{ 
            transform: 'rotate(-10deg)',
            filter: 'brightness(10) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
            mixBlendMode: 'multiply'
           
            
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={600}
              height={40}
              className="  object-contain   "
            />
          </div>
        </div>
           <div className="absolute -right-30 bottom-0 -translate-y-1/2  pointer-events-none hidden lg:block lg:w-[250px] opacity-10">
          <div style={{ 
            transform: 'rotate(30deg)',
            filter: 'brightness(10) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
            mixBlendMode: 'multiply'
           
            
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={600}
              height={40}
              className="  object-contain scale-x-[-1]  "
            />
          </div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-[#f26b3a]">Best Consultancy For</span>
            <span className="text-gray-800 block mt-1">Study Abroad</span>
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-5 max-w-lg text-sm sm:text-base">
            We provide students personalized guidance and support seeking
            overseas education.
          </p>

          {/* FEATURES */}
          <div className="bg-white mt-6 sm:mt-8 rounded-tl-xl shadow-[-5px_1px_5px_rgba(0,0,0,0.25)]
 p-5 sm:p-6 space-y-3 sm:space-y-4 w-full sm:w-fit">
            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
              <span className="text-orange-500">🏙️</span>
              <p>Scholarships available</p>
            </div>

            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
              <span className="text-orange-500">🎯</span>
              <p>Get offer from University in 7 to 15 days</p>
            </div>

            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
              <span className="text-orange-500">🎓</span>
              <p>Education Loan approval in 24 hours</p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-6 lg:w-95  sm:mt-8 bg-[#f26b3a] hover:bg-[#e25c2c] transition text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 ">
            Book FREE Session
            <span className="text-xl">›</span>
          </button>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">

          {/* ORANGE CARD */}
          <div className="bg-[#f26b3a] rounded-tr-[90px] sm:rounded-tr-[90px] p-6 sm:p-40 relative w-full max-w-md sm:max-w-lg">

            <Image
              src="/images/world-map.png"
              alt="map"
              width={600}
              height={400}
              className="w-full object-contain"
            />

            {/* BUILDINGS */}
            <div className="absolute bottom-0 left-0 w-full">
              <Image
                src="/images/buildings.png"
                alt="buildings"
                width={600}
                height={300}
                className="w-full"
              />
            </div>
          </div>

          {/* FLOATING FORM CARD */}
          <div className="
            lg:absolute
            lg:-left-5
            lg:top-10
            mt-6 lg:mt-0
            bg-gradient-to-br from-[#3f3f3f] to-[#5b5b5b]
            text-white
            p-5 sm:p-6 sm:py-15
            rounded-br-[50px]
            w-full lg:h-[350px] max-w-xs
            shadow-xl
          ">
            <h4 className="font-semibold  lg:absolute top-5 text-sm sm:text-lg">
              I want FREE assistance with
            </h4>

            <div className="space-y-3">
              {[
                "Finding University",
                "Finding Country",
                "Loans",
                "Test Prep (IELTS, PTE, etc.)",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-[#f26b3a] px-4 py-1 rounded-md flex justify-between items-center cursor-pointer hover:scale-[1.02] transition text-sm sm:text-base"
                >
                  <span>{item}</span>
                  <span className="text-lg">›</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM TEXT ================= */}
      <div className="text-center mt-20 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
          <span className="text-[#f26b3a]">Know How </span>
          <span className="text-gray-700">1500+ Students </span>
          <span className="text-[#f26b3a]">
            Completed Their Study Abroad Dream with US!
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
          We offer all the services under one roof to make your dream journey easy.
          Click on each section below to get the details.
        </p>
      </div>
    </section>


      <section className="bg-[#fffaf6] mb-20 py-14 md:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div>
          <p className="text-gray-500 text-3xl mb-2">Expert Counselling</p>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
            <span className="text-[#f26b3a]">
              Counselling Sessions with our
            </span>
            <br />
            <span className="text-[#f26b3a]">Counsellors</span>
          </h2>

          {/* CHECK LIST */}
          <ul className="mt-6 space-y-3 text-gray-600 text-base sm:text-lg">
            <li className="flex gap-3 items-center">
              <span className="text-[#4caf50] text-xl">✔</span>
              Profile analysis
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#4caf50] text-xl">✔</span>
              Decide the right university
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#4caf50] text-xl">✔</span>
              Virtual university tour
            </li>
          </ul>

          {/* IMAGE STACK */}
          <div className="relative mt-12 w-[520px] h-[280px]">

  {/* BLUE BACK SHAPE */}
  <div className="relative mt-12 w-[450px]  aspect-[3/2] overflow-hidden
  rounded-tr-[70px]  -left-40
">
  <Image
    src="https://t4.ftcdn.net/jpg/03/20/87/47/360_F_320874769_eyM3wGufm3AgcWgXH1t5LxrOYppRfW4A.jpg"
    alt="meeting"
    fill
    className="object-cover"
  />
</div>


  {/* IMAGE */}
  <div
    className="
      relative
      -top-50
      left-20
      w-[350px]
      h-[250px]
      overflow-hidden
      rounded-tr-[70px]
      rounded-bl-[70px]
      z-10
      bg-white
    "
  >
    <Image
      src="https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060239.jpg"
      alt="meeting"
      fill
      className="object-cover"
    />
  </div>
</div>


        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="grid sm:grid-cols-2 gap-6 relative ">

          {[
            { step: "Step 1", title: "Expert Counselling", img: "https://cdn3d.iconscout.com/3d/premium/thumb/headset-3d-icon-png-download-5272614.png" },
            { step: "Step 2", title: "Document Preparation", img: "https://cdn3d.iconscout.com/3d/premium/thumb/document-3d-icon-png-download-8175597.png" },
            { step: "Step 3", title: "University Application", img: "https://cdn3d.iconscout.com/3d/premium/thumb/university-3d-icon-png-download-10321058.png" },
            { step: "Step 4", title: "Test Preparation", img: "https://static.vecteezy.com/system/resources/thumbnails/067/859/075/small/online-exam-preparation-shown-with-a-3d-rendering-of-a-computer-monitor-displaying-an-exam-checklist-perfect-for-educational-graphics-png.png" },
            { step: "Step 5", title: "Expert Counselling", img: "https://static.vecteezy.com/system/resources/thumbnails/058/024/642/small/impressive-classic-genetic-counseling-session-scene-isolated-original-png.png" },
            { step: "Step 6", title: "Accommodation Assistance", img: "https://static.vecteezy.com/system/resources/thumbnails/048/411/468/small/3d-home-isolated-on-transparent-background-free-png.png" },
          ].map((item, i) => (
            <div
  key={i}
  className="
    relative
    bg-white
    rounded-3xl
    p-9
    flex
    items-center
    gap-6
    shadow-[-8px_-8px_25px_rgba(0,0,0,0.12)]
    hover:scale-[1.02]
    transition
    overflow-hidden
  "
>
  {/* STEP BADGE */}
  <span className="
    absolute
    top-0
    left-0
    bg-gray-600
    text-white
    text-xs
    px-4
    py-2
    rounded-br-2xl
    rounded-tl-3xl
  ">
    {item.step}
  </span>

  {/* TEXT */}
  <div className="flex-1 pr-28">
    <h4 className="text-[#f26b3a] font-bold text-xl leading-tight">
      {item.title}
    </h4>
    <p className="text-gray-500 text-sm mt-1">
      Discuss with Expert
    </p>
  </div>

  {/* ICON IMAGE */}
  <div className="
    absolute
    -right-7
    -bottom-2
    w-[140px]
    h-[150px]
  ">
    <Image
      src={item.img}
      alt={item.title}
      fill
      className="object-contain"
    />
  </div>
</div>

          ))}
        </div>
      </div>
    </section>



     <section className="bg-[#fffaf6] py-16 overflow-hidden">
  <div
    className="
      relative
      mx-auto
      min-h-[460px]
      bg-[url('https://media.istockphoto.com/id/1094302626/photo/hand-raised-for-vote-and-asking-at-conference-seminar-meeting-room.jpg?s=612x612&w=0&k=20&c=r60nXw6xfHRoNPrTiyImBGsXNS5XjtoOQfKYPrIdKe8=')]
      bg-cover
      bg-right
      bg-no-repeat
      flex
      items-center
      px-6
    "
  >
    {/* BACKGROUND GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-[#636363] z-0" />

    {/* RIGHT SIDE FORM ALIGNMENT */}
    <div className="relative z-10 w-full flex justify-end">

      {/* WHITE GRADIENT BORDER */}
      <div
        className="
          p-[2px]
          bg-gradient-to-r
          from-white/100
          via-white/20
          to-white/100
          w-full
          max-w-[720px]
        "
      >
        {/* ORANGE FORM CARD */}
        <div className="bg-[#f26b3a]  p-8 md:p-10 text-white">

          {/* ================= STEP CONTENT WITH ANIMATION ================= */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {step === 1 && (
                <>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    What Is Your Desired Academic Course?
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {["UG", "PG", "PHD", "MBBS"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setCourse(item)}
                        className={`
                          border border-white rounded-xl rounded-tl-[0px] py-4 text-lg transition
                          ${
                            course === item
                              ? "bg-white text-[#f26b3a]"
                              : "bg-[#b04f32] text-white hover:bg-white hover:text-[#f26b3a]"
                          }
                        `}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Which country do you want to go to?
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {["UK", "USA", "Canada", "Australia"].map((item) => (
                      <button
                        key={item}
                        onClick={() => setCountry(item)}
                        className={`
                          border border-white rounded-xl py-4 transition
                          ${
                            country === item
                              ? "bg-white text-[#f26b3a]"
                              : "bg-[#b04f32] hover:bg-white hover:text-[#f26b3a]"
                          }
                        `}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Basic Details
                  </h2>

                  <div className="space-y-4">
                    <input
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-[#b04f32] rounded-lg text-white border border-white"
                    />
                    <input
                      placeholder="City"
                      className="w-full bg-[#b04f32] border border-white px-4 py-3 rounded-lg text-white"
                    />
                    <input
                      placeholder="Mobile"
                      className="w-full bg-[#b04f32] border border-white px-4 py-3 rounded-lg text-white"
                    />
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ================= BUTTONS ================= */}
          <div className="flex justify-between mt-10">
            {step > 1 && (
              <button
                onClick={() => {
                  setDirection(-1);
                  setStep(step - 1);
                }}
                className="bg-[#b5542e] px-6 py-3 rounded-lg"
              >
                ← Back
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={() => {
                  setDirection(1);
                  setStep(step + 1);
                }}
                disabled={
                  (step === 1 && !course) ||
                  (step === 2 && !country)
                }
                className={`
                  px-8 py-3 rounded-lg font-semibold mx-auto transition
                  ${
                    (step === 1 && !course) || (step === 2 && !country)
                      ? "bg-[#b04f32] cursor-not-allowed"
                      : "bg-[#b04f32] text-white hover:bg-[#9a3f28]"
                  }
                `}
              >
                Save & Go Next →
              </button>
            ) : (
              <button className="bg-white text-[#f26b3a] px-8 py-3 rounded-lg font-semibold">
                Submit ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-[#fffaf6] py-35 px-4 relative overflow-hidden">
   <div className="absolute -right-10 top-52 -translate-y-1/2  pointer-events-none hidden lg:block lg:w-[450px] opacity-10 z-1">
          <div style={{ 
            transform: 'rotate(-40deg)',
            filter: 'brightness(20) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(90%)',
            mixBlendMode: 'multiply'
           
            
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={600}
              height={40}
              className="  object-contain scale-x-[-1]  "
            />
          </div>
        </div>
  
  <div className="max-w-7xl mx-auto relative">

    {/* ORANGE BACKGROUND SHAPE */}
    <div
      className="
        bg-[#f26b3a]
        rounded-bl-[120px]
        px-8
        py-15
        relative
      "
    >
      {/* DECORATIVE SHAPE */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT VIDEO */}
       <div className="relative -top-30 left-10 overflow-hidden rounded-bl-[70px]">

  {/* YOUTUBE VIDEO */}
  <iframe
    className="
      w-full
      h-[280px]
      lg:h-[430px]
      rounded-bl-[70px]
      object-cover
    "
    src="https://www.youtube.com/embed/uWQ_8CtvzoY?autoplay=1&mute=1&loop=1&playlist=uWQ_8CtvzoY"
    title="YouTube video"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />




</div>


        {/* RIGHT CONTENT */}
        <div className="text-white text-center lg:text-center">
          <h2 className="text-3xl lg:text-5xl ml-10 font-bold leading-snug mb-4">
            Study Abroad Made <br /> Simple
          </h2>

          <p className="text-white/90 text-3xl ml-5">
            Request a Callback Right arrow
          </p>
        </div>

      </div>
    </div>
  </div>
</section>



<section className="bg-[#fffaf6] py-20 ">
  <div className=" mx-auto">

    {/* ================= HEADING ================= */}
    <h2 className="text-center text-3xl md:text-4xl font-medium mb-10">
      One-Stop Solution{" "}
      <span className="text-[#f26b3a]">to Support your Study Abroad Dream</span>
    </h2>

    {/* ================= ORANGE MENU BAR ================= */}
    <div className="bg-[#f26b3a]  overflow-hidden mb-16">
      <ul className="flex flex-wrap justify-center text-white text-lg font-medium">
        {[
          "Counseling",
          "Test Prep",
          "Success Stories",
          "Events",
          "Visa & Loan Assistance",
          "Our Centres",
        ].map((item) => (
          <li
            key={item}
            className="px-6 py-4 hover:bg-white/20 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* ================= IMAGE GRID ================= */}
    <div className="grid lg:grid-cols-2 gap-10 items-stretch px-20 mx-auto w-7xl">

      {/* LEFT BIG IMAGE */}
      <div className="overflow-hidden rounded-br-[120px]">
        <img
          src="https://thumbs.dreamstime.com/b/teacher-high-school-students-23710642.jpg"
          alt="classroom"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* RIGHT STACKED IMAGES */}
      <div className="grid grid-rows-2 gap-4 ">

        <div className="overflow-hidden h-[240px] rounded-bl-[60px]">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
            alt="seminar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="overflow-hidden h-[240px] rounded-tl-[60px]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="students"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  </div>
</section>


<section className="bg-[#fffaf6] py-20 px-4 relative overflow-hidden">
   <div
  className="
    absolute
    top-50
    -left-15
    w-[400px]
    h-[400px]
    -translate-y-1/2
    z-10
    pointer-events-none
    -rotate-150
  "
  style={{ 
            transform: 'rotate(-70deg)',
            filter: '',
            mixBlendMode: 'multiply'
           
            
          }}
>
  <Image
    src="/images/g logo.png"
    alt="arrow"
    fill
    className="
      object-contain
      rotate-[-15deg]
      scale-x-[-1]
      opacity-10
      
    "
  />
</div>
  <div className="max-w-7xl mx-auto">

    {/* ================= HEADING ================= */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-medium text-gray-700">
        Popular Courses{" "}
        <span className="text-[#f26b3a]">for Studying Abroad</span>
      </h2>

      <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
        Kick-start your study abroad journey with in-demand courses offered by
        leading universities across countries.
      </p>
    </div>

    {/* ================= CARDS ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* CARD */}
    {["BBA", "MBA", "MCA"].map((course) => (
  <div key={course} className="relative">

    {/* ORANGE BACK SHADOW */}
    <div
      className="
        absolute
        -bottom-4
        -left-[2px]
        w-[101%]
        h-60
        bg-[#f26b3a]
        rounded-bl-[40px]
        rounded-br-[40px]
        z-0
      "
    />

    {/* WHITE CARD */}
    <div
      className="
        relative
        bg-white
        rounded-[40px]
        rounded-tr-[0px]
        border
        border-gray-400
        p-6
        z-10
      "
    >
      {/* CONTENT */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
            alt="icon"
            className="w-7 h-7"
          />
          <h3 className="text-3xl font-bold text-gray-500">
            {course}
          </h3>
        </div>

        <p className="text-gray-500 text-base font-bold mb-2">
          Countries: UK, USA, Australia +5 more
        </p>

        <p className="text-gray-500 text-base font-bold mb-6">
          Universities:{" "}
          <span className="text-[#f26b3a] font-bold">1800+</span>
        </p>

        <div className="space-y-3">
          <button className="w-full bg-gray-200 text-gray-600 py-2 rounded-lg">
            Check Eligibility
          </button>

          <button className="w-full bg-[#fde6dc] text-gray-600 py-2 rounded-lg font-medium">
            Explore Course
          </button>
        </div>
      </div>
    </div>
  </div>
))}


    </div>
  </div>
</section>



<section className="bg-[#fffaf6] py-40 overflow-hidden ">

  {/* ================= HEADING ================= */}
  <div className="text-center max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-medium text-gray-700">
      Popular Study Destinations{" "}
      <span className="text-[#f26b3a]">for Indian Students</span>
    </h2>

    <p className="text-gray-500 mt-4 text-sm md:text-base">
      These countries are the top choices of Indians. The study abroad aspirant
      prefers it for quality education, jobs and, of course, high return on
      investment.
    </p>
  </div>

  {/* ================= TABS ================= */}
  <div className="bg-[#f26b3a] mt-10">
    <div className="max-w-7xl mx-auto flex justify-center gap-8 text-white py-4 text-sm md:text-base">
      {["Medical", "Engineering", "Business", "MBA", "Others"].map((tab) => (
        <button key={tab} className="hover:underline">
          {tab}
        </button>
      ))}
    </div>
  </div>

  {/* ================= MAIN CONTENT ================= */}
  <div className="relative  mx-auto mt-16 px-4 overflow-hidden">
    <div className="absolute -right-20 top-52 -translate-y-1/2  pointer-events-none hidden lg:block lg:w-[400px] opacity-10 z-111">
          <div style={{ 
            transform: 'rotate(30deg)',
            filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
            mixBlendMode: 'multiply'
           
            
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={600}
              height={40}
              className="  object-contain scale-x-[-1]  "
            />
          </div>
        </div>

    {/* CURVED BACKGROUND SHAPE */}
  {/* BACKGROUND CURVED SHAPE WITH IMAGE */}
<div
  className="
    absolute
    -left-31
    top-0
    w-[55%]
    h-[620px]
    right-0
    bg-[#f2f2f2]
    rounded-tr-[160px]
    overflow-hidden
    z-0
  "
>
  {/* IMAGE FILLS SHAPE */}
  <img
    src="https://www.hdwallpapers.in/download/black_and_white_image_of_colosseum_piazza_del_colosseo_rome_italy_hd_travel-HD.jpg"
    alt="Italy"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      grayscale
    "
  />

  {/* UNIVERSITY LOGOS */}
  <div className="absolute top-8 right-40 grid grid-cols-2 gap-3 p-3 rounded-xl ">

        <img src="https://www.shutterstock.com/shutterstock/photos/2098674772/display_1500/stock-vector-university-logo-college-school-logo-crests-and-emblems-2098674772.jpg" className="w-46 h-20 border border-gray-500" />
    
    <img src="https://www.shutterstock.com/shutterstock/photos/2098674772/display_1500/stock-vector-university-logo-college-school-logo-crests-and-emblems-2098674772.jpg" className="w-46 h-20 border border-gray-500" />
    <img src="https://www.shutterstock.com/shutterstock/photos/2098674772/display_1500/stock-vector-university-logo-college-school-logo-crests-and-emblems-2098674772.jpg" className="w-46 h-20 border border-gray-500" />
    <img src="https://www.shutterstock.com/shutterstock/photos/2098674772/display_1500/stock-vector-university-logo-college-school-logo-crests-and-emblems-2098674772.jpg" className="w-46 h-20 border border-gray-500" />
  </div>
</div>

{/* FOREGROUND CONTENT */}
<div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
  
  {/* EMPTY LEFT (IMAGE IS BACKGROUND) */}
  <div />

  {/* COUNTRY CARD */}
  <div className="relative top-40 right-40 ">
    <div className="bg-white rounded-tr-[70px] h-70 py-5 px-25 shadow-[-12px_-1px_10px_rgba(0,0,0,0.25)]
 relative max-w-lg">

      {/* CURVED ORANGE STROKE */}
      <div className="absolute -top-1 right-0 w-30 h-30 border-t-7 border-r-8 border-[#f26b3a] rounded-tr-[70px]" />

      <div className="flex items-center gap-3">
        <img
          src="https://flagcdn.com/w40/it.png"
          alt="Italy"
          className="w-15"
        />
        <h3 className="text-[70px] font-semibold text-gray-700">
          ITALY
        </h3>
      </div>

      <p className="text-[#f26b3a] text-3xl mt-2 font-medium ml-30 w-140 ">
        100+ Universities
      </p>

      <button className="mt-6 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center absolute right-5 bottom-5">
        ↑
      </button>
    </div>
  </div>

</div>


    {/* CTA */}
    <div className="text-center mt-110">
      <p className="text-gray-500 text-lg mb-4">
        Check whether you are eligible for dream university
      </p>

      <button className="bg-[#f26b3a] text-white text-2xl px-15 py-5 rounded-full">
        Check My Eligibility
      </button>
    </div>
  </div>
</section>



<section className="bg-[#fffaf6] py-20 px-4 overflow-hidden relative">
  <div
  className="
    absolute
    top-60
    left-0
    w-[400px]
    h-[400px]
    -translate-y-1/2
    z-10
    pointer-events-none
    -rotate-150
  "
  style={{ 
            transform: 'rotate(30deg)',
            filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
            mixBlendMode: 'multiply'
           
            
          }}
>
  <Image
    src="/images/g logo.png"
    alt="arrow"
    fill
    className="
      object-contain
      rotate-[-15deg]
      scale-x-[-1]
      opacity-10
      
    "
  />
</div>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

    {/* ================= LEFT CONTENT ================= */}
    <div>
      <h2 className="text-3xl md:text-4xl font-medium text-gray-700 leading-snug">
        Know Real Stories of Real People,
        <br />
        <span className="text-[#f26b3a] font-semibold">
          How They Went from India to Abroad!
        </span>
      </h2>

      <p className="text-gray-500 mt-4 max-w-xl">
        Get ready to be inspired by the incredible story of students who turned
        their dreams into reality.
      </p>

      <ul className="mt-6 space-y-3 text-gray-600">
        <li className="flex items-start gap-3">
          <span className="text-[#f26b3a] text-lg">✔</span>
          Free counselling sessions by an educational consultant
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#f26b3a] text-lg">✔</span>
          Database of multiple reputed universities under one roof
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#f26b3a] text-lg">✔</span>
          Trustworthy and affordable overseas study plans
        </li>
      </ul>

      <button
        className="
          mt-8
          px-8
          py-3
          border
          border-[#f26b3a]
          rounded-full
          text-[#f26b3a]
          font-medium
          hover:bg-[#f26b3a]
          hover:text-white
          transition
        "
      >
        Start Your Journey →
      </button>
    </div>

    {/* ================= RIGHT CARDS ================= */}
    <div className="flex gap-8 justify-center lg:justify-end relative">
         {/* ORANGE CURVE */}
        <div className="absolute rounded-tl-[80px]  -top-1 left-[14px] w-28 h-28 border-t-[8px] border-l-[8px] border-[#f26b3a]  " />

      {/* CARD 1 */}
     <div className="relative w-[280px] h-[480px] rounded-tl-[80px] shadow-[-10px_-10px_30px_rgba(0,0,0,0.18)] overflow-hidden bg-[#8f8f8f]">
      
               {/* BACK ARROW IMAGE */}
{/* BACK ARROW */}
{/* ARROW BACKGROUND */}
<div
  className="
    absolute
    top-40
    -left-5
    w-[350px]
    h-[400px]
    -translate-y-1/2
    z-10
    pointer-events-none
  "
>
  <Image
    src="/images/g logo.png"
    alt="arrow"
    fill
    className="
      object-contain
      rotate-[25deg]
      scale-x-[-1]
      opacity-20
      mix-blend-multiply
    "
  />
</div>




            

  {/* NAME */}
  <p className="absolute top-14 left-0 w-full text-center text-white font-semibold text-lg z-30">
    SALONI JANGID
  </p>

  {/* IMAGE */}
  <img
    src="https://static.vecteezy.com/system/resources/thumbnails/063/405/498/small/happy-young-female-student-holding-book-at-transparent-background-png.png"
    alt="student"
    className="
      absolute
      -bottom-25
      left-1/2
      -translate-x-1/2
      h-[90%]
      w-auto
      object-cover
      z-20
      scale-[1.15]
    "
  />

  {/* PLAY BUTTON */}
  <div className="absolute inset-0 top-30 flex items-center justify-center z-40">
    <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
      <span className="text-white text-xl">▶</span>
    </div>
  </div>

</div>


       {/* ORANGE CURVE */}
        <div className="absolute rounded-tl-[80px]  -top-1 right-[173px] w-28 h-28 border-t-[8px] border-l-[8px] border-[#f26b3a]  " />

      {/* CARD 2 */}
    <div className="relative w-[280px] h-[480px] rounded-tl-[80px] overflow-hidden shadow-[-10px_-10px_30px_rgba(0,0,0,0.18)] hidden sm:block bg-[#8f8f8f]">

      {/* ARROW BACKGROUND */}
<div
  className="
    absolute
    top-40
    -left-5
    w-[350px]
    h-[400px]
    -translate-y-1/2
    z-10
    pointer-events-none
  "
>
  <Image
    src="/images/g logo.png"
    alt="arrow"
    fill
    className="
      object-contain
      rotate-[25deg]
      scale-x-[-1]
      opacity-20
      mix-blend-multiply
    "
  />
</div>

  {/* NAME */}
  <p className="absolute top-14 left-0 w-full text-center text-white font-semibold text-lg z-30">
    MANOJ SHARMA
  </p>

  {/* IMAGE */}
  <img
    src="https://static.vecteezy.com/system/resources/thumbnails/051/688/995/small/smiling-young-male-university-student-standing-isolate-on-transparency-background-png.png"
    alt="student"
    className="
      absolute
      top-23
      inset-0
      w-full
      h-full
      object-cover
      z-20
    "
  />

  {/* PLAY BUTTON */}
  <div className="absolute inset-0 flex items-center justify-center z-40 top-30">
    <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
      <span className="text-white text-xl">▶</span>
    </div>
  </div>

</div>


    </div>
  </div>
</section>



<section className="py-16 px-4 bg-[#fffaf6]">
  <div className="max-w-7xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
      Grab These <span className="text-orange-500">Discounts</span> To Walk on The
      Success Path of Your Dream Journey
    </h2>

    <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-sm md:text-base">
      We believe in the user's convenience. These offers will help you reach
      your dream destination. Moreover, it will prevent a hole in your pocket.
    </p>

    {/* CARDS */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="relative rounded-[28px] bg-gradient-to-r from-orange-400 to-orange-300 p-6 text-white overflow-hidden">
        <h3 className="text-lg font-semibold">Plan Your</h3>
        <h2 className="text-2xl font-bold text-yellow-300">
          Study Abroad Journey
        </h2>

        <p className="mt-2 text-sm">
          with <span className="font-semibold">US</span> & Get Flat
        </p>

        <div className="mt-4 bg-white text-red-500 inline-block px-4 py-2 rounded-lg font-bold text-xl">
          ₹ 20,000
        </div>

        <p className="mt-2 font-semibold text-yellow-200">CASHBACK</p>

        {/* Decorative image */}
        <img
          src="/images/travel.png"
          alt=""
          className="absolute bottom-0 right-0 w-40"
        />
      </div>

      {/* CARD 2 */}
      <div className="relative rounded-[28px] bg-gray-200 p-6 overflow-hidden">
        <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Get FREE
        </span>

        <h2 className="mt-4 text-3xl font-bold text-red-600">
          IELTS <span className="text-black">CLASSES</span>
        </h2>

        <p className="mt-2 text-sm text-gray-600 line-through">
          Starting From ₹18,000
        </p>

        <h1 className="text-5xl font-extrabold text-red-600 mt-2">₹ 0*</h1>

        <img
          src="https://png.pngtree.com/png-vector/20250305/ourmid/pngtree-a-happy-male-student-sporting-backpack-and-clutching-book-is-looking-png-image_15721728.png"
          alt=""
          className="absolute -right-14 bottom-0 w-50"
        />

        <p className="absolute bottom-2 left-0 w-full text-center text-[11px] text-gray-600">
          *Terms & Conditions Applied
        </p>
      </div>

      {/* CARD 3 */}
      <div className="relative rounded-[28px] bg-gray-400 p-6 text-white overflow-hidden">
        <h2 className="text-3xl font-bold">
          Avail <span className="text-yellow-300">FREE*</span>
        </h2>

        <p className="text-2xl font-semibold mt-2">
          FLIGHT <br /> Tickets!!
        </p>

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/022/180/863/small/air-plane-ticket-travel-kit-3d-illustration-png.png"
          alt=""
          className="absolute top-10 -right-10 w-52"
        />

        <img
          src="/images/books.png"
          alt=""
          className="absolute bottom-4 right-6 w-28"
        />

        <p className="absolute bottom-2 left-0 w-full text-center text-[11px] text-gray-200">
          *Terms & Condition Apply
        </p>
      </div>
    </div>

   
  </div>
</section>


<section className="bg-[#fffaf6] py-20 relative overflow-hidden ">
   <div className="absolute right-0 top-82 -translate-y-1/2  pointer-events-none hidden lg:block lg:w-[350px] opacity-10">
          <div style={{ 
            transform: 'rotate(-130deg)',
            filter: ' ',
            mixBlendMode: 'multiply'
           
            
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={600}
              height={40}
              className="  object-contain  "
            />
          </div>
        </div>
  <div className=" mx-auto max-w-7xl ">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
        <span className="text-orange-500">Explore Different Exams</span>{" "}
        to Enter Your Dream Nation
      </h2>

      <p className="mt-4 text-gray-500 text-sm md:text-lg">
        Find out the perfect test and dodge the linguistic barrier with
      </p>
    </div>

    {/* LIST */}
    <div className="">

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-gray-400 py-10 gap-10">

        {/* IELTS */}
        <div className="flex items-center gap-6">
         <div className="h-20 w-30 flex item-center justify-center pt-5 bg-[#e21735] rounded-tr-4xl  text-4xl text-white ml-5" >
          IELTS
         </div>
          <p className="text-2xl font-medium text-gray-700 ml-10">IELTS</p>
        </div>

        {/* PTE */}
        <div className="flex items-center gap-6">
          <div className="h-20 w-30 flex item-center justify-center pt-5 bg-[#1f6f94] rounded-tr-4xl text-4xl text-white  " >
          PTE
         </div>
          <p className="text-xl font-medium text-gray-700 ml-10">PTE</p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b-2 border-gray-400 py-10 gap-10">

        {/* TOEFL */}
        <div className="flex items-center gap-6">
          <div className="h-20 w-30 flex item-center justify-center pt-5 bg-[#047d92] rounded-tr-4xl text-4xl text-white ml-5" >
          TOEFL
         </div>
          <p className="text-xl font-medium text-gray-700 ml-10">TOEFL</p>
        </div>

        {/* DUOLINGO */}
        <div className="flex items-center gap-6">
          <div className="relative h-20 w-30 flex item-center justify-center pt-5 bg-[#56cb01] rounded-tr-4xl" >
            <img
            src="https://companieslogo.com/img/orig/DUOL-5baebe62.png?t=1720244491"
            alt="Duolingo"
            className="w-26 h-15 object-cover absolute inset-0 top-3 left-2"
          />
          </div>
          
          <p className="text-xl font-medium text-gray-700 ml-10">DUOLINGO</p>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  py-10 gap-10">

        {/* GERMAN */}
        <div className="flex items-center gap-6">
          <div className="relative h-20 w-30 flex item-center justify-center pt-5 bg-[#56cb01] rounded-tr-4xl overflow-hidden ml-5" >
          <img
            src="https://www.freeiconspng.com/thumbs/germany-flag/icons-of-germany-flag-fatherland-icon-png-3.png"
            alt="German"
            className="w-46 h-41 -top-[42px]  object-cover absolute inset-0"
          /></div>
          <p className="text-xl font-medium text-gray-700 ml-10">GERMAN</p>
        </div>

        {/* FRENCH */}
        <div className="flex items-center gap-6">
          <div className="relative h-20 w-30 flex item-center justify-center pt-5 bg-[#56cb01] rounded-tr-4xl overflow-hidden" >
          <img
            src="https://clipart-library.com/2024/france-flag-png/france-flag-png-2.png"
            alt="French"
            className="w-46 h-41 -top-[42px]  object-cover absolute inset-0"
          /></div>
          <p className="text-xl font-medium text-gray-700 ml-10">FRENCH</p>
        </div>
      </div>

    </div>
  </div>
</section>



{/* Join Our Exclusive Study Abroad Network */}
      <section className="py-10 bg-[#FF6B35] relative overflow-visible">
        {/* Decorative Arrow on Left Side */}
        <div className="absolute -left-40 top-62 -translate-y-1/2 opacity-30 pointer-events-none hidden lg:block lg:w-[500px]">
          <div style={{ 
            transform: 'rotate(-20deg)',
            filter: 'brightness(10)',
            mixBlendMode: 'multiply'
          }}>
            <Image
              src="images/g logo.png"
              alt="Decorative Arrow"
              width={600}
              height={40}
              className=" mix-blend-multiply object-contain "
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











        </>
    )
}