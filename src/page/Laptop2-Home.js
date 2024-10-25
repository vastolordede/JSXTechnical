import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/ava_81d030b73ea840dca2f009918f3b6a98_grande.png';

function Laptop() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text"></Link>Laptop gaming Gigabyte G6 KF H3VN853SH
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/Laptop-gaming-Gigabyte-G6-KF-H3VN853SH"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Laptop gaming Gigabyte G6 KF H3VN853SH</strong></p>
                    <p className="price">29.990.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
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
export default Laptop;