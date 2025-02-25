import React from 'react'

export default function SupportiveCompanies() {
  return (
    <div>
      <section class="bg-white py-1 antialiased md:py-10 ">
        <div class="mx-auto grid max-w-screen-xl px-4 pb-4 md:grid-cols-12 lg:gap-12 lg:pb-4 xl:gap-0">
          <div class="content-center justify-self-start md:col-span-7 md:text-start p-5 sm:p-6 order-2">
            <h1 class="mb-4 text-3xl font-bold leading-none tracking-tight  md:max-w-2xl md:text-5xl xl:text-5xl">Limited Time Offer!<br />Up to 50% OFF!</h1>
            <p class="mb-4 max-w-2xl text-gray-500  md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">Don't Wait - Limited Stock at Unbeatable Prices!</p>
            <button  style={{backgroundColor:'#8BB500'}} type="button" class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              Products View
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>

          </div>
          <div class=" md:col-span-5 md:mt-0 md:flex ">

            <img class="dark:block w-5/5 sm:max-w-sm order-1" src="/images/vecteezy_a-bowl-of-chili-peppers-and-spices_50739162.png" alt="shopping illustration" />
          </div>
        </div>

      </section>
    </div>
  )
}
