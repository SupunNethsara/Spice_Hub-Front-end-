import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import Login from "../UserConnect/Login";
import Registration from "../UserConnect/Registration";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isloginmodal, setIsloginmodal] = useState(false);
  const [isregistermodal, setIsregistermodal] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/aboutus" },
    { name: "PRODUCTS", path: "/products" },
    { name: "QUALITY", path: "/quality" },
    { name: "CONTACT", path: "/connect" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md py-2 shadow-lg' : 'bg-black/20 py-3'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img
                className="h-28 w-auto transition-all duration-300 hover:scale-105"
                src="/images/Main-logo.png"
                alt="Company Logo"
              />
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                      ? 'bg-red-500 text-white shadow-md'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsloginmodal(!isloginmodal)}
                  className="px-5 py-2.5 text-sm font-medium text-white rounded-full 
              bg-transparent border border-white/20 hover:bg-white/10 
              transition-all duration-300 hover:border-white/30
              focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Login
                </button>

                <button
                  onClick={() => setIsregistermodal(!isregistermodal)}
                  className="px-5 py-2.5 text-sm font-medium text-white rounded-full
              bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
              transition-all duration-300 shadow-md hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Sign Up
                </button>
              </div>
              <button
                className="p-2 text-gray-200 hover:text-white focus:outline-none transition-colors"
                aria-label="Search"
              >
                <SearchIcon className="h-5 w-5" />
              </button>

              <button
                className="md:hidden p-2 text-gray-200 hover:text-white focus:outline-none transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-black/95 backdrop-blur-lg border-t border-gray-800">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive
                    ? 'bg-red-500 text-white'
                    : 'text-gray-300 hover:bg-white/10'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => setIsloginmodal(!isloginmodal)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-red-500 hover:bg-red-600 transition-colors"
              >
                Login
              </button>

              <button
                onClick={() => setIsregistermodal(!isregistermodal)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-red-700 hover:bg-red-800 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Login
        isOpen={isloginmodal}
        onClose={() => setIsloginmodal(false)}
      />
      <Registration
        isOpen={isregistermodal}
        isOpenLogin={setIsloginmodal}
        onClose={() => setIsregistermodal(false)}
      />

    </>

  );
}