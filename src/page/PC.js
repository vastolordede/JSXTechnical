import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/gr701_-_8_cb365132fb6e4bc8a0e87e8811ef585a_grande.webp';
import img2 from '../img/pc_gvn_x_gigabyte__ice__-_32_e797aed458a94914b78e491d8c7a5ccb_grande.webp'
import img3 from '../img/artboard_3_b5ccc140878a433db58322a5adeb8b3c_grande.webp'
import img4 from '../img/pc_ai_9d2576de0d644c8289792f295c_97a1e5eafae649a0ae9c0e7e076322a2_grande.webp'
import img5 from '../img/pc_-_35_a9769976b4474527b9884f323069456d_grande.webp'
import img6 from '../img/3_e68704a03a634e27899e3b616e94b095_grande.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMemory, faMicrochip, faHardDrive, faDungeon, faTicket } from"@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";


function PC() {
    const { addToCart } = useCart();

    const products = [
        {
            id: 1,
            name: "PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)",
            price: "143630000",
            img: img1
        },
        {
            id: 2,
            name: "PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)",
            price: "150740000",
            img: img2
        },
        {
            id: 3,
            name: "PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)",
            price: "94220000",
            img: img3
        },
        {
            id: 4,
            name: "PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)",
            price: "71220000",
            img: img4
        },
        {
            id: 5,
            name: "PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)",
            price: "68700000",
            img: img5
        },
        {
            id: 6,
            name: "PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)",
            price: "142620000",
            img: img6
        },

]

    return (
        <div className="bg-product">
            <div className="column return-box-product">
                <strong><Link className="return-text custom-font" to="/">Home</Link></strong>/
                <strong><Link className="return-text custom-font" to="/PC">PC</Link></strong>
            </div>
            <div className="top-border-Laptop"></div>
            <div className="box-home-product">
                 {/*PC*/}
                <ul className="grid-list-home">
                    {/*Khung 1*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/PC/PC-GVN-x-ASUS-Advanced-Ai-(Intel-Core-Ultra-9-285K/-VGA-RTX-4090"><img src={img1} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/PC/PC-GVN-x-ASUS-Advanced-Ai-(Intel-Core-Ultra-9-285K/-VGA-RTX-4090"><p className="Name custom-font"><strong>PC GVN x ASUS Advanced Ai (Intel Core Ultra 9 285K/ VGA RTX 4090)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMicrochip} className="product-icon" />Ultra 9 285K</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faDungeon} className="product-icon" />RTX 4090</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faTicket} className="product-icon" />Z890</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMemory} className="product-icon" />64GB</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faHardDrive} className="product-icon" />1TB</li>
                                </ul>
                                <p className="price custom-font">143.630.000₫</p>
                                <button className="font addcart buy-button" onClick={ () => addToCart(products[0])}>Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 2*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/PC/PC-GVN-x-AORUS-XTREME-ICE-(Intel-i9-14900K/-VGA-RTX-4080-Super)"><img src={img2} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/PC/PC-GVN-x-AORUS-XTREME-ICE-(Intel-i9-14900K/-VGA-RTX-4080-Super)"><p className="Name custom-font"><strong>PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMicrochip} className="product-icon" />i9 14900K</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faDungeon} className="product-icon" />RTX 4080 Super</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faTicket} className="product-icon" />Z790</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMemory} className="product-icon" />64GB</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faHardDrive} className="product-icon" />1TB</li>
                                </ul>
                                <p className="price custom-font">150.740.000₫</p>
                                <button className="font addcart buy-button" onClick={ () => addToCart(products[1])}>Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 3*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/PC/PC-GVN-x-MSI-Dragon-ACE-(Intel-i9-14900K/-VGA-RTX-4080-Super)"><img src={img3} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/PC/PC-GVN-x-MSI-Dragon-ACE-(Intel-i9-14900K/-VGA-RTX-4080-Super)"><p className="Name custom-font"><strong>PC GVN x MSI Dragon ACE (Intel i9-14900K/ VGA RTX 4080 Super)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMicrochip} className="product-icon" />i9 14900K</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faDungeon} className="product-icon" />RTX 4080 Super</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faTicket} className="product-icon" />Z790</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMemory} className="product-icon" />64GB</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faHardDrive} className="product-icon" />1TB</li>
                                </ul>
                                <p className="price custom-font">94.220.000₫</p>
                                <button className="font addcart buy-button" onClick={ () => addToCart(products[2])}>Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 4*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i7-14700K/-VGA-RTX-4070-Ti-Super)"><img src={img4} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i7-14700K/-VGA-RTX-4070-Ti-Super)"><p className="Name custom-font"><strong>PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMicrochip} className="product-icon" />i7 14700K</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faDungeon} className="product-icon" />RTX 4070Ti Super</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faTicket} className="product-icon" />Z790</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMemory} className="product-icon" />32GB</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faHardDrive} className="product-icon" />1TB</li>
                                </ul>
                                <p className="price custom-font">71.220.000₫</p>
                                <button className="font addcart buy-button" onClick={ () => addToCart(products[3])}>Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 5*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/PC/PC-GVN-x-Corsair-iCUE-(Intel-i7-14700F/-VGA-RTX-4070Ti-Super)"><img src={img5} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/PC/PC-GVN-x-Corsair-iCUE-(Intel-i7-14700F/-VGA-RTX-4070Ti-Super)"><p className="Name custom-font"><strong>PC GVN x Corsair iCUE (Intel i7-14700F/ VGA RTX 4070Ti Super)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMicrochip} className="product-icon" />i7 14700F</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faDungeon} className="product-icon" />RTX 4070Ti Super</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faTicket} className="product-icon" />Z790</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMemory} className="product-icon" />32GB</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faHardDrive} className="product-icon" />1TB</li>
                                </ul>
                                <p className="price custom-font">68.700.000₫</p>
                                <button className="font addcart buy-button" onClick={ () => addToCart(products[4])}>Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 6*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i9-14900K/-VGA-RTX-4090)"><img src={img6} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i9-14900K/-VGA-RTX-4090)"><p className="Name custom-font"><strong>PC GVN x ASUS Back to Future (Intel i9-14900K/ VGA RTX 4090)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMicrochip} className="product-icon" />i9 14900K</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faDungeon} className="product-icon" />RTX 4090</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faTicket} className="product-icon" />Z790</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faMemory} className="product-icon" />32GB</li>
                                    <li className="li-home custom-font"><FontAwesomeIcon icon={faHardDrive} className="product-icon" />1TB</li>
                                </ul>
                                <p className="price custom-font">142.620.000₫</p>
                                <button className="font addcart buy-button" onClick={ () => addToCart(products[5])}>Add To cart</button>
                            </div>
                        </div>
                    </li>

                    </ul>
                    
            </div>
            <div className="bottom-border-Laptop"></div>
        </div>
    );
}
export default PC;