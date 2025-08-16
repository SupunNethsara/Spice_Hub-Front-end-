import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import { FiHeart } from 'react-icons/fi';
import { BsStarFill, BsTruck } from 'react-icons/bs';

export default function ProductCard() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/getproducts')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products:", error);
            });
    }, []);

    const handleOverviewClick = (productId) => {
        axios.get(`http://localhost:8000/api/products/${productId}`)
            .then(response => {
                setSelectedProduct(response.data.product);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    };

    const handleBackClick = () => {
        setSelectedProduct(null);
    };

    const getFirstImageUrl = (product) => {
        try {
            if (!product.Product_image) return null;
            const images = JSON.parse(product.Product_image);
            return images.length > 0 ? `http://localhost:8000/storage/${images[0]}` : null;
        } catch (e) {
            console.error("Error parsing product image:", e);
            return null;
        }
    };

    return (
        <div>
            {selectedProduct ? (
                <ProductDetails product={selectedProduct} onBackClick={handleBackClick} />
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map(product => {
                        const imageUrl = getFirstImageUrl(product);
                        const originalPrice = parseFloat(product.Product_price) * 1.2; // Adding 20% to show discount
                        
                        return (
                            <div key={product.id} className="rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm">
                                <div className="relative">
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt={product.product_name}
                                            className="w-full h-40 object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/200x200?text=Product';
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500">No Image</span>
                                        </div>
                                    )}
                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                        HOT
                                    </div>
                                    <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100">
                                        <FiHeart className="text-gray-600" />
                                    </button>
                                </div>

                                <div className="p-3">
                                    <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">
                                        {product.product_name}
                                    </h3>

                                    <div className="flex items-center mb-1">
                                        <span className="text-red-600 font-bold text-lg">${product.Product_price}</span>
                                        <span className="ml-2 text-gray-500 text-sm line-through">${originalPrice.toFixed(2)}</span>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <BsStarFill className="text-yellow-400 mr-1" />
                                        <span className="mr-2">4.7</span>
                                        <span>Sold 1243</span>
                                    </div>

                                    <div className="flex items-center text-xs text-green-600">
                                        <BsTruck className="mr-1" />
                                        Free Shipping
                                    </div>
                                    
                                    <button 
                                        onClick={() => handleOverviewClick(product.id)}
                                        className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-1 rounded-lg text-sm font-medium"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}