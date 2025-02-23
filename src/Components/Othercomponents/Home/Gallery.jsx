import React from 'react';
import './Home.scss'

export default function Gallery() {
    return (
        <div className="bg-white py-4">
            <div className="mx-auto max-w-full px-5">
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                    
                    {/* First Row - Three Items */}
                    <a href="#" className="group relative flex h-48 sm:h-56 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img src="/images/karyna-panchenko-bF404j83DH0-unsplash.jpg" loading="lazy" alt="Category"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-80 flex justify-center items-center">
                            <h1 className='text-xl sm:text-2xl text-white'>100% <br /> Natural</h1>
                        </div>
                        <span className="absolute bottom-4 left-4">
                            <button style={{ backgroundColor: '#8BB500' }} className="text-white font-medium rounded-lg text-sm px-5 py-2.5">
                                VIEW ALL NOW
                            </button>
                        </span>
                    </a>

                    <a href="#" className="group relative flex h-48 sm:h-56 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img src="/images/ameya-purohit-xWLgCy2JpWo-unsplash.jpg" loading="lazy" alt="Tech"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-80 flex justify-center items-center">
                            <h1 className='text-xl sm:text-2xl text-white'>Medicine Herbal</h1>
                        </div>
                        <span className="absolute bottom-4 left-4">
                            <button style={{ backgroundColor: '#8BB500' }} className="text-white font-medium rounded-lg text-sm px-5 py-2.5">
                                VIEW ALL NOW
                            </button>
                        </span>
                    </a>

                    <a href="#" className="group relative flex h-48 sm:h-56 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img src="/images/zahrin-lukman-0y8e1gz2rwo-unsplash.jpg" loading="lazy" alt="Retro"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-80 flex justify-center items-center">
                            <h1 className='text-xl sm:text-2xl text-white'>Noble Spices</h1>
                        </div>
                        <span className="absolute bottom-4 left-4">
                            <button style={{ backgroundColor: '#8BB500' }} className="text-white font-medium rounded-lg text-sm px-5 py-2.5">
                                VIEW ALL NOW
                            </button>
                        </span>
                    </a>

                    {/* Second Row - Two Items */}
                    <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src="/images/tamanna-rumee-dqVPEGkuR_U-unsplash .jpg" loading="lazy" alt="Dev"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-80">
                            <h1 className='gallery_text text-3xl sm:text-2xl text-white' style={{ margin: '20%' }}>Seeds & Spices</h1>
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                            <button style={{ backgroundColor: '#8BB500' }} type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                VIEW ALL NOW
                            </button>
                        </span>
                    </a>

                    <a href="#" className="group relative flex h-48 sm:h-56 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img src="/images/zahrin-lukman-0y8e1gz2rwo-unsplash.jpg" loading="lazy" alt="New Category"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-80 flex justify-center items-center">
                            <h1 className='text-xl sm:text-2xl text-white'>New Category</h1>
                        </div>
                        <span className="absolute bottom-4 left-4">
                            <button style={{ backgroundColor: '#8BB500' }} className="text-white font-medium rounded-lg text-sm px-5 py-2.5">
                                VIEW ALL NOW
                            </button>
                        </span>
                    </a>

                </div>
            </div>
        </div>
    );
}
