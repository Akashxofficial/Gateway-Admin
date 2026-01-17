"use client";

import { useEffect, useRef } from "react";

export default function CaseStudy({ font }) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const AUTO_SLIDE_INTERVAL = 3000;

    useEffect(() => {
        const keenSlider = async () => {
            const KeenSlider = (await import('keen-slider')).default;

            if (sliderRef.current) {
                let timeout: ReturnType<typeof setTimeout> | null = null;
                let mouseOver = false;

                const slider = new KeenSlider(
                    sliderRef.current,
                    {
                        loop: true,
                        mode: 'free-snap',
                        slides: {
                            origin: 'center',
                            perView: 1,
                            spacing: 20,
                        },
                        breakpoints: {
                            '(min-width: 640px)': {
                                slides: {
                                    perView: 1.5,
                                    spacing: 24,
                                },
                            },
                            '(min-width: 1024px)': {
                                slides: {
                                    perView: 3,
                                    spacing: 32,
                                },
                            },
                        },
                    },
                    [
                        (slider) => {
                            function clearNextTimeout() {
                                if (timeout) {
                                    clearTimeout(timeout);
                                    timeout = null;
                                }
                            }

                            function nextTimeout() {
                                clearNextTimeout();
                                if (mouseOver) return;

                                timeout = setTimeout(() => {
                                    slider.next();
                                    nextTimeout(); // Continue auto-sliding after each slide
                                }, AUTO_SLIDE_INTERVAL);
                            }

                            slider.on("created", () => {
                                nextTimeout(); // Start auto-sliding

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

                            slider.on("animationEnded", () => {
                                nextTimeout(); // Continue after animation ends
                            });

                            slider.on("updated", () => {
                                if (!mouseOver) {
                                    nextTimeout();
                                }
                            });
                        },
                    ]
                );

                return () => {
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    slider.destroy();
                };
            }
        };

        keenSlider();
    }, []);


    const testimonials = [
        {
            id: 1,
            name: "Aditya Sharma",
            text: "One of our proud alumni, has successfully completed his Bachelor's degree in Germany",
            university: "Harvard",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600"
        },
        {
            id: 2,
            name: "Rohan Gupta",
            text: "One of our proud alumni, has successfully completed his Bachelor's degree in Germany",
            university: "Harvard",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600"
        },
        {
            id: 3,
            name: "Saumya Sharma",
            text: "One of our proud alumni, has successfully completed his Bachelor's degree in Germany",
            university: "Harvard",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600"
        }
    ];

    return (
        <section className="py-16" style={{ backgroundColor: '#fff9f4' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <h2 style={{ fontFamily: font && "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", transformStyle: 'flat', transformOrigin: 'initial' }} className="text-[2.6rem] font-semibold text-center mb-0">
                    <span style={{ color: '#f46c44' }}>Case</span>{" "}
                    <span className="text-gray-600">Studies</span>
                </h2>
                <p className="max-w-4xl font-semibold mx-auto mt-2 text-lg text-[#656565] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum architecto dolor, in vel laboriosam voluptates alias maiores voluptas neque?</p>

                <div ref={sliderRef} className="keen-slider">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="keen-slider__slide flex justify-center">
                            <svg width="0" height="0" aria-hidden>
                                <defs>
                                    <clipPath id="testimonial-outer-shape" clipPathUnits="userSpaceOnUse">
                                        <path
                                            d="
              M 30 10
              Q 5 20 5 50
              L 5 300
              Q 5 340 40 345
              L 360 345
              Q 395 340 395 300
              L 395 40
              Q 395 5 360 5
              L 70 5
              Z
            "
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                            {/* OUTER SHAPE */}
                            <div
                                style={{
                                    clipPath: "url(#testimonial-outer-shape)",
                                    WebkitClipPath: "url(#testimonial-outer-shape)",
                                    filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.18))",
                                }}
                                className="relative w-[410px] h-[350px] mt-6"
                            >
                                {/* 🔥 BACKGROUND COLOR */}
                                <div className="absolute inset-0 bg-[#fff4ef]" />

                                {/* CONTENT */}
                                <div className="relative z-10 w-full h-full px-8 py-10 flex flex-col">
                                    <div className="grid grid-cols-2 gap-4 h-full">

                                        {/* TEXT */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-700 mb-3">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {testimonial.text}
                                            </p>
                                        </div>

                                        {/* IMAGE SHAPE */}
                                        <div className="flex items-start justify-end">
                                            <svg
                                                viewBox="70 0 260 200"
                                                className="w-full h-auto"
                                                style={{
                                                    filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.12))",
                                                }}
                                            >
                                                <defs>
                                                    <clipPath id="tiltedCl">
                                                        <path
                                                            d="
                      M 120 26
                      Q 93 29 91 56
                      L 92 125
                      Q 91 150 120 158
                      L 266 190
                      Q 306 194 303 155
                      L 303 45
                      Q 303 7 266 7
                      L 221 12
                      Z
                    "
                                                        />
                                                    </clipPath>
                                                </defs>

                                                <image
                                                    href="https://t3.ftcdn.net/jpg/06/50/56/80/360_F_650568058_q6KruAvlT4w7RahAGwIwgIY8ZjIkGAYg.jpg"
                                                    x="70"
                                                    y="0"
                                                    width="100%"
                                                    height="100%"
                                                    clipPath="url(#tiltedCl)"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />

                                                {/* IMAGE BORDER */}
                                                <path
                                                    d="
                  M 120 26
                  Q 93 29 91 56
                  L 92 125
                  Q 91 150 120 158
                  L 266 190
                  Q 306 194 303 155
                  L 303 45
                  Q 303 7 266 7
                  L 221 12
                  Z
                "
                                                    fill="none"
                                                    stroke="#f46c44"
                                                    strokeWidth="1"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* LOGO */}
                                    <div className="pt-6">
                                        <img
                                            src="https://www.gatewayabroadeducations.com/anime/p17.svg"
                                            className="h-8 object-contain"
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
