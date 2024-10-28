import React from "react";
import { Link } from "react-router-dom";
import img from '../img/Remove-bg.ai_1729615117142.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart} from '../page/CartContext'

function Navbar() {

        const { cart, totalItems } = useCart(); 
 

    return (
        <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
            
            <div className="container">
                <ul className="nav navbar-nav d-flex flex-row flex-item w-100">
                <li className="nav-item"><Link to="/" ><FontAwesomeIcon icon={faGhost} className="Navbar-icon" /></Link></li>
                    <li className="nav-item">
                        <Link to="/" className="nounderline custom-font">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Payment-Instructions" className="nounderline custom-font">Payment Instructions</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Warranty-Check" className="nounderline custom-font">Warranty Check</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Suggestions" className="nounderline custom-font">Suggestions</Link>
                    </li>
                    
                </ul>
                <div className="cart">
                    <Link to="/Cart"><FontAwesomeIcon icon={faCartShopping} className="Cart-icon" /></Link>
                    {totalItems > 0 && <span className="product-cout">{totalItems}</span>}    
                </div>
                
                {/*Search*/}
                <div className="Search custom-font">                     
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search: "
                            />
                        </div>
            </div>
        </nav>
    );
}
export default Navbar;