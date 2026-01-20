'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    title: 'Ivy League',
    text: `My Ivy League admit was made possible by gaway global's extensive admissions counselling support with my applications. Moreover, their online portal combined with expert faculty helped me ace the SAT.`,
    videoId: 'aJTjHXbOlFI',
  },
  {
    title: 'Top US University',
    text: `With personalized mentoring and constant guidance, I secured admission into my dream university abroad.`,
    videoId: 'aJTjHXbOlFI',
  },
];

export default function VideoTestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[index];

  return (
    <section
      className="bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/shapes/bg01.jpg')",
        backgroundColor: '#ffeae5',
      }}
    >
      <div className="absolute -right-20 top-[0%] opacity-10 pointer-events-none hidden lg:block">
        <div style={{
          transform: 'rotate(-120deg) scaleY(-1)',
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
      <div className="absolute -left-20 bottom-[0%] opacity-10 pointer-events-none hidden lg:block">
        <div style={{
          transform: 'rotate(-120deg) scaleY(-1)',
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-center mb-6">
          <span className="text-[#f46c44]">Video</span>{' '}
          <span className="text-gray-600">Testimonials</span>
        </h2>

        {/* WRAPPER */}
        <div className="relative mx-auto overflow-hidden
          h-[520px] sm:h-[600px] lg:h-[85vh]">

          {/* BACKGROUND SHAPE (DESKTOP ONLY) */}
          <div
            style={{ backgroundImage: "url('/shapes/vbg.png')" }}
            className="hidden lg:block absolute inset-0 bg-contain bg-center bg-no-repeat"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {/* ================= MOBILE / TABLET ================= */}
              <div className="lg:hidden flex flex-col items-center gap-6 pt-6">

                {/* VIDEO */}
                <div className="w-full max-w-[340px] aspect-video rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* TEXT */}
                <div className="text-center max-w-md px-4">
                  <p className="text-xl font-semibold text-[#f46c44] mb-2">
                    {item.title}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* ================= DESKTOP (UNCHANGED) ================= */}
              <div className="hidden lg:block">
                {/* VIDEO SHAPE */}
                <div className="h-[72%] w-[48%] absolute top-[16%] left-[13%] z-10">
                  <div className="relative w-full h-full">

                    <svg width="0" height="0" aria-hidden>
                      <defs>
                        <clipPath id="video-shape" clipPathUnits="objectBoundingBox">
                          <path d="
                            M0.06 0.09 Q0.03 0.10 0.03 0.16
                            L0.03 0.84 Q0.03 0.94 0.07 0.95
                            L0.93 0.95 Q0.97 0.94 0.97 0.85
                            L0.94 0.17 Q0.93 0.11 0.86 0.11
                            L0.13 0.09 Z
                          " />
                        </clipPath>
                      </defs>
                    </svg>

                    <div
                      className="w-full h-full p-4 overflow-hidden"
                      style={{
                        clipPath: "url(#video-shape)",
                        WebkitClipPath: "url(#video-shape)",
                      }}
                    >
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <svg
                      viewBox="0 0 1 1"
                      preserveAspectRatio="none"
                      className="absolute inset-0 w-full h-full pointer-events-none -z-1"
                    >
                      <path
                        d="M0.06 0.09
              Q0.03 0.10 0.03 0.16
              L0.03 0.84
              Q0.03 0.94 0.07 0.95
              L0.93 0.95
              Q0.97 0.94 0.97 0.85
              L0.94 0.17
              Q0.93 0.11 0.86 0.11
              L0.13 0.09
              Z"
                        fill="none"
                        stroke="#FFA88F"
                        strokeWidth="40"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                </div>

                {/* CARD SHAPE */}
                <div
                  style={{ backgroundImage: "url('/shapes/vcard.png')" }}
                  className="absolute top-[15%] right-[19%] z-10 w-[24%] h-full bg-contain bg-center bg-no-repeat"
                />

                {/* TEXT */}
                <div className="absolute top-[45%] right-[21%] z-10 w-[19%] text-center">
                  <p className="text-3xl font-medium mb-2 text-yellow-500">
                    {item.title}
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION (ALL SCREENS) */}
          <div className="absolute bottom-4 right-1/2 translate-x-1/2 lg:right-[12%] lg:translate-x-0 flex gap-3 z-50">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f46c44]/70 flex items-center justify-center text-white"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f46c44]/70 flex items-center justify-center text-white"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
