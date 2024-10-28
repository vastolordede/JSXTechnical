import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/vx2528_gearvn_cf518d1493bd40e1810b8d9c5e0a3aa8_grande.webp';

function Monitor() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Monitor">Monitor</Link></strong>/
                <Link className="return-text"></Link>Màn hình ViewSonic VX2528 25" IPS 180Hz Gsync chuyên game
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Monitor/Màn-hình-ViewSonic-VX2528-25-IPS-180Hz-Gsync-chuyên-game"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Màn hình ViewSonic VX2528 25" IPS 180Hz Gsync chuyên game</strong></p>
                    <p className="price">3.790.000₫</p>
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