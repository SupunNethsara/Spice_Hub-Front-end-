import React ,{useState} from 'react';
import { BsStarFill, BsTruck, BsArrowLeft } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { XMarkIcon } from '@heroicons/react/24/solid';
import AuthModal from './AuthModal';

export default function ProductDetails({ product, onBackClick }) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getFirstImageUrl = () => {
    try {
      if (!product.Product_image) return null;
      const images = JSON.parse(product.Product_image);
      return images.length > 0 ? `http://localhost:8000/storage/${images[0]}` : null;
    } catch (e) {
      console.error("Error parsing product image:", e);
      return null;
    }
  };
  
  const getAllImageUrls = () => {
    try {
      if (!product.Product_image) return [];
      const images = JSON.parse(product.Product_image);
      return images.map(img => `http://localhost:8000/storage/${img}`);
    } catch (e) {
      console.error("Error parsing product images:", e);
      return [];
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    // Logic to add to cart for authenticated users
    console.log('Adding to cart:', product);
  };

  const handleLogin = () => {
    setShowAuthModal(false);
    // In a real app, this would redirect to login page
    console.log('Redirect to login');
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setShowAuthModal(false);
    // In a real app, this would redirect to register page
    console.log('Redirect to register');
    setIsAuthenticated(true);
  };

  const mainImageUrl = getFirstImageUrl();
  const allImageUrls = getAllImageUrls();
  const originalPrice = parseFloat(product.Product_price) * 1.2;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <AuthModal 
        show={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginClick={handleLogin}
        onRegisterClick={handleRegister}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Gallery */}
          <div className="lg:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              {mainImageUrl ? (
                <img
                  className="w-full h-auto rounded-lg object-cover aspect-square"
                  src={mainImageUrl}
                  alt={product.product_name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x600?text=Product';
                  }}
                />
              ) : (
                <div className="w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              
              <div className="flex gap-2 mt-4">
                {allImageUrls.length > 0 ? (
                  allImageUrls.slice(0, 4).map((url, i) => (
                    <div key={i} className="w-1/4 h-20">
                      <img
                        src={url}
                        alt={`${product.product_name} thumbnail ${i}`}
                        className="w-full h-full object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-red-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/150x150?text=Thumbnail';
                        }}
                      />
                    </div>
                  ))
                ) : (
                  [1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-1/4 h-20 bg-gray-100 rounded-md"></div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <button 
                onClick={onBackClick}
                className="mb-4 flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <BsArrowLeft className="mr-1" />
                Back to products
              </button>
              
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {product.product_name}
                  </h1>
                  <p className="text-gray-500">{product.product_sname}</p>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <FiHeart className="text-gray-600 text-xl" />
                </button>
              </div>
              
              <div className="flex items-center mt-2">
                <div className="flex">
                  <BsStarFill className="text-yellow-400 mr-1" />
                  <BsStarFill className="text-yellow-400 mr-1" />
                  <BsStarFill className="text-yellow-400 mr-1" />
                  <BsStarFill className="text-yellow-400 mr-1" />
                  <BsStarFill className="text-yellow-400 mr-1" />
                </div>
                <span className="text-sm text-gray-500 ml-2">(5.0) · 345 reviews</span>
              </div>

              <div className="mt-4">
                <p className="text-2xl font-bold text-red-600">
                  LKR {product.Product_price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 line-through">
                  LKR {originalPrice.toFixed(2).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center text-sm text-green-600 mt-2">
                <BsTruck className="mr-1" />
                Free Shipping
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">{product.weight} {product.unit_of_measurement}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiry</p>
                  <p className="font-medium">{new Date(product.expiry_date).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800">Description</h3>
                <p className="mt-2 text-gray-600 whitespace-pre-line">
                  {product.Product_description || 'No description available'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}