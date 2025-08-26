export function Description({ description }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Description</h3>
      <div className="prose prose-red max-w-none">
        <p className="text-gray-600 leading-relaxed">
          {description || 'No description available for this product.'}
        </p>
      </div>
    </div>
  );
}