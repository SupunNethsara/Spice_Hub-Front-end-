


import React, { useState, useEffect } from "react";
import "./Home.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import Main_category from "./Main_category";
import Image_video from "./Image_video";


export default function Home() {

  const texts = [
    "EXQUISITE SPICES ANDSEASONINGS",
    "FINEST HERBS AND FLAVORS",
    "AROMATIC BLENDS AND ESSENCES"
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
      <section className="img_text bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h4 className="text-amber-50 text-1xl uppercase mt-10 sm:mt-5">The only place to go for spices</h4>
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="motion_sec max-w-2xl mb-4 tracking-tight leading-none  mt-4 text-3xl sm:text-6xl"
            >
              {texts[index]}
            </motion.h1>
            <p className="max-w-2xl mb-6  font-light text-gray-500 lg:mb-8 md:text-lg  dark:text-gray-400 text-sm sm:text-lg ">
            From the finest handpicked spices to expertly crafted blends, experience the true essence of flavor with our premium selection.
            </p>
            <div className="flex space-x-4">
              
              <a style={{backgroundColor:'#8BB500' ,border:'1px solid #8BB500' ,borderRadius:'10px' ,color:'white'}}
                href="#"
                className="inline-flex items-center justify-center p-2 text-base text-sm "
              >
                VIEW ALL NOW<ArrowRightAltIcon className="ml-2" />
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/images/circlespices.png"
              className="w-5/5 animate-[spin_10s_linear_infinite] mt-12"
              alt="Spices"
            />
          </div>
        </div>
      </section>
      
      <Gallery />
      <Main_category />
      <Image_video />


    </div>
  );
}

