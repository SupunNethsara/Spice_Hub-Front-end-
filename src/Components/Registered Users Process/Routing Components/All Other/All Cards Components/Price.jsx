export function Price({ price }) {
  const originalPrice = price * 1.2;

  return (
    <div className="mt-6">
      <div className="flex items-end gap-3">
        <p className="text-3xl font-bold text-red-600">
          LKR {price.toLocaleString()}
        </p>
        <p className="text-lg text-gray-500 line-through mb-1">
          LKR {originalPrice.toLocaleString()}
        </p>
        <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">
          20% OFF
        </span>
      </div>
    </div>
  );
}
