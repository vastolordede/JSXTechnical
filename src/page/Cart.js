import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const { cart, DecreaseCart, addToCart, totalItems, formattedTotalPrice,removeAllFromCart, removeFromCart } = useCart();

    return (
        <div className="Cart-page">

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <h1 className="Cart-page-title">Cart</h1>
                    <p className="custom-font">Your cart is empty. Start shopping to add items here!</p>
                    <Link to="/"><button className="Cart-page-button">Back</button></Link>
                </div>
            ) : (
                <div>
                    
                    <ul className="cart-items">
                        <div className="cart-buy-remove-box d-flex flex-row">
                        <p className="custom-font total-price">Total: {formattedTotalPrice} đ</p>
                        <p className="custom-font total-item">Total Items: {totalItems}</p>

                       
                            <Link to="/Check-out"><button className="custom-font buy-button-cart">buy</button></Link>
                            <button className="custom-font remove-all" onClick={ () => removeAllFromCart()}>Remove All</button>
                        </div>
                        {cart.map((item, index) => (
                            <li key={`${item.id}-${index}`}>
                                <div className="d-flex flex-row quatity">
                                    <img src={item.img} className="cart-img"></img>
                                    <p className="p-quatity custom-font">
                                        <strong>{item.name} - {parseInt(item.price).toLocaleString('vi-VN')} đ</strong>
                                    </p>
                                    <button className="left-arrow" onClick={() => DecreaseCart(item.id)}><FontAwesomeIcon icon={faChevronLeft} /></button>
                                    <p>{item.quantity}</p>
                                    <button className="right-arrow" onClick={() => addToCart(item)}><FontAwesomeIcon icon={faChevronRight} /></button>
                                    <button className="Cart-page-button1 custom-font" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default Cart;
