import React from "react";
import { Link } from "react-router-dom";
import img from '../img/Remove-bg.ai_1729615117142.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
            <Link to="/"><img className="navbar-img" src={img}></img></Link>
            <div className="container">
                <ul className="nav navbar-nav d-flex flex-row flex-item w-100">
                    <li className="nav-item">
                        <Link to="/" className="nounderline">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Payment-Instructions" className="nounderline">Payment Instructions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nounderline">Warranty Check</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Suggestions" className="nounderline">Suggestions</Link>
                    </li>
                    <li className="nav-item">
                        <Link></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;