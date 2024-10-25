import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/gr701_-_8_cb365132fb6e4bc8a0e87e8811ef585a_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/PC-GVN-x-ASUS-Advanced-Ai-(Intel-Core-Ultra-9-285K/-VGA-RTX-4090)"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)</strong></p>
                    <p className="price">143.630.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel Core Ultra 9 285K / Turbo up to 5.7GHz / 24 Nhân 24 Luồng / 36MB / LGA 1851<br></br>
                        <strong>RAM:</strong>Corsair Dominator Platinum 64GB (2x32GB) RGB 6000 DDR5<br></br>
                        <strong>VGA:</strong>ASUS ROG Strix GeForce RTX 4090 24GB<br></br>
                        <strong>Mainboard:</strong>ASUS ROG MAXIMUS Z890 EXTREME (DDR5)
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;