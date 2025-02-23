import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Home.scss'
import Searchbar from './Searchbar';
export default function Footer() {
    return (
        <div>


<footer className= "footer_bg bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <img src="/images/Main-logo.png" alt="Logo" className="w-40" />
            <Searchbar/>
          </div>
      
           
        
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Brand Center</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help Center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300">© 2023 YourCompany. All Rights Reserved.</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>

        </div>
    )
}
