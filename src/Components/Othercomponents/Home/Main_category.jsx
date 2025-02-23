import React from 'react'
import './Home.scss'
export default function Main_category() {
    return (
        <div className='w-full h-full'>
            <div className='flex justify-center text-center items-center'>
                <img className="h-20 w-auto m-8 " src="/images/logo.png" alt="Logo" />
            </div>




            <div className="flex flex-col sm:flex-row pr-5 pl-5 md:pr-10 md:pl-10">

                <div className="p-5 md:p-5 w-full sm:w-1/2 order-2 sm:order-none">
                    <div className="group relative">
                        <img
                            style={{ borderRadius: '50px' }}
                            className="w-150 h-80 mb-10 float-right"
                            src="/images/baehaki-hariri-yBeL0XChO8o-unsplash.jpg"
                            alt="Product Image"
                        />
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center text-left p-5 md:p-10 w-full sm:w-1/2 order-1 sm:order-none">
                    <p className=" peragraph  md:text-base text-sm sm:text-2xl ">
                        Our Products are distributed to every district in Sri Lanka
                        through distributors. Wijaya products are available in all
                        kinds of Retail & Wholesale outlets and leading Supermarkets.
                        Our Products are distributed to every district in Sri Lanka and
                        are exported to Australia, New Zealand, U.K, Italy, Germany,
                        Cyprus, U.S.A, Canada, Japan, South Korea, Maldives and
                        The Middle East.
                    </p>

                    <div className="mt-10 md:mt-20 flex flex-col items-center">
                        <p style={{ color: '#8BB500' }} className="text-md font-semibold ">VIEW ALL NOW</p>
                        <div style={{ backgroundColor: '#8BB500' }} className="w-24 md:w-36 h-[2px]  mt-2"></div>
                    </div>
                </div>
            </div>

        </div>





    )
}
