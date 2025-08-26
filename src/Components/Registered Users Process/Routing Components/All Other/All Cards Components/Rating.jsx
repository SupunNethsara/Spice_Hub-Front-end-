import { BsStarFill } from 'react-icons/bs';

export function Rating() {
  return (
    <div className="flex items-center mt-4">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <BsStarFill key={i} className="text-yellow-400 mr-1" />
        ))}
      </div>
      <span className="text-sm text-gray-500 ml-2">(5.0) · 345 reviews</span>
    </div>
  );
}