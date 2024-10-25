import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/3_e68704a03a634e27899e3b616e94b095_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i9-14900K/-VGA-RTX-4090)"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)</strong></p>
                    <p className="price">142.620.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel Core i9 14900K / 4.4GHz Turbo 6.0GHz / 24 Nhân 32 Luồng / 36MB / LGA 1700<br></br>
                        <strong>RAM:</strong>Corsair Dominator Titanium Black 32GB (2x16GB) RGB 6000 DDR5<br></br>
                        <strong>VGA:</strong>ASUS ROG Strix GeForce RTX 4090 BTF OC Edition 24GB<br></br>
                        <strong>Mainboard:</strong>ASUS ROG MAXIMUS Z790 HERO BTF DDR5
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;