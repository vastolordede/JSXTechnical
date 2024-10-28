import React from "react";
import { Link } from "react-router-dom";

function Suggestions() {
    return (
        <div className="bg-Warranty">
            <div className="column return-box-product">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Suggestions">Suggestions</Link></strong>
            </div>
            <div className="Laptop-content-box">
                <div className="top-border-Laptop-content"></div>
                <div className="card-content-product">
                    <div className="box-home-Warranty">
                        <p>Suggestions Form</p><hr></hr>
                        {/*Name*/}
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full name"
                            />
                        </div>
                        {/*Number*/}
                        <div className="form-group">
                            <label>Your Number:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Number"
                            />
                        </div>
                        {/*Email*/}
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Email:"
                            />
                        </div>
                        {/*Suggestions*/}
                        <div className="form-group">
                            <label>Suggestions:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Suggestions:"
                            />
                        </div>
                        <div className="Warranty-Check-Button-Box">
                            <button className="Warranty-Check-Button">Check</button>
                        </div>
                    </div>
                    <div className="card-text-product">
                        <p>JSX Infomation</p><hr></hr>
                        <p>84 98 765 4321<br></br>
                        InfoTechJSX@Tech.com<br></br>
                        123 Phan Chu Trinh Street, Hoan Kiem District, Hanoi, Vietnam</p>
                    </div>
                </div>
                <div className="bottom-border-Laptop-content"></div>
            </div>
        </div>
    );
}
export default Suggestions;