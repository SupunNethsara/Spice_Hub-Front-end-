import React from 'react';

export default function Directorboard() {
  const boardMembers = [
    {
      name: "Ruwan Buddhika",
      position: "Chairman & Founder",
      image: "/images/directors/chairman.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Priyanka Silva",
      position: "Chief Executive Officer",
      image: "/images/directors/ceo.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dinesh Perera",
      position: "Chief Technology Officer",
      image: "/images/directors/cto.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Nimal Fernando",
      position: "Operations Director",
      image: "/images/directors/operations.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sanduni Rathnayake",
      position: "Marketing Director",
      image: "/images/directors/marketing.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Kamal Gunaratne",
      position: "Finance Director",
      image: "/images/directors/finance.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat relative inline-block">
            Our Leadership Team
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionary leaders driving Wijaya Products to global excellence in spice manufacturing
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <img 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{member.position}</p>
                  
                  <div className="flex space-x-4">
                    <a href={member.social.facebook} className="text-gray-500 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
          <p className="text-gray-600 italic">
            "Our board of directors brings together decades of collective experience in spice cultivation, 
            international trade, and business management to guide Wijaya Products' strategic direction."
          </p>
        </div>
      </div>
    </div>
  );
}