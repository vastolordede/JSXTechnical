import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/ava_18fcf5617569479db9badb27576fbcf8_grande.webp';

function Laptop() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text">Laptop gaming Acer Predator Helios Neo 16 PHN16 72 78DQ</Link>
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-72-78DQ"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Laptop gaming Acer Predator Helios Neo 16 PHN16 72 78DQ</strong></p>
                    <p className="price">46.990.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel® Core™ i7-14650HX (3.70 GHz upto 5.20 GHz, 16 nhân 24 luồng, 30 MB Intel® Smart Cache) <br></br>
                        <strong>RAM:</strong>16GB (1x16GB) DDR5 5600MHz (2x SO-DIMM socket, up to 32GB SDRAM) <br></br>
                        <strong>VGA:</strong>NVIDIA® GeForce RTX™ 4060 with 8 GB of dedicated GDDR6 VRAM, supporting 3072 NVIDIA® CUDA® Cores <br></br>
                        <strong>Màn hình:</strong>16" WQXGA (2560 x 1600), 500 nits, 100% DCI-P3, 240Hz, Anti-glare, Acer ComfyView™ LED-backlit TFT LCD, Nvidia Advanced Optimus capable 
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Laptop;