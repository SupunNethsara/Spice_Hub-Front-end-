import { useEffect , useState } from 'react';
import { BsTruck, BsShieldCheck } from 'react-icons/bs';
import axios from 'axios';
export function Features() {

  const user = JSON.parse(localStorage.getItem('user'));
  const [shippingPayment, setShippingPayment] = useState(null);
useEffect(() => {
  const handleshippayment = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/user-shipping-payment', {
        headers: {
          Authorization: `Bearer ${user.token}`,
          userId: user.id
        }
      });
      setShippingPayment(res.data);
      console.log("Shipping Payment:", res.data);
    } catch (error) {
      console.error("Error fetching shipping payment:", error.response?.data || error.message);
    }
  };

  handleshippayment();
}, [user.id, user.token]);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
          <BsTruck className="text-red-600 text-xl" />
        </div>
        <h4 className="font-semibold text-gray-800 mb-1">Free Shipping</h4>
        <p className="text-sm text-gray-600">
          On orders over {shippingPayment ? `LKR ${shippingPayment.data.shipping_payment}` : '...'}
        </p>
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
  );
}
