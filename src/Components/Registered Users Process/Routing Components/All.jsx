import React from 'react';
import { BsFire, BsStarFill, BsTruck } from 'react-icons/bs';
import { FiHeart, FiChevronDown, FiFilter } from 'react-icons/fi';

function AllItems() {
  return (
    <div>
      <main className="container mx-auto px-4 py-6">

       <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Hot Spice Deals!</h2>
          <p className="mb-4">Up to 50% off on premium spices - Limited time offer</p>
          <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
            Shop Now
          </button>
        </div>

    <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <button className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-50">
              <FiFilter className="mr-2" /> Filter
            </button>
            <button className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-lg text-gray-700 hover:bg-gray-50">
              Sort By <FiChevronDown className="ml-2" />
            </button>
          </div>
          <div className="text-gray-500">
            Showing X products
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(1)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="relative">
                <img
                  src="https://via.placeholder.com/200x200?text=Product"
                  alt="Product"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  HOT
                </div>
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100">
                  <FiHeart className="text-gray-600" />
                </button>
              </div>

              <div className="p-3">
                <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">
                  Sample Product Name
                </h3>

                <div className="flex items-center mb-1">
                  <span className="text-red-600 font-bold text-lg">$12.99</span>
                  <span className="ml-2 text-gray-500 text-sm line-through">$15.99</span>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <BsStarFill className="text-yellow-400 mr-1" />
                  <span className="mr-2">4.7</span>
                  <span>Sold 1243</span>
                </div>

                <div className="flex items-center text-xs text-green-600">
                  <BsTruck className="mr-1" />
                  Free Shipping
                </div>
                <button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-1 rounded-lg text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AllItems;
