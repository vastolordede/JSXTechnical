import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/nitro-v_755588bd95514b6386940d73d3951e2d_1024x1024_8d56591164e04e73b4ed6be4c9c8e360_grande.webp';
import img2 from '../img/ava_81d030b73ea840dca2f009918f3b6a98_grande.png';
import img3 from '../img/ava_d2da11ba2af941a8972ea4d4ddaf8159_grande.webp';
import img4 from '../img/luxs_44f7416f99e54134a7820f1168275f5f_1024x1024_756d5d077691485292e2d608fe2c7826_grande.webp';
import img5 from '../img/pc_gvn_x_gigabyte__ice__-_32_e797aed458a94914b78e491d8c7a5ccb_grande.webp';
import img6 from '../img/pc_gvn_-_amd_-_a21_-_3_c71ab3cdd9bf45cb947b98f4561300b4_grande.webp';
import img7 from '../img/philips_27m2n3200l_gearvn_3be3acb3421e44938a76dbc96023931f_grande.webp';
import img8 from '../img/acer_vg271u_m3_gearvn_9a36f6ad9acb457594121de26949c60b_grande.webp';
import img9 from '../img/asus_vy249hf-r_gearvn_31257400a38d40de989279ff66d96411_grande.webp';
import MenuBox from "../inc/MenuBox";

function Home() {
    return (
        <div className="bg-home">
        <><MenuBox />
        <div className="box-home">
            {/*Laptop Ban Chay*/}
            <div className="best-seller-box">
                <div className="top-border-bestseller"></div>
                <h1 className="head-home">Best Laptop Seller</h1>
                <hr className="hr-home"></hr>
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
                            <Link to="/Laptop/Laptop-gaming-Gigabyte-G6-KF-H3VN853SH"><img src={img2} className="img"></img></Link>

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
                    {/*Khung 3*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                            <Link to="/Laptop/Laptop-gaming-ASUS-ROG-Strix-SCAR-16-G634JYR-RA132W"><img src={img3} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                            <Link className="text-nounderline-home" to="/Laptop/Laptop-gaming-ASUS-ROG-Strix-SCAR-16-G634JYR-RA132W"><p className="Name"><strong>Laptop gaming ASUS ROG Strix SCAR 16 G634JYR RA132W</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i9-14900HX</li>
                                    <li className="li-home">RTX 4090</li>
                                    <li className="li-home">64 GB</li>
                                    <li className="li-home">2 TB</li>
                                    <li className="li-home">16 inch QHD+</li>
                                    <li className="li-home">240 Hz</li>
                                </ul>
                                <p className="price">119.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="bottom-border-bestseller"></div>
            </div>
            {/*PC Ban Chay*/}
            <div className="best-seller-box">
            <div className="top-border-bestseller"></div>
                <h1 className="head-home">Best PC Seller</h1>
                <hr className="hr-home"></hr>
                <ul className="grid-list-home">
                    {/*Khung 4*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                            <Link to="/PC/PC-GVN-AMD-R5-5600X/-VGA-RTX-3050-(Powered by ASUS)"><img src={img4} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                            <Link className="text-nounderline-home" to="/PC/PC-GVN-AMD-R5-5600X/-VGA-RTX-3050-(Powered by ASUS)"><p className="Name"><strong>PC GVN AMD R5-5600X/ VGA RTX 3050 (Powered by ASUS)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">R5 5600X</li>
                                    <li className="li-home">RTX 3050</li>
                                    <li className="li-home">B550</li>
                                    <li className="li-home">16GB</li>
                                    <li className="li-home">500GB</li>
                                </ul>
                                <p className="price">17.510.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 5*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/PC/PC-GVN-x-AORUS-XTREME-ICE-(Intel-i9-14900K/-VGA-RTX-4080-Super)"><img src={img5} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/PC/PC-GVN-x-AORUS-XTREME-ICE-(Intel-i9-14900K/-VGA-RTX-4080-Super)"><p className="Name"><strong>PC GVN x AORUS XTREME ICE (Intel i9-14900K/ VGA RTX 4080 Super)</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">i9 14900K</li>
                                    <li className="li-home">RTX 4080 Super</li>
                                    <li className="li-home">Z790</li>
                                    <li className="li-home">64GB</li>
                                    <li className="li-home">1TB</li>
                                </ul>
                                <p className="price">150.740.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 6*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                            <Link to="/PC/PC-GVN-AMD-R5-8400F/-VGA-RX-7600"><img src={img6} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                            <Link className="text-nounderline-home" to="/PC/PC-GVN-AMD-R5-8400F/-VGA-RX-7600"><p className="Name"><strong>PC GVN AMD R5-8400F/ VGA RX 7600</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">R5-8400</li>
                                    <li className="li-home">RX 7600</li>
                                    <li className="li-home">B650</li>
                                    <li className="li-home">16GB</li>
                                    <li className="li-home">500GB</li>
                                </ul>
                                <p className="price">24.490.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>

                </ul>
            <div className="bottom-border-bestseller"></div>
            </div>
            {/*Monitor Ban Chay */}
            <div className="best-seller-box">
            <div className="top-border-bestseller"></div>
                <h1 className="head-home">Best Monitor Seller</h1>
                <hr className="hr-home"></hr>
                <ul className="grid-list-home">
                    {/*Khung 7*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                            <Link to="/Monitor/Màn-hình-Philips-27M2N3200L-27-IPS-180Hz-chuyên-game"><img src={img7} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                            <Link className="text-nounderline-home" to="/Monitor/Màn-hình-Philips-27M2N3200L-27-IPS-180Hz-chuyên-game"><p className="Name"><strong>Màn hình Philips 27M2N3200L 27" IPS 180Hz chuyên game</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">27 inch</li>
                                    <li className="li-home">180 Hz</li>
                                    <li className="li-home">Full Hd (1980x1080)</li>
                                    <li className="li-home">Ips</li>
                                </ul>
                                <p className="price">3.690.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 8*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                            <Link to="/Monitor/Màn-hình-Acer-VG271U-M3-27-IPS-2K-180Hz-chuyên-game"><img src={img8} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                            <Link className="text-nounderline-home" to="/Monitor/Màn-hình-Acer-VG271U-M3-27-IPS-2K-180Hz-chuyên-game"><p className="Name"><strong>Màn hình Acer VG271U M3 27" IPS 2K 180Hz chuyên game</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">27 Inch</li>
                                    <li className="li-home">180 Hz</li>
                                    <li className="li-home">2K (2560x1440)</li>
                                    <li className="li-home">Ips</li>
                                </ul>
                                <p className="price">5.490.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 9*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                            <Link to="/Monitor/Màn-hình-ASUS-VY249HF-R-24-IPS-100Hz-viền-mỏng"><img src={img9} className="img"></img></Link>

                            </div>
                            <div className="card-text">
                            <Link className="text-nounderline-home" to="/Monitor/Màn-hình-ASUS-VY249HF-R-24-IPS-100Hz-viền-mỏng"><p className="Name"><strong>Màn hình ASUS VY249HF-R 24" IPS 100Hz viền mỏng</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">24 inch</li>
                                    <li className="li-home">100 Hz</li>
                                    <li className="li-home">Full HD (1980x1080)</li>
                                    <li className="li-home">Ips</li>
                                </ul>
                                <p className="price">2.290.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>

                </ul>
                <div className="bottom-border-bestseller"></div>
            </div>
        </div>
        </>
        </div>
    );
}
export default Home;