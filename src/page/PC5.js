import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/pc_-_35_a9769976b4474527b9884f323069456d_grande.webp';

function PC() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/PC">PC</Link></strong>/
                <Link className="return-text"></Link>PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/PC/PC-GVN-x-Corsair-iCUE-(Intel-i7-14700F/-VGA-RTX-4070Ti-Super)"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)</strong></p>
                    <p className="price">68.700.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel Core i7 14700F / Turbo up to 5.4GHz / 20 Nhân 28 Luồng / 33MB / LGA 1700<br></br>
                        <strong>RAM:</strong>Corsair Vengeance RGB White 32GB (2x16GB) 5600 DDR5<br></br>
                        <strong>VGA:</strong>ASUS TUF Gaming GeForce RTX 4070 Ti SUPER 16GB GDDR6X White OC Edition<br></br>
                        <strong>Mainboard:</strong>ASUS ROG Strix Z790-A GAMING WIFI II DDR5
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default PC;