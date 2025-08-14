import React, { useState, useEffect } from "react";
import "./Home.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion, AnimatePresence } from "framer-motion";
import Main_category from "./Main_category";
import Image_video from "./Image_video";
import SupportiveCompanies from "./SupportiveCompanies";

export default function Home() {
  const texts = [
    "EXQUISITE SPICES & SEASONINGS",
    "FINEST HERBS & FLAVORS",
    "PREMIUM AROMATIC BLENDS"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home_main">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/1280982.jpg"
            className="w-full h-full object-cover"
            alt="Spice background"
          />
          <div className="absolute inset-0 bg-black/70">
            <div className="absolute inset-0 "></div>
          </div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-red-500 uppercase tracking-widest text-lg font-medium"
              >
                The Art of Flavor
              </motion.p>

              <div className="h-28 sm:h-36 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                  >
                    {texts[index]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-300 text-lg max-w-xl leading-relaxed"
              >
                From the finest handpicked spices to expertly crafted blends, experience the true essence of flavor with our premium selection. Each spice is carefully sourced from trusted growers, ensuring unmatched freshness and aroma in every pinch.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-6 pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex bg-red-500 items-center justify-center px-8 py-3.5 rounded-lg text-white font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all"
                  href="#"
                >
                  EXPLORE COLLECTION <ArrowRightAltIcon className="ml-3" />
                </motion.a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-full max-w-xl aspect-square">
                <img
                  src="/images/circlespices.png"
                  className="w-full h-full object-contain animate-[spin_20s_linear_infinite]"
                  alt="Premium Spices"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/15 via-red-400/5 to-transparent rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse"></div>
        </div>
      </section>
      <Main_category />
      <Image_video />
      <SupportiveCompanies />
    </div>
  );
}