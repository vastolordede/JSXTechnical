import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/gearvn-laptop-acer-aspire-3-a315-510p-34xz-1_96068437df2f40bfb47ea28a141251d3_grande.webp';
import { useCart } from "./CartContext";

function Laptop() {
    const { addToCart} = useCart();

    const products = [
        {
            id: 6,
            name: "Laptop Acer Aspire 3 A315 510P 34XZ",
            price: "10990000",
            img: img1
        },
]

    return (
        <div className="bg-Laptop-content">
            <div className="column return-box">
                <strong><Link className="return-text custom-font" to="/">Home</Link></strong>/
                <strong><Link className="return-text custom-font" to="/Laptop">Laptop</Link></strong>/
                <Link className="return-text custom-font">Laptop Acer Aspire 3 A315 510P 34XZ</Link>
            </div>
            <div className="Laptop-content-box">
            <div className="top-border-Laptop-content"></div>
            <div className="card-content-product">
                <div className="card-imgcontent-product">
                    <Link to="/Laptop/"><img src={img1} className="img"></img></Link>
                </div>
                <div className="card-text-product">
                    <p className="title-product custom-font"><strong>Laptop Acer Aspire 3 A315 510P 34XZ</strong></p>
                    <p className="price custom-font">10.990.000₫</p>
                    <button className="font addcart addcart-button custom-font buy-button-product" onClick={ () => addToCart(products[0])}>Add To cart</button>
                    <div className="text-description custom-font">
                        <strong>CPU:</strong>Intel® Core™ i3-N305 (upto 3.8GHz, 8 nhân 8 luồng, 10 MB Intel® Smart Cache)<br></br>
                        <strong>RAM:</strong>8GB (1 x 8GB) LPDDR5 4800MHz (Không nâng cấp)<br></br>
                        <strong>VGA:</strong>Intel® UHD Graphics<br></br>
                        <strong>Màn hình:</strong>15.6" FHD (1920 x 1080), IPS 60Hz, Acer ComfyView LED-backlit TFT LCD
                    </div>
                </div>
            </div>
            <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Laptop;