import React from 'react'

export default function C_message() {
  return (
    <div className="bg-gray-100 py-12">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Chairman's Message
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}    <div className="flex flex-col items-center">
            <img
              className="w-[350px] h-auto rounded-lg shadow-lg border-2 border-gray-300"
              src="/images/chairmain.jpg"
              alt="Chairman"
            />
            <p className="p-4 text-gray-700 text-lg font-semibold text-center">
              Mr. Ruwan Buddhika
            </p>
          </div>

     
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800 text-justify leading-relaxed">
              Wijaya Products (Pvt) Ltd was established in the year 1989 at Dodangoda, Kaluthara district with the help of one employee. Today it has become a renowned organization with more than 1240 employees. I am proud to mention here that our products are now popular in both local and foreign markets.  
              <br /><br />
              The secret behind our success is the dedication and commitment of the board of directors, management, and employees at all levels, to produce and market the highest quality products while considering customer feedback.  
              <br /><br />
              We have been working on welfare and educational activities for children to build their skills and values. We are also engaged in social services and religious initiatives to uplift living standards. We hope to continue making valuable contributions to society in the future.  
              <br /><br />
              Finally, it is my pleasure to witness "Wijaya Products" becoming a leading brand recognized all over the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
