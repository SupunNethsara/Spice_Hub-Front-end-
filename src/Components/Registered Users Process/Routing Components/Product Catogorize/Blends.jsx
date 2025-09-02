import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiHeart, FiFilter, FiChevronDown } from 'react-icons/fi';
import { BsStarFill, BsTruck, BsFire } from 'react-icons/bs';
import { motion } from 'framer-motion';
import AllCardDetails from '../All Other/AllCardsdetails';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Blends() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getOrder')
      .then(res => {
        const spicesProducts = res.data.filter(product => 
          product.category === 'Blends (මිශ්‍රණ)'
        );
        setProducts(spicesProducts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  
   const handleOverviewClick = (id) => {
    axios.get(`http://localhost:8000/api/orderProduct/${id}`)
      .then(res => {
        setSelectedProduct(res.data.product);
      });
  };

  const handleBackClick = () => setSelectedProduct(null);

  const getFirstImage = (product) => {
    try {
      const images = JSON.parse(product.Product_image);
      return images.length > 0 ? `http://localhost:8000/storage/${images[0]}` : null;
    } catch {
      return null;
    }
  };

  const sortProducts = (option) => {
    let sorted = [...products];
    switch (option) {
      case 'price-low':
        sorted.sort((a, b) => a.Product_price - b.Product_price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.Product_price - a.Product_price);
        break;
      case 'popular':
        sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      default:
        break;
    }
    return sorted;
  };

  return (
    <div className="container mx-auto px-4 ">
      {selectedProduct ? (
        <AllCardDetails product={selectedProduct} onBackClick={handleBackClick} />
      ) : (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 p-8 text-white mb-10"
          >
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Discover Premium Spices</h2>
              <p className="text-lg mb-6 opacity-90">Up to 50% off on our artisan spice blends - Limited time offer</p>
              <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                Shop the Collection
              </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10 z-0"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="text-gray-500 text-sm md:text-base">
              Showing {products.length} {products.length === 1 ? 'product' : 'products'}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
              <FiFilter className="mr-2" /> Filter
            </button>

            <div className="relative">
              <button
                className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                Sort By: {sortOption.replace('-', ' ')} <FiChevronDown className={`ml-2 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showSortDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt- w-48 bg-white rounded-xl shadow-lg z-10 overflow-hidden border border-gray-100"
                >
                  {['featured', 'price-low', 'price-high', 'popular'].map((option) => (
                    <button
                      key={option}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${sortOption === option ? 'bg-red-50 text-red-600' : 'text-gray-700'}`}
                      onClick={() => {
                        setSortOption(option);
                        setShowSortDropdown(false);
                      }}
                    >
                      {option.replace('-', ' ')}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              Array(8).fill().map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Skeleton height={200} className="w-full" />
                  <div className="p-4">
                    <Skeleton count={2} />
                    <Skeleton width={100} />
                  </div>
                </div>
              ))
            ) : (
              sortProducts(sortOption).map(product => {
                const imageUrl = getFirstImage(product);
                const originalPrice = parseFloat(product.Product_price) * 1.2;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl mt-4 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={product.product_name}
                          className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/300x300?text=Product';
                          }}
                        />
                      ) : (
                        <div className="w-full h-60 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">No Image</span>
                        </div>
                      )}

                      <div className="absolute top-3 left-3">
                        <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                          <BsFire className="mr-1" /> HOT
                        </div>
                      </div>

                      <button
                        className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <FiHeart className="text-gray-600 hover:text-red-500 transition-colors" />
                      </button>
                    </div>

                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 hover:text-red-600 transition-colors">
                        {product.product_name}
                      </h3>

                      <div className="flex items-center mb-1">
                        <span className="text-red-600 font-bold text-lg">Rs. {product.Product_price}</span>
                        {originalPrice && (
                          <span className="ml-2 text-gray-500 text-sm line-through">Rs. {originalPrice.toFixed(2)}</span>
                        )}
                      </div>

                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <BsStarFill className="text-yellow-400 mr-1" />
                        <span className="mr-2">4.7</span>
                        <span>• {product.stock || 0} sold</span>
                      </div>

                      <button
                        onClick={() => handleOverviewClick(product.id)}
                        className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-2 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow hover:shadow-lg"
                      >
                        Quick View
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      )}
      {!loading && products.length > 0 && (
        <div className="mt-10 text-center">
          <button className="bg-white border border-gray-200 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Blends;