import React, { useState } from 'react'

import { XMarkIcon } from '@heroicons/react/24/outline';
function LogoutModal({ onClose , onLogout}) {

      const [isLoading, setIsLoading] = useState(false);


  return (
  <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="fixed inset-0 bg-black/30 transition-opacity" onClick={onClose} />
        
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100"
          >
            <XMarkIcon className="h-5 w-5 text-gray-500" />
          </button>
          
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">
              Confirm Logout
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Are you sure you want to sign out of your account?
            </p>
         
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={onLogout}
                disabled={isLoading}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                  isLoading ? 'bg-red-400' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isLoading ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal