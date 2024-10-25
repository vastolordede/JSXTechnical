import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/ava_81d030b73ea840dca2f009918f3b6a98_grande.png';

function Laptop() {
    return (
        <div className="bg-product">
            <div className="column return-box-product">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text"></Link>Laptop Gigabyte
            </div>
            <div className="top-border-Laptop"></div>
            <div className="box-home-product">
                 {/*Laptop*/}
                <ul className="grid-list-home">
                    {/*Khung 1*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                            <Link to="/Laptop/Laptop-gaming-Gigabyte-G6-KF-H3VN853SH"><img src={img1} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                            <Link className="text-nounderline-home" to="/Laptop/Laptop-gaming-Gigabyte-G6-KF-H3VN853SH"><p className="Name"><strong>Laptop gaming Gigabyte G6 KF H3VN853SH</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i7-13620H</li>
                                    <li className="li-home">RTX 4060</li>
                                    <li className="li-home">16 GB</li>
                                    <li className="li-home">512 GB</li>
                                    <li className="li-home">16 inch FHD</li>
                                    <li className="li-home">165 Hz</li>
                                </ul>
                                <p className="price">29.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>

                    </ul>
                    
            </div>
            <div className="bottom-border-Laptop"></div>
        </div>
    );
}
export default Laptop;