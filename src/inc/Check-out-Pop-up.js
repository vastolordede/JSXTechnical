import React from "react";
import { Link } from "react-router-dom";

function Popup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="bg-checkout-popup">
            <button className="closebtn" onClick={onClose} >X</button>
            <h2 className="custom-b">Congratulations</h2>
            <p className="custom-font">Thank you so much for choosing our products!
                We’re grateful for your trust and support.
                Should you have any questions or feedback,
                please don’t hesitate to reach out. We look
                forward to serving you again soon!</p>
            <Link to="/"><button className="Cart-checkout-popup-button custom-font">Back</button></Link>
        </div>
    );
}
export default Popup;