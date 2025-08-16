import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../Use Context/AuthContext';


export default function AuthModal({ show, onClose }) {
  const { setIsloginmodal, setIsregistermodal } = useContext(AuthContext);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication Required</h3>
          <p className="text-gray-600 mb-6">
            You need to login or register to add items to your cart.
          </p>
          
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => {
                onClose();
                setIsloginmodal(true);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md text-sm font-medium"
            >
              Login
            </button>
            <button
              onClick={() => {
                onClose();
                setIsregistermodal(true);
              }}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm font-medium"
            >
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}