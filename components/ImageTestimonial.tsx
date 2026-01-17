"use client";

import { useEffect, useRef } from "react";

export default function ImageTestimonial({font}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const AUTO_SLIDE_INTERVAL = 3000;

  useEffect(() => {
    const keenSlider = async () => {
      const KeenSlider = (await import("keen-slider")).default;
      if (!sliderRef.current) return;

      let timeout: ReturnType<typeof setTimeout> | null = null;
      let mouseOver = false;

      const slider = new KeenSlider(
        sliderRef.current,
        {
          loop: true,
          mode: "free-snap",
          slides: {
            origin: "center",
            perView: 1,
            spacing: 16,
          },
          breakpoints: {
            "(min-width: 640px)": {
              slides: { perView: 1.5, spacing: 24 },
            },
            "(min-width: 1024px)": {
              slides: { perView: 3, spacing: 32 },
            },
          },
        },
        [
          (slider) => {
            function clearNextTimeout() {
              if (timeout) clearTimeout(timeout);
              timeout = null;
            }

            function nextTimeout() {
              clearNextTimeout();
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
                nextTimeout();
              }, AUTO_SLIDE_INTERVAL);
            }

            slider.on("created", () => {
              nextTimeout();
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                clearNextTimeout();
              });
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                nextTimeout();
              });
            });

            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
          },
        ]
      );

      return () => {
        if (timeout) clearTimeout(timeout);
        slider.destroy();
      };
    };

    keenSlider();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Saumya Sharma",
      text: "One of our proud alumni, has successfully completed his Bachelor's degree in Germany",
      image:
        "https://t3.ftcdn.net/jpg/06/50/56/80/360_F_650568058_q6KruAvlT4w7RahAGwIwgIY8ZjIkGAYg.jpg",
    },
    {
      id: 2,
      name: "Aditya Sharma",
      text: "One of our proud alumni, has successfully completed his Bachelor's degree in Germany",
      image:
        "https://t3.ftcdn.net/jpg/06/50/56/80/360_F_650568058_q6KruAvlT4w7RahAGwIwgIY8ZjIkGAYg.jpg",
    },
    {
      id: 3,
      name: "Rohan Gupta",
      text: "One of our proud alumni, has successfully completed his Bachelor's degree in Germany",
      image:
        "https://t3.ftcdn.net/jpg/06/50/56/80/360_F_650568058_q6KruAvlT4w7RahAGwIwgIY8ZjIkGAYg.jpg",
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#fff9f4', overflow: 'visible' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ overflow: 'visible' }}>
        <h2 style={{ fontFamily: font && "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", transformStyle: 'flat', transformOrigin: 'initial' }} className="text-[2.6rem] font-semibold text-center mb-0">
          <span style={{ color: '#f46c44' }}>Image</span>{" "}
          <span className="text-gray-600">Testimonials</span>
        </h2>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t) => (
            <div key={t.id} className="keen-slider__slide">
              <div className="flex justify-center py-6">
                {/* CARD */}
                <div
                  className="
                    relative
                    w-full max-w-[320px]
                    sm:max-w-[380px]
                    lg:w-[410px] lg:h-[350px]
                  "
                >
                  {/* BACK SHAPE */}
                  <div
                    style={{ backgroundImage: "url('/shapes/testi.png')" }}
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  />

                  {/* CONTENT */}
                  <div
                    className="
                      relative z-10
                      flex flex-col gap-3
                      py-6 px-4
                      sm:py-8 sm:px-6
                      lg:py-12 lg:pl-8 lg:pr-6
                    "
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                      {/* TEXT */}
                      <div>
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-600 mb-2">
                          {t.name}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-sm text-gray-700 leading-relaxed">
                          {t.text}
                        </p>
                      </div>

                      {/* IMAGE */}
                      <div className="flex justify-center">
                        <svg
                          viewBox="70 0 260 200"
                          className="w-[120px] sm:w-[150px] lg:w-full h-auto"
                        >
                          <defs>
                            <clipPath id={`clip-${t.id}`}>
                              <path d="M 120 26 Q 93 29 91 56 L 92 125 Q 91 150 120 158 L 266 190 Q 306 194 303 155 L 303 45 Q 303 7 266 7 L 221 12 Z" />
                            </clipPath>
                          </defs>
                          <image
                            href={t.image}
                            x="70"
                            y="0"
                            width="100%"
                            height="100%"
                            clipPath={`url(#clip-${t.id})`}
                            preserveAspectRatio="xMidYMid slice"
                          />
                          <path
                            d="M 120 26 Q 93 29 91 56 L 92 125 Q 91 150 120 158 L 266 190 Q 306 194 303 155 L 303 45 Q 303 7 266 7 L 221 12 Z"
                            fill="none"
                            stroke="#f46c44"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* SIGNATURE */}
                    <img
                      src="https://www.gatewayabroadeducations.com/anime/p17.svg"
                      className="w-32 sm:w-40 lg:w-50 object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
