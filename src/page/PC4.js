import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/pc_ai_9d2576de0d644c8289792f295c_97a1e5eafae649a0ae9c0e7e076322a2_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i7-14700K/-VGA-RTX-4070-Ti-Super)"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)</strong></p>
                    <p className="price">71.220.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel Core i7 14700K / Turbo up to 5.6GHz / 20 Nhân 28 Luồng / 33MB / LGA 1700<br></br>
                        <strong>RAM:</strong>Corsair Vengeance RGB White 32GB (2x16GB) 5600 DDR5<br></br>
                        <strong>VGA:</strong>ASUS TUF Gaming GeForce RTX 4070 Ti SUPER BTF White OC Edition 16GB GDDR6X<br></br>
                        <strong>Mainboard:</strong>ASUS TUF GAMING Z790-BTF WIFI DDR5
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;