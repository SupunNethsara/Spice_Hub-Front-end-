import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserDetailsForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    province: '',
    district: '',
    city: '',
    address: '',
    postal_code: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

useEffect(() => {
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/user/details', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('User details fetched:', response.data);
      setFormData(prev => ({
        ...prev,
        province: response.data.province || '',
        district: response.data.district || '',
        city: response.data.city || '',
        address: response.data.address || '',
        postal_code: response.data.postal_code || '',
        phone: response.data.phone || ''
      }));
    } catch (err) {
      console.error('Failed to fetch user details:', err);
    }
  };

  fetchUserDetails();
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.put(
        'http://localhost:8000/api/user/updateDetails',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }
      );
      navigate('/dashbaord');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save details. Please try again.');
      console.error('Error saving details:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-red-600 to-red-700 p-8 text-white">
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-full bg-transparent border-8 border-white  bg-opacity-10 flex items-center justify-center relative">
                  <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 20C3 16.6863 5.68629 14 9 14H15C18.3137 14 21 16.6863 21 20V21H3V20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6C16 7.65685 14.6569 9 13 9C11.3431 9 10 7.65685 10 6C10 4.34315 11.3431 3 13 3C14.6569 3 16 4.34315 16 6Z" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-1">Complete Your Profile</h2>
                <p className="text-red-100 text-sm text-center">
                  Fill in your details to get the most out of SpiceHub
                </p>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-white bg-opacity-30"></div>

                  <div className="flex items-center mb-8 relative">
                    <div className="w-9 h-9 rounded-full bg-white bg-opacity-100 flex items-center justify-center mr-4 z-10">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white opacity-90">STEP 1</span>
                      <p className="text-white font-medium">Basic Information</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-8 relative">
                    <div className="w-9 h-9 rounded-full bg-white bg-opacity-100 flex items-center justify-center mr-4 z-10 ring-2 ring-white ring-offset-2 ring-offset-red-600">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white opacity-90">STEP 2</span>
                      <p className="text-white font-medium">Shipping Details</p>
                    </div>
                  </div>

                  <div className="flex items-center relative">
                    <div className="w-9 h-9 rounded-full bg-white bg-opacity-100 flex items-center justify-center mr-4 z-10 ring-2 ring-white ring-offset-2 ring-offset-red-600">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white opacity-70">STEP 3</span>
                      <p className="text-red-200">Preferences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Shipping Information</h3>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                      Province
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                      District
                    </label>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postal_code"
                      name="postal_code"
                      value={formData.postal_code}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3 rounded-lg text-white font-medium transition-colors ${isLoading
                        ? 'bg-red-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700'
                      }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </span>
                    ) : 'Save Details'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsForm;