import React from "react";
import { Link } from 'react-router-dom';
import img from '../img/Remove-bg.ai_1729615117142.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer-box">
            <footer>
                <ul className="footer-ul">
                    {/*1*/}
                    <div className="row">
                        <div className="col-md-4 footer-content">
                            <p className="custom-font-bold"><strong>Contact</strong></p>
                            <li className="footer-color custom-font">+84 98 765 4321</li>
                            <li className="footer-color custom-font">+84 91 234 5678</li>
                            <li className="footer-color custom-font">InfoTechJSX@Tech.com</li>
                            <li className="footer-color custom-font">123 Phan Chu Trinh Street, Hoan Kiem District, Hanoi, Vietnam</li>
                        </div>
                        <div className="col-md-4 footer-content">
                            <p className="custom-font-bold"><strong>ShotCut</strong></p>
                            <li className="custom-font"><Link to="/" className="nounderline">Home</Link></li>
                            <li className="custom-font"><Link to="/Payment-Instructions" className="nounderline">Payment Instructions</Link></li>
                            <li className="custom-font"><Link to="/Suggestions" className="nounderline">Suggestions</Link></li>
                        </div>
                        <div className="col-md-4 footer-content">
                            <p className="custom-font-bold"><strong>Infomation</strong></p>
                            <p className="footer-color custom-font">JSX Technical is a dynamic company
                                specializing in providing advanced technological solutions
                                for businesses. With a focus on innovation and customer-centric services,
                                JSX Technical offers a wide range of services, including IT consulting,
                                software development, and system integration. The company prides itself on delivering
                                high-quality, customized solutions that drive efficiency and growth for its clients.
                                Backed by a team of skilled professionals, JSX Technical aims to be a trusted partne
                                r in helping businesses navigate the complexities of the modern digital landscape.</p>
                        </div>
                    </div>
                    <hr className="footer-hr"></hr>
                    {/*2*/}
                    <li>
                    <Link to="/" ><FontAwesomeIcon icon={faGhost} className="Footer-icon" /></Link>
                    </li>
                </ul>

            </footer>
        </div>
    );
}
export default Footer;