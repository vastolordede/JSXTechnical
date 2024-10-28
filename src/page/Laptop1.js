import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/nitro-v_755588bd95514b6386940d73d3951e2d_1024x1024_8d56591164e04e73b4ed6be4c9c8e360_grande.webp';
import { useCart } from "./CartContext";

function Laptop() {
    const { addToCart} = useCart();

    const products = [
        {
            id: 1,
            name: "Laptop gaming Acer Nitro V ANV15 51 72VS",
            price: "25990000",
            img: img1
        },
]

    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text custom-font" to="/">Home</Link></strong>/
                <strong><Link className="return-text custom-font" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text custom-font">Laptop gaming Acer Nitro V ANV15 51 72VS</Link>
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/Laptop-Acer-Acer-Nitro-V-ANV15-51-72VS"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product custom-font"><strong>Laptop gaming Acer Nitro V ANV15 51 72VS</strong></p>
                    <p className="price custom-font">25.990.000₫</p>
                    <button className="font addcart addcart-button custom-font buy-button-product" onClick={ () => addToCart(products[0])}>Add To cart</button>
                    <div className="text-description custom-font">
                        <strong>CPU:</strong> Intel® Core™ i7-13620H (10 nhân, 16 luồng, 3.60 GHz up to 4.90 GHz, 24 MB Intel® Smart Cache)<br></br>
                        <strong>RAM:</strong> 16GB (8x2) DDR5 5200MHz (2x SO-DIMM socket, up to 32GB SDRAM)<br></br>
                        <strong>VGA:</strong> NVIDIA® GeForce RTX™ 2050 4GB GDDR6<br></br>
                        <strong>Màn hình:</strong> 15.6" FHD (1920 x 1080) IPS, 144Hz, 3ms,  Acer ComfyView LED-backlit TFT LCD, 45% NTSC
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Laptop;