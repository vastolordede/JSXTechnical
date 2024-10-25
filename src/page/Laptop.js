import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/nitro-v_755588bd95514b6386940d73d3951e2d_1024x1024_8d56591164e04e73b4ed6be4c9c8e360_grande.webp';
import img2 from '../img/ava_18fcf5617569479db9badb27576fbcf8_grande.webp'
import img3 from '../img/ava_5cf8182eaaa84d0bb59110b4bd55f03a_grande.webp'
import img4 from '../img/74ba_e05f14530e984b419bdbdd5a27667751_1024x1024_4dbafdd46a0b416290cc4a32c0be6a4c_grande.webp'
import img5 from '../img/ava_9e22fefdef4944628d7876311ec29230_grande.webp'
import img6 from '../img/gearvn-laptop-acer-aspire-3-a315-510p-34xz-1_96068437df2f40bfb47ea28a141251d3_grande.webp'

function Laptop() {
    return (
        <div className="bg-product">
            <div className="column return-box-product">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Laptop">Laptop</Link></strong>
            </div>
            <div className="top-border-Laptop"></div>
            <div className="box-home-product">
                 {/*Laptop*/}
                <ul className="grid-list-home">
                    {/*Khung 1*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Laptop/Laptop-Acer-Acer-Nitro-V-ANV15-51-72VS"><img src={img1} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Laptop/Laptop-Acer-Acer-Nitro-V-ANV15-51-72VS"><p className="Name"><strong>Laptop gaming Acer Nitro V ANV15 51 72VS</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i7-13620H</li>
                                    <li className="li-home">RTX 2050</li>
                                    <li className="li-home">16 GB</li>
                                    <li className="li-home">512 GB</li>
                                    <li className="li-home">15.6 inch FHD</li>
                                    <li className="li-home">144 Hz</li>
                                </ul>
                                <p className="price">25.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 2*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-72-78DQ"><img src={img2} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-72-78DQ"><p className="Name"><strong>Laptop gaming Acer Predator Helios Neo 16 PHN16 72 78DQ</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i7-14650HX</li>
                                    <li className="li-home">RTX 4060</li>
                                    <li className="li-home">16 GB</li>
                                    <li className="li-home">1 TB</li>
                                    <li className="li-home">16 inch 2K</li>
                                    <li className="li-home">240 Hz</li>
                                </ul>
                                <p className="price">46.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 3*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Laptop/Laptop-gaming-Acer-Nitro-V-ANV16-41-R36Y"><img src={img3} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Laptop/Laptop-gaming-Acer-Nitro-V-ANV16-41-R36Y"><p className="Name"><strong>Laptop gaming Acer Nitro V ANV16 41 R36Y</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">RTX 4050</li>
                                    <li className="li-home">16 GB</li>
                                    <li className="li-home">512 GB</li>
                                    <li className="li-home">16 inch WUXGA</li>
                                    <li className="li-home">165 Hz</li>
                                </ul>
                                <p className="price">31.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 4*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-71-53M7"><img src={img4} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-71-53M7"><p className="Name"><strong>Laptop gaming Acer Predator Helios Neo 16 PHN16 72 78DQ</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i7-14650HX</li>
                                    <li className="li-home">RTX 4060</li>
                                    <li className="li-home">16 GB</li>
                                    <li className="li-home">1 TB</li>
                                    <li className="li-home">16 inch 2K</li>
                                    <li className="li-home">240 Hz</li>
                                </ul>
                                <p className="price">46.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 5*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Laptop/Laptop-gaming-Acer-Predator-Helios-300-PH315-55-751D"><img src={img5} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Laptop/Laptop-gaming-Acer-Predator-Helios-300-PH315-55-751D"><p className="Name"><strong>Laptop gaming Acer Predator Helios 300 PH315 55 751D</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i7-12700H</li>
                                    <li className="li-home">RTX 3070Ti</li>
                                    <li className="li-home">16 GB</li>
                                    <li className="li-home">512 GB</li>
                                    <li className="li-home">15.6 inch QHD</li>
                                    <li className="li-home">165 Hz</li>
                                </ul>
                                <p className="price">59.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 6*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Laptop/Laptop-Acer-Aspire-3-A315-510P-34XZ"><img src={img6} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Laptop/Laptop-Acer-Aspire-3-A315-510P-34XZ"><p className="Name"><strong>Laptop Acer Aspire 3 A315 510P 34XZ</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i3-N305</li>
                                    <li className="li-home">Onboard</li>
                                    <li className="li-home">8 GB</li>
                                    <li className="li-home">256 GB</li>
                                    <li className="li-home">15.6 inch FHD</li>
                                </ul>
                                <p className="price">10.990.000₫</p>
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