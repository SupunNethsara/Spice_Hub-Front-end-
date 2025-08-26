import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api = axios.create({
        baseURL: 'http://localhost:8000/api',
    });

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    const fetchCartItems = async () => {
        try {
            setLoading(true);
            const response = await api.get('/cart');
            setCartItems(response.data.cartItems);
        } catch (err) {
            setError('Failed to fetch cart items');
            console.error('Error fetching cart:', err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchCartItems();
        }
    }, []);

    const addToCart = async (product) => {
        try {
            console.log('Product prop received:', product);
            console.log('Product ID:', product?.id);
            console.log('Product name:', product?.product_name);
            setLoading(true);
            await api.post('/cart/add', {
                product_id: product.id,
                quantity: 1
            });
            await fetchCartItems();
        } catch (err) {
            if (err.response?.status === 422) {
                setError(err.response.data.message);
            } else {
                setError('Failed to add item to cart');
            }
            console.error('Error adding to cart:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (productId, newQuantity) => {
        try {
            setLoading(true);
            await api.put(`/cart/update/${productId}`, {
                quantity: newQuantity
            });

            // Refresh cart after update
            await fetchCartItems();
        } catch (err) {
            if (err.response?.status === 422) {
                setError(err.response.data.message);
            } else {
                setError('Failed to update quantity');
            }
            console.error('Error updating quantity:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (productId) => {
        try {
            setLoading(true);
            await api.delete(`/cart/remove/${productId}`);

            // Refresh cart after removal
            await fetchCartItems();
        } catch (err) {
            setError('Failed to remove item from cart');
            console.error('Error removing from cart:', err);
        } finally {
            setLoading(false);
        }
    };

    const clearCart = async () => {
        try {
            setLoading(true);
            await api.delete('/cart/clear');

            // Clear local state
            setCartItems([]);
        } catch (err) {
            setError('Failed to clear cart');
            console.error('Error clearing cart:', err);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        cartItems,
        loading,
        error,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        refreshCart: fetchCartItems
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};