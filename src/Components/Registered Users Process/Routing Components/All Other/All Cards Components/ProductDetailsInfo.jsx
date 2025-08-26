export function ProductDetailsInfo({ product }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Category</span>
          <span className="font-medium">{product.category}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Weight</span>
          <span className="font-medium">{product.weight} {product.unit_of_measurement}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Stock</span>
          <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 mb-1">Expiry Date</span>
          <span className="font-medium">{new Date(product.expiry_date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}