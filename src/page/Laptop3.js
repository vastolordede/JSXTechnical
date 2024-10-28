import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/ava_5cf8182eaaa84d0bb59110b4bd55f03a_grande.webp';
import { useCart } from "./CartContext";

function Laptop() {
    const { addToCart} = useCart();

    const products = [
        {
            id: 3,
            name: "Laptop gaming Acer Nitro V ANV16 41 R36Y",
            price: "31990000",
            img: img1
        },
]

    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text custom-font" to="/">Home</Link></strong>/
                <strong><Link className="return-text custom-font" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text custom-font">Laptop gaming Acer Nitro V ANV16 41 R36Y</Link>
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/Laptop-gaming-Acer-Nitro-V-ANV16-41-R36Y"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product custom-font"><strong>Laptop gaming Acer Nitro V ANV16 41 R36Y</strong></p>
                    <p className="price custom-font">31.990.000₫</p>
                    <button className="font addcart addcart-button custom-font buy-button-product" onClick={ () => addToCart(products[0])}>Add To cart</button>
                    <div className="text-description custom-font">
                        <strong>CPU:</strong>AMD Ryzen™ 7 8845HS (3.8 GHz upto 5.1 GHz, 8 nhân 16 luồng, 8 MB L2 cache, up to 16 MB L3 cache) <br></br>
                        <strong>RAM:</strong>16GB (1x16GB) DDR5 5600MHz (2x SO-DIMM socket, up to 32GB SDRAM)<br></br>
                        <strong>VGA:</strong>NVIDIA® GeForce RTX™ 4050 with 6 GB of dedicated GDDR6 VRAM <br></br>
                        <strong>Màn hình:</strong>16" 16:10 WUXGA (1920x1200) IPS, 165Hz, 300nits, 100% sRGB,  Acer ComfyView™, LED-backlit TFT LCD, Wide viewing angle up to 170 degrees 
                    </div>
                </div>
                </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Laptop;