'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videos: string[];
}

export default function VideoBackground({ videos }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // ✅ 1. Handle video end ONLY
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setCurrentVideoIndex((prev) => (prev + 1));
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [videos.length]);

  // ✅ 2. Load & play video when index changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = videos[currentVideoIndex];
    video.load();

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // autoplay may be blocked — ignore safely
      });
    }
  }, [currentVideoIndex, videos]);

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
    />
  );
}
