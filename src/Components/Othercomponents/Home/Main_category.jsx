import React from 'react'
import './Home.scss'
export default function Main_category() {
    return (
        <div className='w-full h-full'>

            <section class=" main_cat_text bg-white ">
                <div class="gap-5 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 ">
                    <div class="font-light text-gray-700 sm:text-lg ">
                        <h2 class="mb-4 text-4xl  font-bold text-gray-900 ">We are passionate about spices</h2>
                        <p style={{ fontFamily: "Poppins, serif" }} className="mb-4 text-sm font-medium text-gray-500  ">
                            Sourcing, blending, and delivering the finest flavors from around the world.
                            From farm to kitchen, we ensure quality, authenticity, and rich aromas in every pack.
                        </p>

                        <p className='text-sm font-medium text-gray-500'>Whether you're a home cook or a large-scale distributor, we provide the freshest, most vibrant spices to enhance your culinary creations. Small enough to offer personalized service, yet big enough to meet all your spice needs with efficiency and reliability.

                            Let’s spice up the world, one dish at a time! 🌿✨</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8 p-3 sm:p-10">
                        <img class="w-full rounded-lg" src="/images/archives-by-tamizh-XM1RAnQeFTs-unsplash.jpg" alt="office content 1" />
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/images/marion-botella-uaHShoIDGeo-unsplash.jpg" alt="office content 2" />
                    </div>
                </div>
            </section>
        </div>





    )
}
