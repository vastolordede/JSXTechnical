import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/-4kp-28inch-ips-4k-150hz-hdr10-usbc-1_a1b9884e45a74248938d6d5f8ef446d5_3b525a832e714ad187a32425edc9cede_grande.jpg';

function Monitor() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Monitor">Monitor</Link></strong>/
                <Link className="return-text"></Link>Màn hình ViewSonic VX2882-4KP 28" IPS 4K 150Hz HDR10 USBC
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Monitor/Màn-hình-ViewSonic-VX2882-4KP-28-IPS-4K-150Hz-HDR10-USBC"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Màn hình ViewSonic VX2882-4KP 28" IPS 4K 150Hz HDR10 USBC</strong></p>
                    <p className="price">15.990.000₫</p>
                    <button className="font addcart addcart-button buy-button-product">Add To cart</button>
                    <div className="text-description">
                        <strong>Kích Thước Màn Hình:</strong>28 Inch<br></br>
                        <strong>Tấm Nền:</strong>IPS<br></br>
                        <strong>Loại Độ Phân Giải:</strong>UHD<br></br>
                        <strong>Tần Số Quét:</strong>150Hz
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Monitor;