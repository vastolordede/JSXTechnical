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
                            <Link className="dropdown-item"><strong>Laptop Theo Thương Hiệu</strong></Link>
                            <Link className="dropdown-item" to="/LaptopAcer">Acer</Link>
                            <Link className="dropdown-item" to="/LaptopGigabyte">Gigabyte</Link>
                            <Link className="dropdown-item">Asus</Link>
                        </div>
                        {/*Lap Acer, Predator*/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong>Acer|Predator</strong></Link>
                            <Link className="dropdown-item">Nitro Series</Link>
                            <Link className="dropdown-item">Aspire Series</Link>
                            <Link className="dropdown-item">Predator Series</Link>
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
                            <Link className="dropdown-item"><strong>PC Theo Cấu hình VGA</strong></Link>
                            <Link className="dropdown-item">PC Dùng VGA RX 6600</Link>
                            <Link className="dropdown-item">PC Dùng VGA RTX 3050</Link>
                            <Link className="dropdown-item">PC Dùng VGA GTX 1650</Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong>PC Theo Cấu hình (Intel)</strong></Link>
                            <Link className="dropdown-item">Pc I3 (7+ Triệu)</Link>
                            <Link className="dropdown-item">Pc I5 (10+ Triệu)</Link>
                            <Link className="dropdown-item">Pc I7 (27+ Triệu)</Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong>PC Theo Cấu hình (AMD)</strong></Link>
                            <Link className="dropdown-item">Pc R3 (5+ Triệu)</Link>
                            <Link className="dropdown-item">Pc R5 (7+ Triệu)</Link>
                            <Link className="dropdown-item">Pc R7 (37+ Triệu)</Link>
                        </div>
                    </div>
                </li>
                {/*Monitor*/}
                <li className="Menubox-li">
                    <Link to="/Monitor" className="title-menu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Monitor</Link>
                    <div className="dropdown-menu dropdown-grid" aria-labelledby="MonitorDropdown">
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong>Hãng Sản Xuất</strong></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong>Độ Phân Giải</strong></Link>
                            <Link className="dropdown-item"></Link>
                            <Link className="dropdown-item"></Link>
                        </div>
                        {/**/}
                        <div className="dropdown-column">
                            <Link className="dropdown-item"><strong>Tần Số Quét</strong></Link>
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