import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/ava_9e22fefdef4944628d7876311ec29230_grande.webp';

function Laptop() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text"></Link>Laptop gaming Acer Predator Helios 300 PH315 55 751D
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/Laptop-gaming-Acer-Predator-Helios-300-PH315-55-751D"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Laptop gaming Acer Predator Helios 300 PH315 55 751D</strong></p>
                    <p className="price">59.990.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong> Intel® Core™ i7-12700H (up to 4.7Ghz, 24MB cache)<br></br>
                        <strong>RAM:</strong>	16GB DDR5 4800Mhz (2x8GB) (2x SO-DIMM socket, up to 32GB SDRAM) <br></br>
                        <strong>VGA:</strong>NVIDIA GeForce RTX 3070Ti 8GB GDDR6 <br></br>
                        <strong>Màn hình:</strong> 15.6 inch QHD (2560 x1440) IPS 165Hz, DCI-P3 100%, 5ms, 300nits, SlimBezel
                    </div>
                </div>
                </div>
                <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Laptop;