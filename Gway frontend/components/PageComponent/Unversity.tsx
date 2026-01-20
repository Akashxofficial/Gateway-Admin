'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function UniversitySliderClient() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initSlider = async () => {
      const KeenSlider = (await import('keen-slider')).default;

      if (!sliderRef.current) return;

      const slider = new KeenSlider(
        sliderRef.current,
        {
          loop: true,
          mode: 'loop',
          slides: {
            origin: 'center',
            perView: 2.2,
            spacing: 12,
          },
          breakpoints: {
            '(min-width: 640px)': {
              slides: {
                perView: 3.5,
                spacing: 16,
              },
            },
            '(min-width: 1024px)': {
              slides: {
                perView: 8,
                spacing: 12,
              },
            },
          },
        },
        [
          (slider) => {
            let timeout: ReturnType<typeof setTimeout>;
            let mouseOver = false;

            function clearNextTimeout() {
              clearTimeout(timeout);
            }

            function nextTimeout() {
              clearTimeout(timeout);
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
              }, 3000);
            }

            slider.on('created', () => {
              slider.container.addEventListener('mouseenter', () => {
                mouseOver = true;
                clearNextTimeout();
              });
              slider.container.addEventListener('mouseleave', () => {
                mouseOver = false;
                nextTimeout();
              });
              nextTimeout();
            });

            slider.on('dragStarted', clearNextTimeout);
            slider.on('animationEnded', nextTimeout);
            slider.on('updated', nextTimeout);
          },
        ]
      );

      return () => slider.destroy();
    };

    initSlider();
  }, []);

  const universities = [
    { id: 1, src: 'https://www.gatewayabroadeducations.com/anime/p1.svg', alt: 'University 1' },
    { id: 2, src: 'https://www.gatewayabroadeducations.com/anime/p2.svg', alt: 'University 2' },
    { id: 3, src: 'https://www.gatewayabroadeducations.com/anime/p3.svg', alt: 'University 3' },
    { id: 4, src: 'https://www.gatewayabroadeducations.com/anime/p4.svg', alt: 'University 4' },
    { id: 5, src: 'https://www.gatewayabroadeducations.com/anime/p5.svg', alt: 'University 5' },
    { id: 6, src: 'https://www.gatewayabroadeducations.com/anime/p6.svg', alt: 'University 6' },
    { id: 7, src: 'https://www.gatewayabroadeducations.com/anime/p7.svg', alt: 'University 7' },
    { id: 8, src: 'https://www.gatewayabroadeducations.com/anime/p8.svg', alt: 'University 8' },
    { id: 9, src: 'https://www.gatewayabroadeducations.com/anime/p9.svg', alt: 'University 9' },
    { id: 10, src: 'https://www.gatewayabroadeducations.com/anime/p10.svg', alt: 'University 10' },
  ];

  return (
    <section className="py-12 bg-[#ffece5] overflow-hidden">
      <h2 className="text-[2.6rem] font-bold text-center mb-6">
        <span className="text-[#ea6c46]">International</span>{' '}
        <span className="text-[#646162]">University Partners</span>
      </h2>

      {/* FULL WIDTH SLIDER */}
      <div ref={sliderRef} className="keen-slider w-full px-4 lg:px-12">
        {universities.map((university) => (
          <div key={university.id} className="keen-slider__slide">
            <div className="relative h-30 rounded-xl overflow-hidden">
              
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: "url('/shapes/unibg.png')" }}
              />

              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <Image
                  src={university.src}
                  alt={university.alt}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
