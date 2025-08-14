import React from 'react';
import { motion } from 'framer-motion';
import './Home.scss';

export function Video() {
  return (
    <section className="relative py-16 px-4 sm:py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/1280982.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6 text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We <span className="text-red-500">invest</span> in the world's potential
            </h1>
            <p className="text-gray-300 leading-relaxed">
              At our core, we focus on markets where innovation and quality can unlock long-term value.
              Our spices represent centuries of tradition combined with modern quality standards.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From sustainable sourcing to meticulous processing, we ensure every product meets our
              exacting standards for flavor, aroma, and purity.
            </p>
            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition-all"
              >
                Explore Products
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full z-10"
                src="https://www.youtube.com/embed/tkxRvk4afjg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}