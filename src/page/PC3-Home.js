import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/pc_gvn_-_amd_-_a21_-_3_c71ab3cdd9bf45cb947b98f4561300b4_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN AMD R5-8400F/ VGA RX 7600
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/PC-GVN-AMD-R5-8400F/-VGA-RX-7600"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN AMD R5-8400F/ VGA RX 7600</strong></p>
                    <p className="price">24.490.000₫</p>
                    <button className="font addcart addcart-button buy-button-product">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>AMD Ryzen 5 8400F / 4.2GHz Boost 4.7GHz / 6 nhân 12 luồng / 22MB / AM5 (TRAY)<br></br>
                        <strong>RAM:</strong>Kingston Fury Beast RGB 16GB (2x8GB) bus 5600 DDR5 <br></br>
                        <strong>VGA:</strong>ASUS Dual Radeon RX 7600 V2 OC Edition 8GB GDDR6<br></br>
                        <strong>Mainboard:</strong>ASUS TUF GAMING B650M-E WIFI (DDR5)
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;