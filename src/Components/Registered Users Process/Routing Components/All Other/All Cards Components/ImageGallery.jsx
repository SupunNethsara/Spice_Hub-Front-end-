import { useState } from "react";

export function ImageGallery({ images, productName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (images.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="relative">
        <img
          className="w-full h-auto rounded-xl object-cover aspect-square"
          src={images[selectedImage]}
          alt={productName}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/600x600?text=Product';
          }}
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
          {images.map((url, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-20 h-20 rounded-lg cursor-pointer overflow-hidden border-2 ${selectedImage === i ? 'border-red-500' : 'border-gray-200'}`}
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={url}
                alt={`${productName} thumbnail ${i}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/80x80?text=Thumbnail';
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}