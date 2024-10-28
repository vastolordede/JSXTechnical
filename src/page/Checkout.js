import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Checkout(){
    return(
        <div className="bg-checkout">
            <div className="top-border-checkout"></div>
            <div className="box-home-checkout">
                        <p>Enter Your Infomation</p><hr></hr>
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
                        {/*warranty code*/}
                        <div className="form-group">
                            <label>Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Address"
                            />
                        </div>
                        <div >
                            <button className="Cart-checkout-button">Complete Buy</button>
                        </div>
                    </div>
                    <div className="bottom-border-checkout"></div>
        </div>
    );
}
export default Checkout;