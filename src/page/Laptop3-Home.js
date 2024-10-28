import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/ava_d2da11ba2af941a8972ea4d4ddaf8159_grande.webp';

function Laptop() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text custom-font" to="/">Home</Link></strong>/
                <strong><Link className="return-text custom-font" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text custom-font"></Link>Laptop gaming ASUS ROG Strix SCAR 16 G634JYR RA132W
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/Laptop-gaming-ASUS-ROG-Strix-SCAR-16-G634JYR-RA132W"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product custom-font"><strong>Laptop gaming ASUS ROG Strix SCAR 16 G634JYR RA132W</strong></p>
                    <p className="price custom-font">119.990.000₫</p>
                    <button className="font addcart addcart-button custom-font buy-button-product">Add To cart</button>
                    <div className="text-description custom-font">
                        <strong>Kích Thước Màn Hình:</strong><br></br>
                        <strong>Tấm Nền:</strong><br></br>
                        <strong>Loại Độ Phân Giải:</strong><br></br>
                        <strong>Tần Số Quét:</strong>
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Laptop;