import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/giga_gs27fa_gearvn_0adabc0d220849fb9373808fdfe829ee_grande.webp';

function Monitor() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Monitor">Monitor</Link></strong>/
                <Link className="return-text"></Link>Màn hình GIGABYTE GS27FA 27" IPS 180Hz chuyên game
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Monitor/Màn-hình-GIGABYTE-GS27FA-27-IPS-180Hz-chuyên-game"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Màn hình GIGABYTE GS27FA 27" IPS 180Hz chuyên game</strong></p>
                    <p className="price">4.990.000₫</p>
                    <button className="font addcart addcart-button buy-button-product">Add To cart</button>
                    <div className="text-description">
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
export default Monitor;