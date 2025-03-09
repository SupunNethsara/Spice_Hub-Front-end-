
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Q_logo from "./Q_logo";


export default function Q_Controlling() {

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/images/Animation3.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div>
      <div>

        <section className=" py-3 antialiased md:py-16">
          <div className="mx-auto grid max-w-screen-xl px-4 pb-4 md:grid-cols-12 lg:gap-12 lg:pb-4 xl:gap-0">
            <div className=" justify-self-start md:col-span-7 md:text-start mt-10" >
              <h1 className="mb-5 text-4xl font-bold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-4xl">
                Quality Controlling
              </h1>
              <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-md mb-3 lg:mb-5 lg:text-md">
                Inspecting & Sampling of raw materials which come from selected and the best regular suppliers and performing analysis procedures as per
                relevant standards for confirming of quality of materials prior to use for process. Maintaining all physical, chemical & biological; parameters &
                standards throughout the process to be controlled the each quality parameters of the product for protecting of product
                quality according to food hygienic.
              </p>


              <p className="mb-4 max-w-2xl text-gray-500 md:mb-12 md:text-md mb-3 lg:mb-5 lg:text-md">To preserve quality of our products we use food grade packing material that is approved by FDA. Good Manufacturing Practice
                s are strictly followed, under the close supervision of the Quality Assurance staff, to maintain
                the highest hygienic standards in the factory.</p>
              <div>
            
              </div>


            </div>
            <div className="m-auto md:col-span-5 md:mt-0 md:flex max-w-md">
              {animationData && <Lottie animationData={animationData} />}
            </div>


          </div>
       
        </section>

        <Q_logo />
      </div>
    </div>
  )
}
