"use client";

import { useEffect, useState } from "react";

interface IvyLeagueImageSliderProps {
  images: string[];
  interval?: number;
}

export default function IvyLeagueImageSlider({ 
  images, 
  interval = 3000 
}: IvyLeagueImageSliderProps) {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    if (images.length === 0) return;
    
    const slideInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div
      className="lg:absolute inset-0 z-10 lg:top-[41px] lg:left-[38px]"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
        width: "335px",
        height: "335px",
        borderRadius: "100px",
      }}
    />
  );
}
