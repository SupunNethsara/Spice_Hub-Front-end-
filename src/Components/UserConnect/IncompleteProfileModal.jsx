import { Link } from 'react-router-dom';

const IncompleteProfileModal = ({ onClose }) => {
  const handleContinue = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold text-red-600 mb-4">Profile Incomplete</h3>
        <p className="mb-4">First you need to fill your account details to continue using SpiceHub.</p>
        <div className="flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Later
          </button>
          <Link to='userdetails' onClick={handleContinue}>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Complete Profile Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IncompleteProfileModal;