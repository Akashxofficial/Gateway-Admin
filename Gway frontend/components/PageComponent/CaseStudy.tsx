"use client";

import { useEffect, useRef } from "react";

export default function CaseStudy({ font, caseStudies, title, description }: { font?: boolean; caseStudies?: Array<any>; title?: string; description?: string }) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const AUTO_SLIDE_INTERVAL = 3000;

    // Default data
    const defaultCaseStudies = [
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
        },
        {
            id: 4,
            name: "Saumya Sharma",
            text: "One of our proud alumni, has successfully completed his Bachelor's degree in Germany",
            university: "Harvard",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600"
        }
    ];

    // Use provided caseStudies or default
    const testimonials = caseStudies && caseStudies.length > 0 
        ? caseStudies.map((study: any, index: number) => ({
            id: study.id || index + 1,
            name: study.name || study.title || "",
            text: study.text || study.description || study.testimonial || "",
            university: study.university || study.category || "",
            image: study.image || study.imageUrl || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600",
            brainImage: study.brainImage || study.secondaryImage || "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg"
        }))
        : defaultCaseStudies;

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
                            spacing: 6,
                        },
                        breakpoints: {
                            '(min-width: 640px)': {
                                slides: {
                                    perView: 2,
                                    spacing: 6,
                                },
                            },
                            '(min-width: 1024px)': {
                                slides: {
                                    perView: 3,
                                    spacing: 0,
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

                            slider.on("animationEnded", () => {
                                nextTimeout();
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
    }, [testimonials]);

    return (
        <section className="py-16" style={{ backgroundColor: '#fff9f4' }}>
            <div className="max-w-7xl mx-auto" >
                {/* Title - Dynamic */}
                {title && (
                    <h2 style={{ fontFamily: font && "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", transformStyle: 'flat', transformOrigin: 'initial' }} className="text-[2.6rem] font-semibold text-center mb-0">
                        <span style={{ color: '#f46c44' }}>{title}</span>
                    </h2>
                )}
                {/* Fallback to default title if no title provided */}
                {!title && (
                    <h2 style={{ fontFamily: font && "'Mileast', 'Playfair Display', 'Cormorant Garamond', Georgia, serif", transformStyle: 'flat', transformOrigin: 'initial' }} className="text-[2.6rem] font-semibold text-center mb-0">
                        <span style={{ color: '#f46c44' }}>Case</span>{" "}
                        <span className="text-gray-600">Studies</span>
                    </h2>
                )}
                
                {/* Description - Dynamic */}
                {description && (
                    <p className="max-w-4xl font-semibold mx-auto mt-2 text-lg text-[#656565] text-center">
                        {description}
                    </p>
                )}
                {!description && (
                    <p className="max-w-4xl font-semibold mx-auto mt-2 text-lg text-[#656565] text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum architecto dolor, in vel laboriosam voluptates alias maiores voluptas neque?
                    </p>
                )}

                <div ref={sliderRef} className="keen-slider">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="keen-slider__slide flex justify-center">
                            <svg width="0" height="0" aria-hidden>
                                <defs>
                                    <clipPath
                                        id={`testimonial-outer-shape-${testimonial.id}`}
                                        clipPathUnits="objectBoundingBox"
                                    >
                                        <path 
                                            d="
          M0.27 0.21
          Q0.15 0.23 0.16 0.33
          L0.17 0.71
          Q0.17 0.84 0.26 0.86
          L0.87 0.99
          Q1.00 1.00 1.00 0.87
          L0.99 0.29
          Q1.00 0.09 0.84 0.12
          L0.32 0.20
          Z
        "
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                            {/* OUTER SHAPE */}
                            <div
                                style={{
                                    clipPath: `url(#testimonial-outer-shape-${testimonial.id})`,
                                    WebkitClipPath: `url(#testimonial-outer-shape-${testimonial.id})`,
                                    filter: "drop-shadow(0 12px 18px rgba(0, 0, 0, 0.33))",
                                }}
                                className="relative w-full h-95"
                            >
                                {/* BACKGROUND COLOR */}
                                <div className="absolute inset-0 left bg-[#f67b59]" />

                                {/* CONTENT */}
                                <div className="relative z-10 w-full h-full translate-x-12 translate-y-12 py-16 px-12 flex flex-col">
                                    <div className="h-full">
                                        <div>
                                            <p className="text-base font-semibold text-gray-50 leading-relaxed">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <img className="rounded-xl h-24 w-32 object-cover" src={testimonial.brainImage || "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg"} alt={testimonial.name} />
                                            <p className="text-sm font-medium text-gray-50">
                                                {testimonial.text}
                                            </p>
                                        </div>
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
