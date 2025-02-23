import React from 'react'
import './Home.scss'
export default function Vedio() {
    return (
        <div>

            <section class=" vedio bg-white ">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div class="flex flex-col justify-center">
                        <h1 class="mb-4  font-extrabold tracking-tight leading-none text-white  text-2xl sm:text-4xl">We invest in the world’s potential</h1>
                        <p class="mb-8 font-normal text-gray-400 text-xs sm:text-sm ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                            <a style={{backgroundColor:'#8BB500'}} href="#" class="inline-flex justify-center items-center text-base font-medium text-center text-white rounded-lg  text-sm py-2  px-4 sm:py-2 px-8 ">
                               Products
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                           
                        </div>
                    </div>
                    <div>
                        <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                            src="https://www.youtube.com/embed/tkxRvk4afjg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                </div>
            </section>
        </div>
    )
}
