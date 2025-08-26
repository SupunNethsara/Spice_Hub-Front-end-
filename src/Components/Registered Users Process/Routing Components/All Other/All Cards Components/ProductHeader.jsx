export function ProductHeader({ product }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        {product.product_name}
      </h1>
      <p className="text-gray-600 mt-1">{product.product_sname}</p>
    </div>
  );
}