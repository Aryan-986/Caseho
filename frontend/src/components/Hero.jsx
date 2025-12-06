import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const videos = [
  assets.herovideo, // your watch cinematic video
];

const HeroBanner = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll();
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      "polygon(10% 0, 90% 0, 100% 100%, 0 100%)",
    ]
  );

  // Preload videos
  useEffect(() => {
    let loaded = 0;
    videos.forEach((src) => {
      const video = document.createElement("video");
      video.src = src + "?quality=high&res=1080";
      video.preload = "auto";
      video.oncanplaythrough = () => {
        loaded++;
        if (loaded === videos.length) setIsReady(true);
      };
    });
  }, []);

  if (!isReady)
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-xl">
        Loading...
      </div>
    );

  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden"
      style={{ clipPath }}
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        {videos.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${
              index === currentVideo ? "opacity-100" : "opacity-0"
            }`}
            style={{
              filter:
                "contrast(125%) brightness(90%) saturate(120%) blur(0px)",
            }}
          />
        ))}
      </div>

      {/* Dark gradient for luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 sm:px-16 lg:px-24 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-wide leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
        >
          TIME ELEVATED
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 mt-4 text-lg sm:text-xl tracking-wide max-w-2xl"
        >
          Precision-engineered luxury watches crafted for those who value time,
          craftsmanship, and timeless elegance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-400 mt-2 italic text-sm sm:text-base"
        >
          Every second tells a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10"
        >
          <Link to="/collection">
            <button className="bg-white text-black px-10 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-transform hover:scale-[1.05]">
              Explore Collection
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Branding Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 1 }}
        className="absolute bottom-6 right-8 z-20 text-gray-400 text-xs sm:text-sm uppercase tracking-wider"
      >
        <span className="text-white font-bold">Young Devster</span> • Since 2025
      </motion.div>
    </motion.section>
  );
};

export default HeroBanner;
