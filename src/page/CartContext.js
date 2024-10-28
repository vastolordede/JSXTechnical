import React, { createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ cart, setCart] = useState([]);
    //thêm vào giỏ hàng
    const addToCart = (product) => {
        // Nếu sản phẩm không có thuộc tính price, đặt giá trị mặc định là 0
        if (!product.price) product.price = 0;
    
        setCart((prevCart) => {
            const Find = prevCart.find(item => item.id === product.id);
    
            if (Find) {
                // Nếu sản phẩm đã có trong giỏ, tăng số lượng
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Nếu sản phẩm chưa có trong giỏ, thêm sản phẩm với quantity = 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };
    
    //giảm số lượng
    const DecreaseCart = (productID) => {
        setCart((prevCart) => {
                return prevCart.map(item =>
                    item.id === productID
                    //giảm số lượng
                    ? {...item, quantity: item.quantity -1}
                    :item
                ) 
                //xóa khỏi giỏ hàng
                .filter(item => item.quantity > 0)
        });      
    };

    // xoá sản phẩm khỏi giỏ
    const removeFromCart = (productID) => {
        setCart((prevCart) => prevCart.filter( item => item.id !==productID));
    };
    // xoá tất cả sản phẩm khỏi giỏ
    const removeAllFromCart = (productID) => {
        setCart([]);
    };
    //tính tổng số lượng
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    //tính tổng tiền
    const totalPrice = cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

    const formattedTotalPrice = totalPrice.toLocaleString('vi-VN');

    return(
        <CartContext.Provider value={{ cart, addToCart,DecreaseCart, totalItems, totalPrice, formattedTotalPrice,removeAllFromCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext);