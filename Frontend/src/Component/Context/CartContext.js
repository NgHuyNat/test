import React, { createContext, useState } from "react";

// Tạo context
export const CartContext = createContext();

// Tạo provider
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemWithNumericPrice = {
            ...item,
            price: parseFloat(item.price.replace(/,/g, "")), // Loại bỏ dấu phẩy và chuyển thành số
        };
    
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    
        if (existingItem) {
            setCartItems((prevItems) =>
                prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...itemWithNumericPrice, quantity: 1 }]);
        }
    };
    
    

    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.id !== id)
        );
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            // Nếu số lượng < 1, xóa món ăn khỏi giỏ hàng
            setCartItems((prevItems) =>
                prevItems.filter((cartItem) => cartItem.id !== id)
            );
        } else {
            // Cập nhật số lượng nếu >= 1
            setCartItems((prevItems) =>
                prevItems.map((cartItem) =>
                    cartItem.id === id ? { ...cartItem, quantity } : cartItem
                )
            );
        }
    };
    const getTotalPrice = () => {
        const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        return total;
    };

    const getTotalItems = () => {
        return cartItems.length; // Đếm số lượng món ăn khác nhau
    };

    return (
        <CartContext.Provider value={{ cartItems,setCartItems, addToCart, getTotalItems, updateQuantity, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
