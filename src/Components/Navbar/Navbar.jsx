import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Link } from "react-router";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/60  shadow-md border-b  fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between w-full">

          <div className="inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex shrink-0 items-center ">
            <img className="h-24 w-auto " src="/images/Main-logo.png" alt="Logo" />
          </div>
          <div className="flex flex-1 items-center justify-end sm:justify-end">

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 list-none">
                <li className="rounded-md px-3 py-2 text-xs text-white list-none">
                  <Link to="/">HOME</Link>
                </li>
                <li className="rounded-md px-3 py-2 text-xs text-gray-50 list-none">
                  <Link to="/aboutus">ABOUT</Link>
                </li>
                <li className="rounded-md px-3 py-2 text-xs text-gray-50 list-none">

                  <Link to="/products">PRODUCTS</Link>

            
                </li>
                <li className="rounded-md px-3 py-2 text-xs text-gray-50 list-none">
                  <Link to="">QUALITY ASSURANCE</Link>
                </li>
                <li className="rounded-md px-3 py-2 text-xs text-gray-50 list-none">
                  <Link to="">CONTACT US</Link>
                </li>
              </div>
            </div>

          </div>



          <div className="absolute inset-y-0 right-0  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


            <SearchIcon onClick={''} sx={{ color: 'white', cursor: 'pointer' }} />

          


          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200">Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200">Projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200">Calendar</a>
          </div>
        </div>
      )}
    </nav>
  );
}
