import { useContext, useState } from 'react';
import { BsStarFill, BsTruck, BsArrowLeft, BsShieldCheck, BsCreditCard } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import CartSidebar from '../../CartSidebar';
import { useCart } from '../../../Use Context/CartContext';

export default function AllCardDetails({ product, onBackClick }) {
  const [selectedTab, setSelectedTab] = useState('shipping');
  const [isCartOpen, setIsCartOpen] = useState(false);
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
    }
  };
  const mainImageUrl = getFirstImageUrl();
  const allImageUrls = getAllImageUrls();
  const originalPrice = parseFloat(product.Product_price) * 1.2;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
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

            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
              <h3 className="text-lg font-medium text-gray-800">Product Details</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">{product.weight} {product.unit_of_measurement}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Stock</p>
                  <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiry</p>
                  <p className="font-medium">{new Date(product.expiry_date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
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
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} className="text-yellow-400 mr-1" />
                  ))}
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

              <div className="mt-6">
                <button
                  onClick={handleAddToCart}
                  disabled={loading || product.stock === 0}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  {loading ? 'Adding to cart...' : 'Add to Cart'}
                </button>
                {addToCartError && (
                  <p className="text-red-600 text-sm mt-2">{addToCartError}</p>
                )}
                {product.stock === 0 && (
                  <p className="text-red-600 text-sm mt-2">Out of stock</p>
                )}
              </div>
              <div className="mt-8 border-t pt-6">
                <div className="flex border-b">
                  <button
                    className={`px-4 py-2 font-medium ${selectedTab === 'shipping' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600'}`}
                    onClick={() => setSelectedTab('shipping')}
                  >
                    <BsTruck className="inline mr-2" />
                    Shipping
                  </button>
                  <button
                    className={`px-4 py-2 font-medium ${selectedTab === 'payment' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600'}`}
                    onClick={() => setSelectedTab('payment')}
                  >
                    <BsCreditCard className="inline mr-2" />
                    Payment
                  </button>
                  <button
                    className={`px-4 py-2 font-medium ${selectedTab === 'returns' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600'}`}
                    onClick={() => setSelectedTab('returns')}
                  >
                    <BsShieldCheck className="inline mr-2" />
                    Returns
                  </button>
                </div>

                <div className="mt-4">
                  {selectedTab === 'shipping' && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Delivery Options</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Free standard shipping (3-5 business days)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Express delivery available (1-2 business days)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Islandwide coverage</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Enter your postal code at checkout to see exact delivery dates</p>
                      </div>
                    </div>
                  )}

                  {selectedTab === 'payment' && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Payment Methods</h4>
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <div className="border rounded-lg p-3 flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                            <BsCreditCard className="text-blue-600" />
                          </div>
                          <span>Credit/Debit Card</span>
                        </div>
                        <div className="border rounded-lg p-3 flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                          </div>
                          <span>Bank Transfer</span>
                        </div>
                        <div className="border rounded-lg p-3 flex items-center">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                          </div>
                          <span>Cash on Delivery</span>
                        </div>
                        <div className="border rounded-lg p-3 flex items-center">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            </svg>
                          </div>
                          <span>Installments</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === 'returns' && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Return Policy</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>30-day return policy for unopened products</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Free return shipping for defective items</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Full refund or exchange options</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Contact our customer service for any return requests</p>
                      </div>
                    </div>
                  )}
                </div>
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