"use client";

import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const DATA = [
  { count: 244, text: "Offers to Cornell" },
  { count: 109, text: "Offers to Princeton" },
  { count: 187, text: "Offers to Stanford" },
  { count: 130, text: "Offers to Yale" },
  { count: 139, text: "Offers to Johns Hopkins" },
  { count: 24, text: "Offers to Caltech" },
  { count: 365, text: "Offers to UC Berkeley" },
  { count: 338, text: "Offers to UCLA" },
];

function OfferCard({ count, text }: { count: number; text: string }) {
  return (
    <div className="keen-slider__slide !w-full">
      <div className="
        flex items-center gap-2
        border-2 border-[#ff6a3d]
        text-[#ff6a3d]
        px-6 py-4
        text-base font-medium
        whitespace-nowrap
        bg-white
      ">
        <span className="font-bold text-xl">{count}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

function marquee(speed = 0.1) {
  return (slider: any) => {
    let rafId: number;
    let lastTime: number | null = null;

    function loop(time: number) {
      if (lastTime) {
        const delta = time - lastTime;
        slider.track.details.position += (speed * delta) / 15000;
        slider.track.details.position %= slider.track.details.length;
        slider.track.to(slider.track.details.position);
      }
      lastTime = time;
      rafId = requestAnimationFrame(loop);
    }

    slider.on("created", () => {
      rafId = requestAnimationFrame(loop);
    });

    slider.on("destroyed", () => {
      cancelAnimationFrame(rafId);
    });
  };
}


export default function OffersSlider() {
  const sliderRef1 = useRef<HTMLDivElement>(null);
  const sliderRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef1.current || !sliderRef2.current) return;

    const slider1 = new KeenSlider(
      sliderRef1.current,
      {
        loop: true,
        drag: true,
        renderMode: "performance",
        slides: { perView: "6", spacing: 6 },
      },
      [marquee(0.4)] // left → right
    );

    const slider2 = new KeenSlider(
      sliderRef2.current,
      {
        loop: true,
        drag: true,
        rtl: true,
        slides: { perView: "6", spacing: 6 },
      },
      [marquee(0.4)] // right → left
    );

    return () => {
      slider1.destroy();
      slider2.destroy();
    };
  }, []);

  return (
    <div className="space-y-6 py-8 overflow-hidden bg-white">
      <div ref={sliderRef1} className="keen-slider">
        {[...DATA, ...DATA].map((item, i) => (
          <OfferCard key={i} {...item} />
        ))}
      </div>

      <div ref={sliderRef2} className="keen-slider">
        {[...DATA, ...DATA].map((item, i) => (
          <OfferCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}


import React from 'react';
import Image from 'next/image';

export const IvyLeagueSection = () => {
  const cards = [
    {
      id: 1,
      title: "Ivy League Counseling",
      description: "One on One counseling with our country specialist. Shortlist your ideal destination, institution and program with their expert guidance.",
      ctaText: "Free Expert Consultation",
      ctaLink: "#"
    },
    {
      id: 2,
      title: "Profile Building",
      description: "Apply to your dream university. Our team will guide you through the application process.",
      ctaText: "Free Expert Consultation",
      ctaLink: "#"
    }
  ];

  return (
    <section
      className="min-h-screen py-16 px-4 md:px-8 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #fffaf7 0%,  100%)'
      }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <div className="w-full lg:w-1/2 relative">
          <h4 className="text-[2.6rem] mb-6 text-[#f46c44] font-semibold" style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}>What Makes Ivy league Special</h4>
          <div className="relative perspective-1000">
            {cards.map((card, index) => (
              <div
                key={card.id}
                style={{
                  transform: 'perspective(1000px) rotateY(25deg) rotateZ(-5deg) skewX(-6deg) skewY(2deg) rotateX(3deg)',
                  transition: 'transform 0.5s ease-in-out'
                }}
                className="bg-gradient-to-r from-[#f46c44] max-w-lg rounded-3xl mb-12 via-[#f46c44]/90 to-[#f46c44]/40 p-6 transition-all duration-300"
              >
                {/* Card Content */}
                <div className="relative z-20">
                  <h3 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                    className="text-[2rem] font-bold mb-1 text-white"
                  >
                    {card.title}
                  </h3>
                  <p className="mb-2 text-white text-base">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-center">

                    <a
                      href={card.ctaLink}
                      className="inline-block bg-[#ffffff]/80 text-gray-600 font-semibold py-2 px-4 rounded-full transition-all duration-300"

                    >
                      {card.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 300 300"
              className="w-full h-full"
              preserveAspectRatio="none"
              style={{
                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))",
              }}
            >
              <defs>
                <clipPath id="til" clipPathUnits="userSpaceOnUse">
                  <path
                    d="M45.235 17.808Q21.782 19.632 22.621 47.924L22.412 220.324Q21.782 245.981 51.393 252.749L204.127 281.166Q233.417 288.339 235.357 260.421L235.97 53.425Q236.438 16.291 204.181 17.969L49.519 17.358Z
          "
                  />
                </clipPath>
              </defs>
              <image
                href="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200"
                x="0"
                y="0"
                width="100%"
                height="100%"
                clipPath="url(#til)"
                preserveAspectRatio="xMidYMid slice"
              />

              <path
                d="M45.235 17.808Q21.782 19.632 22.621 47.924L22.412 220.324Q21.782 245.981 51.393 252.749L204.127 281.166Q233.417 288.339 235.357 260.421L235.97 53.425Q236.438 16.291 204.181 17.969L49.519 17.358Z
      "
                fill="none"
                stroke="#f46c44"
                strokeWidth="1"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};


import {
  GraduationCap,
  FileText,
  FileSignature,
  Award,
  ClipboardList,
  FolderOpen,
  ScrollText,
} from "lucide-react";

export function AdmissionRequirementsUK() {
  return (
    <section className="bg-[#fff9f4] py-20">
      <div className="max-w-7xl mx-auto px-6">


        <h2 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 600 }} className="text-[2.6rem] font-bold text-[#f46c44] mb-3 leading-tight">
          <span className="block text-[#656565]">
            Admission Requirements for
          </span>
          United Kingdom Study Abroad
        </h2>

        <p className="text-[#656565] max-w-3xl mb-6 text-base font-semibold">
          Here are the major requirements to study in UK which you need
          to ensure while applying to a UK university:
        </p>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <Item icon={GraduationCap} text="Copy of a valid passport" />
            <Item icon={GraduationCap} text="GMAT/GRE scores for PG programs" />
            <Item icon={FileText} text="Letter of Recommendations (LORS)" />
            <Item icon={Award} text="A CV (if applicable)" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <Item icon={ClipboardList} text="TOEFL/IELTS/C1 Advanced scores" />
            <Item icon={ScrollText} text="Academic Transcripts" />
            <Item icon={FolderOpen} text="Portfolio (for specific courses)" />
            <Item icon={FileSignature} text="Statement of Purpose (SOP)" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Item Component ---------- */

function Item({
  icon: Icon,
  text,
  underline
}: {
  icon: any;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#f46c44]">
        <Icon size={40} strokeWidth={1.2} />
      </div>
      <p style={{textDecoration:underline && "underline"}} className="text-[#656565] text-base font-semibold leading-relaxed">
        {text}
      </p>
    </div>
  );
}


export function HowGawayHelps() {
  return (
    <section className="bg-[#fff9f4] py-20">
      <h3 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }} className="text-center text-[2.6rem] font-semibold mb-12">
        <span className="text-[#f46c44]">How</span>{" "}
        <span className="text-[#6b6b6b]">GAway helps</span>
      </h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <h2 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif" }} className="text-[3.6rem] font-semibold text-[#f46c44] leading-tight mb-2">
            Write Essays <br />
            That Seal the Deal
          </h2>

          <p className="text-[#656565] font-semibold mb-4 ">
            From the perfect topic to final polish, our essay experts guide
            your child on how to write a personal statement and supplemental
            essays that prove why they belong on campus.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative h-[440px] duration-300 ease-in-out transation-all w-full flex justify-center ">

          {/* BACK CARD */}
          <div className="
            absolute top-2 hover:z-1 right-25
             w-[380px] h-[440px] duration-300 ease-in-out transation-all
            border-2 border-[#f46c44]
            bg-white
            rotate-[5deg]
          " >
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="
            absolute top-6 hover:z-1 right-12 duration-300 ease-in-out transation-all
            w-[380px] h-[440px]
            border-2 border-[#f46c44]
            bg-white
          " >
            <img
              src="https://i.pinimg.com/736x/d3/fa/0a/d3fa0ad7f642b0e09895b6e96c7d5a91.jpg"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FRONT IMAGE CARD */}
          <div className="
            absolute bottom-10 hover:z-1 right-[50%]
            w-[230px] h-[230px]
            bg-white
            border-2 border-[#f46c44]
            shadow-lg
            rotate-[6deg]
            overflow-hidden
          ">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}


export function ScholarshipRequirements() {
  return (
    <section className="bg-[#fff9f4] py-12">
      <div className="max-w-7xl mx-auto px-6">


        <h2 style={{ fontFamily: "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontWeight: 600 }} className="text-[2.6rem] font-bold text-[#f46c44] mb-3 leading-tight">
          <span className=" text-[#656565]">
            Scholarships to Study in 
          </span>
          United Kingdom
        </h2>

        <p className="text-[#656565] max-w-3xl mb-6 text-base font-semibold">
          Here are the major requirements to study in UK which you need
          to ensure while applying to a UK university Here are the major requirements to study in UK which you need
          to ensure while applying to a UK university:
        </p>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <Item underline={true} icon={Award} text="Copy of a valid passport" />
            <Item underline={true}  icon={GraduationCap} text="GMAT/GRE scores for PG programs" />
            <Item underline={true}  icon={FileText} text="Letter of Recommendations (LORS)" />
            <Item underline={true}  icon={Award} text="A CV (if applicable)" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <Item underline={true}  icon={ClipboardList} text="TOEFL/IELTS/C1 Advanced scores" />
            <Item underline={true}  icon={ScrollText} text="Academic Transcripts" />
            <Item underline={true}  icon={FolderOpen} text="Portfolio (for specific courses)" />
            <Item underline={true}  icon={FileSignature} text="Statement of Purpose (SOP)" />
          </div>
        </div>
      </div>
    </section>
  );
}