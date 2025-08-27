import axios from "axios";
import {useEffect, useState } from "react";


const BuyNowPage = () => {
    const [userdetails, setUserdetails] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:8000/api/user-shipping-address",
                    {
                        userId: user.id
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                console.log("User details response:", response.data);
                setUserdetails(response.data.user_details || []);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        if (user && user.id) {
            fetchUserDetails();
        }
    }, [user.id, user.token]);

    return (
        <div className="h-auto flex items-center justify-center -8">
            <div className="w-full container bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-full p-6 md:p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
                        <p className="text-gray-600 mt-2">Complete your purchase securely</p>
                    </div>

                    <div className="flex justify-between items-center mb-10 relative">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#e8000c] text-white flex items-center justify-center font-bold">1</div>
                            <span className="text-sm font-medium mt-2 text-[#e8000c]">Cart</span>
                        </div>
                        <div className="h-1 bg-[#e8000c] flex-1 mx-2"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#e8000c] text-white flex items-center justify-center font-bold">2</div>
                            <span className="text-sm font-medium mt-2 text-[#e8000c]">Details</span>
                        </div>
                        <div className="h-1 bg-gray-300 flex-1 mx-2"></div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">3</div>
                            <span className="text-sm font-medium mt-2 text-gray-500">Payment</span>
                        </div>
                    </div>
                    {userdetails.length > 0 ? (
                        userdetails.map((user, index) => (
                            <div key={index} className="bg-gray-50 p-5 rounded-xl mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-lg font-semibold text-gray-800">Shipping & Billing</h2>
                                    <button className="text-[#e8000c] text-sm font-medium flex items-center">
                                        <i className="fas fa-edit mr-1 text-xs"></i> Change
                                    </button>
                                </div>
                                <p className="text-gray-800 font-medium">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.phone}</p>
                                <p className="text-sm text-gray-600 mt-1">{user.address}</p>
                            </div>
                        ))
                    ) : (
                        <p>No shipping address found</p>
                    )}


                    <div className="bg-gray-50 p-5 rounded-xl mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Package 1 of 1</h2>

                        <div className="flex justify-between items-center mb-4 p-3 bg-white rounded-lg">
                            <div>
                                <h3 className="font-medium text-gray-800">Delivery Option</h3>
                                <p className="text-sm text-gray-600">Standard • Guaranteed by 29 Aug - Sep</p>
                            </div>
                            <span className="font-semibold text-lg">Rs. 280</span>
                        </div>

                        <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                            <p className="text-xs text-red-700 font-medium flex items-center">
                                <i className="fas fa-store mr-2 text-red-600"></i> Sold by High-Plex LK
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl mb-6">
                        <div className="flex">
                            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                                <i className="fas fa-clock text-gray-400 text-3xl"></i>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-800 text-lg">G-Shock GA110 Analog Watch</h3>
                                <p className="text-sm text-gray-500 mt-1">Sport Watch, Dual Time Display, Water Resistant</p>
                                <div className="flex items-center mt-2">
                                    <span className="bg-[#e8000c] text-white text-xs font-bold px-2 py-1 rounded">77% OFF</span>
                                    <span className="ml-3 text-gray-800 font-semibold text-lg">Rs. 1,599</span>
                                    <span className="ml-3 text-gray-400 text-sm line-through">Rs. 6,999</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200">
                    <div className="sticky top-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">Rs. 1,599</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium">Rs. 280</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-medium">Rs. 0</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-300 pt-4 mb-6">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-lg text-gray-900">Total</span>
                                <span className="font-bold text-2xl text-[#e8000c]">Rs. 1,879</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">VAT included, where applicable</p>
                        </div>

                        <button className="w-full bg-[#e8000c] hover:bg-red-800 text-white font-bold py-4 px-4 rounded-xl flex items-center justify-center transition duration-200 shadow-lg hover:shadow-xl">
                            <i className="fas fa-lock mr-2"></i> Process to Pay - Rs. 1,879
                        </button>

                        <div className="mt-6 flex justify-center space-x-6">
                            <div className="text-center">
                                <i className="fas fa-shield-alt text-2xl text-[#e8000c] mb-1"></i>
                                <p className="text-xs text-gray-600">Secure Payment</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-truck text-2xl text-[#e8000c] mb-1"></i>
                                <p className="text-xs text-gray-600">Free Returns</p>
                            </div>
                            <div className="text-center">
                                <i className="fas fa-headset text-2xl text-[#e8000c] mb-1"></i>
                                <p className="text-xs text-gray-600">24/7 Support</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-300">
                            <p className="text-xs text-gray-500 mb-3">We accept:</p>
                            <div className="flex justify-between">
                                <i className="fab fa-cc-visa text-3xl text-blue-800"></i>
                                <i className="fab fa-cc-mastercard text-3xl text-red-600"></i>
                                <i className="fab fa-cc-amex text-3xl text-blue-600"></i>
                                <i className="fab fa-cc-paypal text-3xl text-blue-600"></i>
                                <i className="fab fa-cc-apple-pay text-3xl text-gray-800"></i>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-300">
                            <div className="flex items-center">
                                <i className="fas fa-headset text-xl text-[#e8000c] mr-3"></i>
                                <div>
                                    <p className="text-sm text-gray-600">Need help? Contact our support</p>
                                    <p className="text-sm font-medium text-gray-900">Danzz - Customer Care</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNowPage;