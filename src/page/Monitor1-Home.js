import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/philips_27m2n3200l_gearvn_3be3acb3421e44938a76dbc96023931f_grande.webp';

function Monitor() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Monitor">Monitor</Link></strong>/
                <Link className="return-text"></Link>Màn hình Philips 27M2N3200L 27" IPS 180Hz chuyên game
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Monitor/Màn-hình-Philips-27M2N3200L-27-IPS-180Hz-chuyên-game"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Màn hình Philips 27M2N3200L 27" IPS 180Hz chuyên game</strong></p>
                    <p className="price">3.690.000₫</p>
                    <button className="font addcart addcart-button buy-button-product">Add To cart</button>
                    <div className="text-description">
                        <strong>Kích Thước Màn Hình:</strong>27 Inch<br></br>
                        <strong>Tấm Nền:</strong>IPS<br></br>
                        <strong>Loại Độ Phân Giải:</strong>Full HD (1920 x 1080)<br></br>
                        <strong>Tần Số Quét:</strong>180 Hz
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Monitor;