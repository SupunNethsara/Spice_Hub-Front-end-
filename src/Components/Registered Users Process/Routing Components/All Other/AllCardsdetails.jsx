import { useState } from "react";
import { ActionButtons } from "./All Cards Components/ActionButtons";
import { BackButton } from "./All Cards Components/BackButton";
import { Description } from "./All Cards Components/Descriptions";
import { Features } from "./All Cards Components/Features";
import { ImageGallery } from "./All Cards Components/ImageGallery";
import { Price } from "./All Cards Components/Price";
import { ProductDetailsInfo } from "./All Cards Components/ProductDetailsInfo";
import { ProductHeader } from "./All Cards Components/ProductHeader";
import { Rating } from "./All Cards Components/Rating";
import { useCart } from "../../../Use Context/CartContext";
import CartSidebar from "../../CartSidebar";

export default function AllCardDetails({ product, onBackClick }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const [addToCartError, setAddToCartError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      setAddToCartError('');
      await addToCart({
        id: product.id,
        name: product.product_name,
        price: parseFloat(product.Product_price),
        image: getFirstImageUrl(),
        quantity: 1
      });
      setIsCartOpen(true);
    } catch (err) {
      if (err.response?.data?.message) {
        setAddToCartError(err.response.data.message);
      } else {
        setAddToCartError('Failed to add to cart. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const allImageUrls = getAllImageUrls();
  const price = parseFloat(product.Product_price);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton onClick={onBackClick} />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <ImageGallery
              images={allImageUrls} 
              productName={product.product_name} 
            />
            <ProductDetailsInfo product={product} />
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <ProductHeader product={product} />
              <Rating />
              <Price price={price} />
              
              <ActionButtons
                onAddToCart={handleAddToCart}
                loading={loading}
                stock={product.stock}
                addToCartError={addToCartError}
              />
              
              <Features />
              <Description description={product.Product_description} />
            </div>
          </div>
        </div>
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        loading={loading}
      />
    </div>
  );
}