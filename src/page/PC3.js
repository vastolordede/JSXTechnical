import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/artboard_3_b5ccc140878a433db58322a5adeb8b3c_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/PC-GVN-x-MSI-Dragon-ACE-(Intel-i9-14900K/-VGA-RTX-4080-Super)"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)</strong></p>
                    <p className="price"></p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel Core i9 14900K / Turbo up to 6.0GHz / 24 Nhân 32 Luồng / 36MB / LGA 1700<br></br>
                        <strong>RAM:</strong>Corsair Dominator Platinum 64GB (2x32GB) RGB 6000 DDR5<br></br>
                        <strong>VGA:</strong>MSI GeForce RTX 4080 SUPER 16G GAMING X SLIM<br></br>
                        <strong>Mainboard:</strong>MSI MEG Z790 ACE DDR5
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;