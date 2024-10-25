import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/74ba_e05f14530e984b419bdbdd5a27667751_1024x1024_4dbafdd46a0b416290cc4a32c0be6a4c_grande.webp';

function Laptop() {
    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text">Laptop gaming Acer Predator Helios Neo 16 PHN16 71 53M7</Link>
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-71-53M7"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product"><strong>Laptop gaming Acer Predator Helios Neo 16 PHN16 71 53M7</strong></p>
                    <p className="price">37.990.000₫</p>
                    <button className="font addcart addcart-button">Add To cart</button>
                    <div className="text-description">
                        <strong>CPU:</strong>Intel Core i5-13500HX 2.5GHz up to 4.7GHz 24MB <br></br>
                        <strong>RAM:</strong>16GB (8x2) DDR5 4800MHz (2x SO-DIMM socket, up to 32GB SDRAM) <br></br>
                        <strong>VGA:</strong> NVIDIA® GeForce RTX™ 4060 8GB GDDR6<br></br>
                        <strong>Màn hình:</strong>
                    </div>
                </div>
                </div>
                <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Laptop;