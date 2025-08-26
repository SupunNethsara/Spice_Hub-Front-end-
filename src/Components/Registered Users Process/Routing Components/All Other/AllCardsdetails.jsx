import { useState } from 'react';
import { BsStarFill, BsTruck, BsArrowLeft, BsShieldCheck, BsCreditCard, BsHeart, BsHeartFill } from 'react-icons/bs';
import CartSidebar from '../../CartSidebar';
import { useCart } from '../../../Use Context/CartContext';

export default function AllCardDetails({ product, onBackClick }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const [addToCartError, setAddToCartError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      setAddToCartError('');
      await addToCart({
        id: product.id,
        name: product.product_name,
        price: parseFloat(product.Product_price),
        image: getFirstImageUrl(),
        quantity: 1
      });
      setIsCartOpen(true);
    } catch (err) {
      if (err.response?.data?.message) {
        setAddToCartError(err.response.data.message);
      } else {
        setAddToCartError('Failed to add to cart. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const mainImageUrl = getFirstImageUrl();
  const allImageUrls = getAllImageUrls();
  const originalPrice = parseFloat(product.Product_price) * 1.2;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBackClick}
          className="mb-6 flex items-center text-gray-600 hover:text-red-600 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm"
        >
          <BsArrowLeft className="mr-2" />
          Back to products
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="relative">
                {allImageUrls.length > 0 ? (
                  <img
                    className="w-full h-auto rounded-xl object-cover aspect-square"
                    src={allImageUrls[selectedImage]}
                    alt={product.product_name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/600x600?text=Product';
                    }}
                  />
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                  {isFavorite ? (
                    <BsHeartFill className="text-red-500 text-xl" />
                  ) : (
                    <BsHeart className="text-gray-600 text-xl" />
                  )}
                </button>
              </div>

              {allImageUrls.length > 1 && (
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                  {allImageUrls.map((url, i) => (
                    <div
                      key={i}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg cursor-pointer overflow-hidden border-2 ${selectedImage === i ? 'border-red-500' : 'border-gray-200'}`}
                      onClick={() => setSelectedImage(i)}
                    >
                      <img
                        src={url}
                        alt={`${product.product_name} thumbnail ${i}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/80x80?text=Thumbnail';
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Category</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Weight</span>
                  <span className="font-medium">{product.weight} {product.unit_of_measurement}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Stock</span>
                  <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Expiry Date</span>
                  <span className="font-medium">{new Date(product.expiry_date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.product_name}
                </h1>
                <p className="text-gray-600 mt-1">{product.product_sname}</p>
              </div>

              <div className="flex items-center mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">(5.0) · 345 reviews</span>
              </div>

              <div className="mt-6">
                <div className="flex items-end gap-3">
                  <p className="text-3xl font-bold text-red-600">
                    LKR {parseFloat(product.Product_price).toLocaleString()}
                  </p>
                  <p className="text-lg text-gray-500 line-through mb-1">
                    LKR {originalPrice.toLocaleString()}
                  </p>
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
                    20% OFF
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={loading || product.stock === 0}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-4 rounded-xl text-base font-semibold transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding to cart...
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>

                <button
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-xl text-base font-semibold transition-colors"
                >
                  Buy Now
                </button>

                {addToCartError && (
                  <p className="text-red-600 text-sm mt-2 text-center">{addToCartError}</p>
                )}
                {product.stock === 0 && (
                  <p className="text-red-600 text-sm mt-2 text-center">Out of stock</p>
                )}
              </div>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                    <BsTruck className="text-red-600 text-xl" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Free Shipping</h4>
                  <p className="text-sm text-gray-600">On orders over LKR 5,000</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                    <BsShieldCheck className="text-red-600 text-xl" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Secure Payment</h4>
                  <p className="text-sm text-gray-600">Safe & encrypted</p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Easy Returns</h4>
                  <p className="text-sm text-gray-600">30-day policy</p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Description</h3>
                <div className="prose prose-red max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {product.Product_description || 'No description available for this product.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        loading={loading}
      />
    </div>
  );
}