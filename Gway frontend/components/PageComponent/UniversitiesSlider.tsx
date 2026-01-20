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
        border-1 border-gray-400 rounded-tr-4xl
        text-[#ff6a3d] bg-white flex shadow-xl justify-center items-center
        px-2 py-4
        text-base font-medium
        whitespace-nowrap overflow-hidden
        bg-white
      ">
                <img src="https://www.gatewayabroadeducations.com/anime/p5.svg" className="w-40" alt="" />
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


export default function UniversitiesSlider() {
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
                slides: { perView: "7", spacing: 8 },
            },
            [marquee(0.4)] // left → right
        );

        const slider2 = new KeenSlider(
            sliderRef2.current,
            {
                loop: true,
                drag: true,
                rtl: true,
                slides: { perView: "7", spacing: 8 },
            },
            [marquee(0.4)] // right → left
        );

        return () => {
            slider1.destroy();
            slider2.destroy();
        };
    }, []);

    return (
        <div className="space-y-4 py-8 overflow-hidden">
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