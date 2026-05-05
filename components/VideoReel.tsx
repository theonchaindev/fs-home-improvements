"use client";

import { useState, useEffect, useRef } from "react";

const clips = [
  "https://videos.pexels.com/video-files/6474389/6474389-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/6474260/6474260-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/6474372/6474372-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/6473923/6473923-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/5799460/5799460-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/6474368/6474368-hd_1920_1080_25fps.mp4",
];

export default function VideoReel() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);
  const currentRef = useRef<HTMLVideoElement>(null);
  const nextRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advanceClip = () => {
    setFading(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % clips.length);
      setNext((c) => (c + 2) % clips.length);
      setFading(false);
    }, 800);
  };

  useEffect(() => {
    timerRef.current = setTimeout(advanceClip, 7000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current video */}
      <video
        ref={currentRef}
        key={`current-${current}`}
        src={clips[current]}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.8s ease" }}
      />
      {/* Next video (preloads silently) */}
      <video
        ref={nextRef}
        key={`next-${next}`}
        src={clips[next]}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
      />
      {/* Dark overlay — gradient from bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/30" />

      {/* Clip indicator dots */}
      <div className="absolute bottom-8 right-8 flex gap-1.5 z-10">
        {clips.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setNext((i + 1) % clips.length); }}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-1.5 bg-[#D9001B]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"}`}
            aria-label={`Clip ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
