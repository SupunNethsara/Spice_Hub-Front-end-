import { BsArrowLeft } from 'react-icons/bs';

export function BackButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-6 flex items-center text-gray-600 hover:text-red-600 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm"
    >
      <BsArrowLeft className="mr-2" />
      Back to products
    </button>
  );
}