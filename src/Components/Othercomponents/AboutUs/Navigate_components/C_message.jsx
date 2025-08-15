import React from 'react';

export default function C_message() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-10">
      <section className="max-w-6xl mx-auto px-6 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center relative">
            <div className="relative group">
              <img
                className="w-full max-w-md h-auto rounded-xl shadow-xl border-4 border-white transform group-hover:scale-105 transition-transform duration-300"
                src="/images/chairmain.jpg"
                alt="Chairman"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Mr. Ruwan Buddhika</h3>
              <p className="text-red-600 font-medium">Chairman & Founder</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-red-100 rounded-full opacity-20"></div>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg relative z-10">
              <div className="mb-6 text-red-500">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4 text-lg leading-relaxed">
                  Wijaya Products (Pvt) Ltd was established in 1989 at Dodangoda, Kaluthara district with just one employee. Today, I'm proud to lead a renowned organization with over 1,240 dedicated team members, serving both local and international markets.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  Our success stems from the unwavering commitment of our board, management, and employees to produce the highest quality products while valuing customer feedback as our guiding principle.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  Beyond business, we actively support children's education and skill development, along with various social and religious initiatives to uplift community living standards. We remain committed to these valuable contributions.
                </p>
                <p className="text-lg leading-relaxed font-medium text-gray-900">
                  It brings me immense joy to see "Wijaya Products" evolve into a globally recognized brand, and we will continue this journey of excellence.
                </p>
              </div>
              <div className="mt-8 flex items-center">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="px-4 text-gray-500 font-medium">Ruwan Buddhika</span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}