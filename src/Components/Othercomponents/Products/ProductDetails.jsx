import React from 'react';
import { StarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function ProductDetails({ product, onBackClick }) {
    const getFirstImageUrl = () => {
        try {
            if (!product.Product_image) return null;
            const images = JSON.parse(product.Product_image);
            return images.length > 0 ? `http://localhost:8000/storage/${images[0]}` : null;
        } catch (e) {
            console.error("Error parsing product image:", e);
            return null;
        }
    };
    const getAllImageUrls = () => {
        try {
            if (!product.Product_image) return [];
            const images = JSON.parse(product.Product_image);
            return images.map(img => `http://localhost:8000/storage/${img}`);
        } catch (e) {
            console.error("Error parsing product images:", e);
            return [];
        }
    };

    const mainImageUrl = getFirstImageUrl();
    const allImageUrls = getAllImageUrls();

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            {product && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                {mainImageUrl ? (
                                    <img
                                        className="w-full h-auto rounded-xl object-cover aspect-square"
                                        src={mainImageUrl}
                                        alt={product.product_name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/path/to/placeholder-image.jpg';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
                                        <span className="text-gray-500">No Image Available</span>
                                    </div>
                                )}
                                
                                <div className="flex gap-2 mt-4">
                                    {allImageUrls.length > 0 ? (
                                        allImageUrls.slice(0, 4).map((url, i) => (
                                            <div key={i} className="w-1/4 h-20">
                                                <img
                                                    src={url}
                                                    alt={`${product.product_name} thumbnail ${i}`}
                                                    className="w-full h-full object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-primary-500"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = '/path/to/placeholder-thumbnail.jpg';
                                                    }}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        [1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-1/4 h-20 bg-gray-100 rounded-lg"></div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                                <div>
                                    <button 
                                        onClick={onBackClick}
                                        className="mb-6 text-gray-500 hover:text-gray-700 transition-colors"
                                    >
                                        ← Back to products
                                    </button>
                                    
                                    <h1 className="text-3xl font-bold text-gray-900">
                                        {product.product_name}
                                        <span className="text-gray-500 ml-2">({product.product_sname})</span>
                                    </h1>
                                    
                                    <div className="flex items-center mt-3">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500 ml-2">(5.0) · 345 reviews</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-3xl font-extrabold text-gray-900">
                                        LKR {product.Product_price.toLocaleString()}
                                    </p>
                                    {product.discount && (
                                        <p className="text-sm text-gray-500 line-through mt-1">
                                            LKR {(product.Product_price / (1 - product.discount/100)).toLocaleString()}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Category</p>
                                        <p className="font-medium">{product.category}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Weight</p>
                                        <p className="font-medium">{product.weight} {product.unit_of_measurement}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Availability</p>
                                        <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Expiry</p>
                                        <p className="font-medium">{new Date(product.expiry_date).toLocaleDateString()}</p>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                        <HeartIcon className="h-5 w-5 text-gray-700" />
                                        <span>Add to favorites</span>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                        <ShoppingCartIcon className="h-5 w-5" />
                                        <span>Add to cart</span>
                                    </button>
                                </div>

                             
                                <div className="mt-10">
                                    <h3 className="text-lg font-medium text-gray-900">Description</h3>
                                    <p className="mt-4 text-gray-600 whitespace-pre-line">
                                        {product.Product_description || 'No description available'}
                                    </p>
                                </div>

                                <div className="mt-10 border-t border-gray-200 pt-6">
                                    <div className="flex space-x-8">
                                        <button className="text-sm font-medium text-gray-900 border-b-2 border-indigo-600 pb-2">
                                            Specifications
                                        </button>
                                        <button className="text-sm font-medium text-gray-500 hover:text-gray-700 pb-2">
                                            Reviews
                                        </button>
                                        <button className="text-sm font-medium text-gray-500 hover:text-gray-700 pb-2">
                                            Shipping
                                        </button>
                                    </div>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}