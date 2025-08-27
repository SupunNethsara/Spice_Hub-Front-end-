import { useNavigate } from "react-router-dom";

export function ActionButtons({ onAddToCart, loading, stock, addToCartError, product }) {
const navigate = useNavigate();
     const handleBuyNow = () => {
        navigate('buynow', { state: { product } });
    };


  return (
    <div className="mt-8 space-y-4">
      <button
        onClick={onAddToCart}
        disabled={loading || stock === 0}
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
        onClick={handleBuyNow}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-xl text-base font-semibold transition-colors"
      >
        Buy Now
      </button>



      {addToCartError && (
        <p className="text-red-600 text-sm mt-2 text-center">{addToCartError}</p>
      )}
      {stock === 0 && (
        <p className="text-red-600 text-sm mt-2 text-center">Out of stock</p>
      )}
    </div>
  );
}
