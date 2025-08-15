import React from 'react';

export default function History() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative">
          <div className="hidden md:block absolute h-full w-1 bg-red-200 left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8 md:space-y-16">
            <div className="relative md:flex items-center">
              <div className="hidden md:block w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">1990</h3>
                <p className="text-gray-600">Founded as a small spice trading company</p>
              </div>
              <div className="hidden md:flex justify-center w-12 h-12 rounded-full bg-red-500 text-white items-center absolute left-1/2 transform -translate-x-1/2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">1990</h3>
                  <p className="text-gray-600">
                    Established with just 5 employees and a single production line, focusing on high-quality cinnamon exports.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative md:flex items-center">
              <div className="hidden md:block w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">2005</h3>
                <p className="text-gray-600">Expanded to full spice product line</p>
              </div>
              <div className="hidden md:flex justify-center w-12 h-12 rounded-full bg-red-500 text-white items-center absolute left-1/2 transform -translate-x-1/2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">2005</h3>
                  <p className="text-gray-600">
                    Diversified our product range to include pepper, cardamom, and clove products, doubling our workforce.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative md:flex items-center">
              <div className="hidden md:block w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">2018</h3>
                <p className="text-gray-600">International recognition</p>
              </div>
              <div className="hidden md:flex justify-center w-12 h-12 rounded-full bg-red-500 text-white items-center absolute left-1/2 transform -translate-x-1/2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">2018</h3>
                  <p className="text-gray-600">
                    Received ISO certification and began exporting to European markets, marking our entry into premium global markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative md:flex items-center">
              <div className="hidden md:block w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Present</h3>
                <p className="text-gray-600">Leading spice exporter</p>
              </div>
              <div className="hidden md:flex justify-center w-12 h-12 rounded-full bg-red-500 text-white items-center absolute left-1/2 transform -translate-x-1/2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="md:hidden text-xl font-bold text-gray-800 mb-2">Present</h3>
                  <p className="text-gray-600">
                    Now recognized as one of Sri Lanka's premier spice exporters with operations in 15 countries and over 200 employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}