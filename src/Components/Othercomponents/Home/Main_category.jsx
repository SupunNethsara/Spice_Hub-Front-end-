import React from 'react';
import { motion } from 'framer-motion';
import './Home.scss';

export default function Main_category() {
  return (
    <section className="bg-white py-16 px-4 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We are <span className="text-red-600">passionate</span> about spices
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Sourcing, blending, and delivering the finest flavors from around the world. From farm to kitchen, we ensure quality, authenticity, and rich aromas in every pack.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence means every step of the process is carefully curated, bringing you the very best nature has to offer. From farm to kitchen, we ensure quality, authenticity, and rich aromas in every pack.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a home cook or a large-scale distributor, we provide the freshest, most vibrant spices to enhance your culinary creations.
              </p>
            </div>
            
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition-all"
              >
                Discover Our Story
              </motion.button>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/archives-by-tamizh-XM1RAnQeFTs-unsplash.jpg" 
                  alt="Spice collection" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg mt-8">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/images/marion-botella-uaHShoIDGeo-unsplash.jpg" 
                  alt="Spice preparation" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}