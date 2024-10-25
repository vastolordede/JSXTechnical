import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/luxs_44f7416f99e54134a7820f1168275f5f_1024x1024_756d5d077691485292e2d608fe2c7826_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN AMD R5-5600X/ VGA RTX 3050 (Powered by ASUS)
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/PC-GVN-AMD-R5-5600X/-VGA-RTX-3050-(Powered by ASUS)"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN AMD R5-5600X/ VGA RTX 3050 (Powered by ASUS)</strong></p>
                    <p className="price"></p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>AMD Ryzen 5 5600X / 32MB / 3.7GHz Boost 4.6GHz / 6 nhân 12 luồng<br></br>
                        <strong>RAM:</strong>T-Group T-Force Delta 1x8GB 3600 RGB Black x 2<br></br>
                        <strong>VGA:</strong>ASUS Dual GeForce RTX 3050 6GB GDDR6<br></br>
                        <strong>Mainboard:</strong>ASUS PRIME B550M-A (WI-FI) II (Socket AM4)
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;