import React from 'react'

function Footer() {
  return (
     <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-red-400">Help Center</a></li>
                                <li><a href="#" className="hover:text-red-400">Contact Us</a></li>
                                <li><a href="#" className="hover:text-red-400">Returns & Refunds</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">About SpiceMart</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-red-400">About Us</a></li>
                                <li><a href="#" className="hover:text-red-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-red-400">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-white p-2 rounded">
                                    <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa" />
                                </div>
                                <div className="bg-white p-2 rounded">
                                    <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" />
                                </div>
                                <div className="bg-white p-2 rounded">
                                    <img src="https://via.placeholder.com/40x25?text=PP" alt="PayPal" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-4">Download App</h3>
                            <div className="space-y-3">
                                <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" className="cursor-pointer" />
                                <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                        © 2023 SpiceMart. All rights reserved.
                    </div>
                </div>
            </footer>
  )
}

export default Footer