import { FiX, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const CartSidebar = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart, loading }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleQuantityUpdate = async (productId, newQuantity) => {
    try {
      await updateQuantity(productId, newQuantity);
    } catch (err) {
      // Error is handled in the context
      console.error('Failed to update quantity:', err);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      await removeFromCart(productId);
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
    
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <FiShoppingBag className="text-red-600 text-xl" />
                  <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
                    {cartItems.length} items
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiX className="text-gray-600 text-lg" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                  </div>
                ) : cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <FiShoppingBag className="text-4xl mb-4" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                        <img 
                          src={item.image || 'https://via.placeholder.com/80x80?text=Product'} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-red-600 font-medium">LKR {item.price.toLocaleString()}</p>
                          <div className="flex items-center mt-2">
                            <button 
                              onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1 || loading}
                              className="p-1 rounded-md border border-gray-300 disabled:opacity-50"
                            >
                              <FiMinus className="text-sm" />
                            </button>
                            <span className="mx-2 w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                              disabled={item.quantity >= (item.max_quantity || 99) || loading}
                              className="p-1 rounded-md border border-gray-300 disabled:opacity-50"
                            >
                              <FiPlus className="text-sm" />
                            </button>
                          </div>
                          {item.max_quantity && (
                            <p className="text-xs text-gray-500 mt-1">
                              Max: {item.max_quantity}
                            </p>
                          )}
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          disabled={loading}
                          className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
                        >
                          <FiX className="text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cartItems.length > 0 && !loading && (
                <div className="border-t border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">LKR {calculateTotal().toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;