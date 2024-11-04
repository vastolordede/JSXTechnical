import React, { useState } from "react";
import { Link } from "react-router-dom";

function Suggestions() {

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Suggestions, setSuggestions] = useState("");
    const [Email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [EmailError, setEmailError] = useState("");

    const handleSave = () => {
        let hasError = false;

        // Kiểm tra các trường bắt buộc
        if (!fullName || !phoneNumber || !Suggestions) {
            setError("Some fields are required.");
            hasError = true;
        } else {
            setError("");
        }

        // Kiểm tra định dạng số điện thoại
        const cardNumberPattern = /^0[0-9]{9}$/;
        if (!phonePattern.test(phoneNumber)) {
            setPhoneError("Please enter the correct phone number.");
            hasError = true;
        } else {
            setPhoneError("");
        }

        const EmailPattern = /^[a-zA-Z0-9]+@gmail\.com$/;
        if (!EmailPattern.test(Email)){
            setEmailError("Please enter the correct Email form.");
            hasError = true;
        } else {
            setEmailError("");
        }

        return hasError; // Trả về true nếu có lỗi
    };

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
                        {error && <div className="custom-font alert-w alert alert-danger">{error}</div>}
                        {phoneError && <div className="custom-font alert-w alert alert-danger">{phoneError}</div>}
                        {EmailError && <div className="custom-font alert-w alert alert-danger">{EmailError}</div>}
                        {/*Name*/}
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                autoFocus   
                            />
                        </div>
                        {/*Number*/}
                        <div className="form-group">
                            <label>Your Number:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        {/*Email*/}
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Email:"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/*Suggestions*/}
                        <div className="form-group">
                            <label>Suggestions:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Suggestions:"
                                value={Suggestions}
                                onChange={(e) => setSuggestions(e.target.value)}
                            />
                        </div>
                        <div className="Warranty-Check-Button-Box">
                            <button className="Warranty-Check-Button" onClick={handleSave}>Check</button>
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