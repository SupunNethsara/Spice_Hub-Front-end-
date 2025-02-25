import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Distribution() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/images/Animation.json") 
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
          <div className="content-center justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-4xl">
            Our Distribution Network
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-md mb-3 lg:mb-5 lg:text-md">
            The distribution network is well established throughout the island to cater to our distributors. The sales promotional activities are also integrated with the distribution program & many outlets have been established in several major cities to provide an excellent, friendly, service to our valued customers. We distribute our products not only to the local market but also to the foreign market.
            </p>
           
          </div>
          <div className="hidden md:col-span-5 md:mt-0 md:flex max-w-sm">
            {animationData && <Lottie animationData={animationData} />}
          </div>
        </div>
      </section>
    </div>
  );
}
