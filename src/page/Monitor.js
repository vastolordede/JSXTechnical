import React from "react";
import { Link } from "react-router-dom";
import img1 from '../img/-4kp-28inch-ips-4k-150hz-hdr10-usbc-1_a1b9884e45a74248938d6d5f8ef446d5_3b525a832e714ad187a32425edc9cede_grande.jpg';
import img2 from '../img/viewsonic_vx2428j_gearvn_60f31c4113114072b56e421577507e06_53fe3e1fa38d4845b222cb2d8497787f_grande.webp'
import img3 from '../img/giga_gs27fa_gearvn_0adabc0d220849fb9373808fdfe829ee_grande.webp'
import img4 from '../img/msi_g244f_e2_gearvn_784763b88e6246269adfc568b49e46e3_grande.jpg'
import img5 from '../img/vx2528_gearvn_cf518d1493bd40e1810b8d9c5e0a3aa8_grande.webp'
import img6 from '../img/philips_27m2n3200l_gearvn_3be3acb3421e44938a76dbc96023931f_grande.webp'

function Monitor() {
    return (
        <div className="bg-product">
            <div className="column return-box-product">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Monitor">Monitor</Link></strong>
            </div>
            <div className="top-border-Laptop"></div>
            <div className="box-home-product">
                 {/*PC*/}
                <ul className="grid-list-home">
                    {/*Khung 1*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Monitor/Màn-hình-ViewSonic-VX2882-4KP-28-IPS-4K-150Hz-HDR10-USBC"><img src={img1} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Monitor/Màn-hình-ViewSonic-VX2882-4KP-28-IPS-4K-150Hz-HDR10-USBC"><p className="Name"><strong>Màn hình ViewSonic VX2882-4KP 28" IPS 4K 150Hz HDR10 USBC</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">28 inch</li>
                                    <li className="li-home">150 Hz</li>
                                    <li className="li-home">4K (3840 x 2160)</li>
                                    <li className="li-home">IPS</li>
                                </ul>
                                <p className="price">15.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 2*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Monitor/Màn-hình-ViewSonic-VX2479-HD-PRO-24-IPS-180Hz-chuyên-game"><img src={img2} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Monitor/Màn-hình-ViewSonic-VX2479-HD-PRO-24-IPS-180Hz-chuyên-game"><p className="Name"><strong>Màn hình ViewSonic VX2479-HD-PRO 24" IPS 180Hz chuyên game</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">24 inch</li>
                                    <li className="li-home">180Hz</li>
                                    <li className="li-home">Full HD (1920 x 1080)</li>
                                    <li className="li-home">IPS</li>
                                </ul>
                                <p className="price">3.390.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 3*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Monitor/Màn-hình-GIGABYTE-GS27FA-27-IPS-180Hz-chuyên-game"><img src={img3} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Monitor/Màn-hình-GIGABYTE-GS27FA-27-IPS-180Hz-chuyên-game"><p className="Name"><strong>Màn hình GIGABYTE GS27FA 27" IPS 180Hz chuyên game</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">27 inch</li>
                                    <li className="li-home">180 Hz</li>
                                    <li className="li-home">Full HD (1920 x 1080)</li>
                                    <li className="li-home">IPS</li>
                                </ul>
                                <p className="price">4.990.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 4*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Monitor/Màn-hình-MSI-G244F-E2-24-Rapid-IPS-180Hz-chuyên-game"><img src={img4} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Monitor/Màn-hình-MSI-G244F-E2-24-Rapid-IPS-180Hz-chuyên-game"><p className="Name"><strong>Màn hình MSI G244F E2 24" Rapid IPS 180Hz chuyên game</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">24 inch</li>
                                    <li className="li-home">180 Hz</li>
                                    <li className="li-home">Full HD (1920 x 1080)</li>
                                    <li className="li-home">IPS</li>
                                </ul>
                                <p className="price">3.690.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 5*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Monitor/Màn-hình-ViewSonic-VX2528-25-IPS-180Hz-Gsync-chuyên-game"><img src={img5} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Monitor/Màn-hình-ViewSonic-VX2528-25-IPS-180Hz-Gsync-chuyên-game"><p className="Name"><strong>Màn hình ViewSonic VX2528 25" IPS 180Hz Gsync chuyên game</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">25 inch</li>
                                    <li className="li-home">180 Hz</li>
                                    <li className="li-home">Full HD (1920 x 1080)</li>
                                    <li className="li-home">IPS</li>
                                </ul>
                                <p className="price">3.790.000₫</p>
                                <button className="font addcart">Add To cart</button>
                            </div>
                        </div>
                    </li>
                    {/*Khung 6*/}
                    <li>
                        <div className="card-content">
                            <div className="card-imgcontent">
                                <Link to="/Monitor/Màn-hình-Philips-27M2N3200S-27-IPS-180Hz-chuyên-game"><img src={img6} className="img"></img></Link>
                            </div>
                            <div className="card-text">
                                <Link className="text-nounderline-home" to="/Monitor/Màn-hình-Philips-27M2N3200S-27-IPS-180Hz-chuyên-game"><p className="Name"><strong>Màn hình Philips 27M2N3200S 27" IPS 180Hz chuyên game</strong></p></Link>
                                <ul className="ulcontent">
                                    <li className="li-home">27 inch</li>
                                    <li className="li-home">180 Hz</li>
                                    <li className="li-home">Full HD (1920 x 1080)</li>
                                    <li className="li-home">IPS</li>
                                </ul>
                                <p className="price">4.190.000₫</p>
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
export default Monitor;