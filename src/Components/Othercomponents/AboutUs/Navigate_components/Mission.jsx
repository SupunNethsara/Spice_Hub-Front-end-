import React from 'react';

export default function MissionVision() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 font-montserrat">OUR VISION</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Being one of Sri Lanka's leading manufacturing and marketing company of Spices & Condiment Products in Sri Lanka, we strive to become a world renowned Manufacture, Distributor & Exporter in the main items we produce.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 font-montserrat">OUR MISSION</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We always believe that we are in business and happy because of our esteemed customer's satisfaction through feedback. We are always committed to improving the quality of our products by introducing and encouraging them to challenge themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}