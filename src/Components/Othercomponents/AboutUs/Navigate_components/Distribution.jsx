import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Distribution() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/images/Animation2.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div>

      <section className="bg-gray-100 py-3 antialiased md:py-16">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-4 md:grid-cols-12 lg:gap-12 lg:pb-4 xl:gap-0">
          <div className=" justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-5 text-4xl font-bold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-4xl">
              Our Distribution Network
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-md mb-3 lg:mb-5 lg:text-md">
              The distribution network is well established throughout the island to cater to our distributors. The sales promotional activities are also integrated with the distribution program & many outlets have been established in several major cities to provide an excellent, friendly, service to our valued customers. We distribute our products not only to the local market but also to the foreign market.
            </p>
            <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-2xl text-gray-600 mt-20">
              Local Network
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-md mb-3 lg:mb-5 lg:text-sm">
              In the local market, our products are distributed to every district in Sri Lanka through distributors. More than 120 vehicles are used for distributions. Wijaya Products are available in all kinds of retail & wholesale outlets and leading supermarkets. Wijaya Products are chosen by more than 12 million customers in Sri Lanka.</p>
            <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-2xl text-gray-600 mt-20">

              Overseas Sales Network
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-md mb-3 lg:mb-5 lg:text-sm">
              We export our product to more than 20 Countries such as Australia, New Zealand, U.K, Italy, Germany, Cyprus, U.S.A, Canada, Japan, South Korea, Maldives and The Middle East countries. More than 43 million overseas customers taste our products in Worldwide.</p>
          </div>
          <div className="m-auto md:col-span-5 md:mt-0 md:flex max-w-xs">
            {animationData && <Lottie animationData={animationData} />}
          </div>

          <div className="map">
           


          </div>
        </div>
      </section>
    </div>
  );
}
