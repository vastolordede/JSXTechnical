import React from "react";
import { Link } from "react-router-dom";

function MenuBox() {
    return (
        <div>
            <ul className="menu-box d-flex flex-row flex-item ">
            
                {/*Laptop*/}
                <li className="Menubox-li">
                    <Link to="/Laptop" className=" title-menu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Laptop</Link>
                    <div className="dropdown-menu dropdown-grid" aria-labelledby="laptopDropdown">
                        {/*Lap Theo Thương hiệu*/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>Laptops by brand</strong></Link>
                            <Link className="dropdown-item custom-font" to="/LaptopAcer">Acer</Link>
                            <Link className="dropdown-item custom-font" to="/LaptopGigabyte">Gigabyte</Link>
                            <Link className="dropdown-item custom-font">Asus</Link>
                        </div>
                        {/*Lap Acer, Predator*/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>Acer|Predator</strong></Link>
                            <Link className="dropdown-item custom-font">Nitro Series</Link>
                            <Link className="dropdown-item custom-font">Aspire Series</Link>
                            <Link className="dropdown-item custom-font">Predator Series</Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong></strong></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong></strong></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                        </div>
                    </div>
                </li>
                {/*PC*/}
                <li className="Menubox-li">
                    <Link to="/PC" className="title-menu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PC</Link>
                    <div className="dropdown-menu dropdown-grid" aria-labelledby="PCDropdown">
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>PC Using VGA</strong></Link>
                            <Link className="dropdown-item custom-font">PC Using VGA RX 6600</Link>
                            <Link className="dropdown-item custom-font">PC Using VGA RTX 3050</Link>
                            <Link className="dropdown-item custom-font">PC Using VGA GTX 1650</Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>PC Usinng (Intel)</strong></Link>
                            <Link className="dropdown-item custom-font">Pc I3 (7+ M)</Link>
                            <Link className="dropdown-item custom-font">Pc I5 (10+ M)</Link>
                            <Link className="dropdown-item custom-font">Pc I7 (27+ M)</Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>PC Using (AMD)</strong></Link>
                            <Link className="dropdown-item custom-font">Pc R3 (5+ M)</Link>
                            <Link className="dropdown-item custom-font">Pc R5 (7+ M)</Link>
                            <Link className="dropdown-item custom-font">Pc R7 (37+ M)</Link>
                        </div>
                    </div>
                </li>
                {/*Monitor*/}
                <li className="Menubox-li">
                    <Link to="/Monitor" className="title-menu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Monitor</Link>
                    <div className="dropdown-menu dropdown-grid" aria-labelledby="MonitorDropdown">
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>Production Company</strong></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>Resolution</strong></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item custom-font-bold"><strong>Hz</strong></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                        </div>
                    </div>
                </li>
               
            </ul>
        </div>
    );
}
export default MenuBox;