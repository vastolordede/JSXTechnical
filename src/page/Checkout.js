import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../inc/Check-out-Pop-up";

function Checkout() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [checkout, setCheckout] = useState("");
    const [error, setError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const handleSave = () => {
        let hasError = false;

        // Kiểm tra các trường bắt buộc
        if (!fullName || !phoneNumber || !checkout) {
            setError("Some fields are required.");
            hasError = true;
        } else {
            setError("");
        }

        // Kiểm tra định dạng số điện thoại
        const phonePattern = /^0[0-9]{9}$/;
        if (!phonePattern.test(phoneNumber)) {
            setPhoneError("Please enter the correct phone number.");
            hasError = true;
        } else {
            setPhoneError("");
        }

        return hasError; // Trả về true nếu có lỗi
    };

    const handleCompleteBuy = () => {
        const hasError = handleSave();
        if (!hasError) {    
            openPopup(); // Mở popup chỉ khi không có lỗi
        }
    };

    return (
        <div className="bg-checkout">
            {error && <div className="custom-font alert alert-danger">{error}</div>}
            {phoneError && <div className="custom-font alert alert-danger">{phoneError}</div>}
            <div className="top-border-checkout"></div>
            <div className="box-home-checkout">
                <p>Enter Your Information</p><hr />

                {/* Name */}
                <div className="form-group custom-font">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        autoFocus
                    />
                </div>

                {/* Number */}
                <div className="form-group custom-font">
                    <label>Your Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                {/* Address */}
                <div className="form-group custom-font">
                    <label>Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Address"
                        value={checkout}
                        onChange={(e) => setCheckout(e.target.value)}
                    />
                </div>

                <div>
                    <button className="Cart-checkout-button custom-font" onClick={handleCompleteBuy}>
                        Complete Buy
                    </button>
                    <Popup isOpen={isPopupOpen} onClose={closePopup} />
                </div>
            </div>
            <div className="bottom-border-checkout"></div>
        </div>
    );
}

export default Checkout;
