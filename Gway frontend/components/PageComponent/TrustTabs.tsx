"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    key: "trust",
    label: "Trust",
    title: "Your Trusted Partner in Immigration Services",
    description:
      "We provide reliable guidance for study, work, and permanent residency applications. Our experienced team supports you at every step of your immigration journey.",
    points: [
      "Technology Growth",
      "Client-Focused Services",
      "Dedicated Team Members",
      "Trusted Immigration Guidance",
    ],
  },
  {
    key: "transparency",
    label: "Transparency",
    title: "Complete Transparency at Every Step",
    description:
      "No hidden processes, no hidden fees. We believe in honest communication and clarity throughout your immigration journey.",
    points: [
      "No Hidden Charges",
      "Clear Process Updates",
      "Honest Counselling",
      "Open Communication",
    ],
  },
  {
    key: "excellence",
    label: "Excellence",
    title: "Driven by Excellence & Results",
    description:
      "Our commitment to excellence ensures high success rates and world-class service standards for every client.",
    points: [
      "Proven Success Record",
      "Elite Admission Expertise",
      "High Client Satisfaction",
      "Global Recognition",
    ],
  },
];

export default function AboutTabsSection() {
  const [activeTab, setActiveTab] = useState("excellence");
  const activeData = TABS.find((t) => t.key === activeTab)!;

  return (
    <section className="mb-6">
      {/* TABS HEADER */}
      <div className="relative mb-8">
        <div className="absolute -bottom-0 z-11 left-0 right-0 h-[2px] bg-[#f46c44]" />

        <div className="flex flex-wrap justify-start gap-3 sm:gap-4 ">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-5 sm:px-6 py-2 rounded-tr-4xl shadow-2xl
                text-base font-semibold transition-all hover:bg-[#f46c44]/20
                ${
                  activeTab === tab.key
                    ? "bg-[#f46c44] text-white shadow-2zl"
                    : "bg-white text-gray-500"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
        
        {/* LEFT IMAGE */}
        <div className="relative flex-shrink-0">
          <div className="rounded-2xl overflow-hidden shadow-xl w-[200px] sm:w-[230px]">
            <Image
              src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
              alt="Team Discussion"
              width={230}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center sm:text-left">
          <ul className="space-y-2">
            {activeData.points.map((point, i) => (
              <li
                key={i}
                className="flex items-center justify-center sm:justify-start gap-3 text-gray-600 font-medium"
              >
                <span className="text-[#f46c44] text-lg">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
