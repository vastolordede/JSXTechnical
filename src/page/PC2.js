import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/pc_gvn_x_gigabyte__ice__-_32_e797aed458a94914b78e491d8c7a5ccb_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)</strong></p>
                    <p className="price">150.740.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel Core i9 14900K / Turbo up to 6.0GHz / 24 Nhân 32 Luồng / 36MB / LGA 1700<br></br>
                        <strong>RAM:</strong>G.Skill Trident Z5 Royal RGB 64GB (2x32GB) 6400 DDR5 Silver<br></br>
                        <strong>VGA:</strong>GIGABYTE AORUS GeForce RTX 4080 SUPER XTREME ICE 16G<br></br>
                        <strong>Mainboard:</strong>GIGABYTE Z790 AORUS XTREME X ICE
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;