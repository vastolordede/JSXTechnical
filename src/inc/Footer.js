import React from "react";
import { Link } from 'react-router-dom';
import img from '../img/Remove-bg.ai_1729615117142.png';
function Footer() {
    return (
        <div className="footer-box">
            <footer>
                <ul className="footer-ul">
                    {/*1*/}
                    <div className="row">
                        <div className="col-md-4 footer-content">
                            <p><strong>Contact</strong></p>
                            <li className="footer-color">+84 98 765 4321</li>
                            <li className="footer-color">+84 91 234 5678</li>
                            <li className="footer-color">InfoTechJSX@Tech.com</li>
                            <li className="footer-color">123 Phan Chu Trinh Street, Hoan Kiem District, Hanoi, Vietnam</li>
                        </div>
                        <div className="col-md-4 footer-content">
                            <p><strong>ShotCut</strong></p>
                            <li><Link to="/" className="nounderline">Home</Link></li>
                            <li><Link to="/Payment-Instructions" className="nounderline">Home</Link></li>
                            <li><Link to="/Suggestions" className="nounderline">Suggestions</Link></li>
                        </div>
                        <div className="col-md-4 footer-content">
                            <p><strong>Infomation</strong></p>
                            <p className="footer-color">JSX Technical is a dynamic company
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
                        <Link to="/"><img src={img} className="footer-logo"></img></Link>
                    </li>
                </ul>

            </footer>
        </div>
    );
}
export default Footer;