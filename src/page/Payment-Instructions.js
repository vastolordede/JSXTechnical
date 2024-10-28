import React from "react";
import { Link } from "react-router-dom";

function payment() {
    return (
        <div className="bg-Warranty">
            <div className="column return-box-product">
                <strong><Link className="return-text" to="/">Home</Link></strong>/
                <strong><Link className="return-text" to="/Payment-Instructions">Payment Instructions</Link></strong>
            </div>
            <div className="Payment-content-box">
                <div className="top-border-Laptop-content"></div>

                <div className="box-home-Payment">
                    <a href="#" className="payment-font"><div className="Payment-link">
                        <a href="#" className="payment-font"><p className="payment-font">Thanh Toán<br></br> Chuyển Khoản</p></a><hr className="payment-hr"></hr>
                        <p className="p-Payment">Quý khách có thể chuyển khoản trực tiếp đến tài khoản của JSX Technical</p>
                    </div></a>
                </div>
                <div className="box-home-Payment">
                    <a href="#" className="payment-font"><div className="Payment-link">
                        <a href="#" className="payment-font"><p className="payment-font">Thanh Toán<br></br> Trực Tiếp</p></a><hr className="payment-hr"></hr>
                        <p className="p-Payment">Quý khách có thể trực tiếp đến Showroom của JSX Technical để thanh toán</p>
                    </div></a>
                </div>
                <div className="box-home-Payment">
                    <a href="#" className="payment-font"><div className="Payment-link">
                        <a href="#" className="payment-font"><p className="payment-font">Thanh Toán<br></br> Khi Nhận Hàng</p></a><hr className="payment-hr"></hr>
                        <p className="p-Payment">Quý khách có thể thanh toán cho nhân viên vận chuyển của JSX Technical hoặc đơn vị vận chuyển</p>
                    </div></a>
                </div>

            </div>
            <div className="bottom-border-payment-content"></div>
            <div className="Payment1 w-100">
                <h1>Thanh Toán Chuyển Khoản</h1>
            <p>Quý khách có thể thanh toán bằng cách chuyển khoản qua số tài khoản của JSX Technical tại ngân hàng dưới đây:</p>
            <div className="box-payment1">
                <strong ><p className="bank-title">ngân hàng thương mai cổ phần quân đội</p></strong>
                <p className="bank">Chủ tài khoản: Công Ty TNHH JSX Technical</p>
                <p className="bank">Chi nhánh: Quận 5, Thành phố HCM</p>
                <p className="bank">Số tài khoản: 099999999</p>
            </div>
            </div>
            <div className="Payment2 w-100">
                <h1>Thanh Toán Trực tiếp</h1>
            <p>Quý khách có thể thanh toán tại Showroom JSX Technical có mặt ở các tỉnh thành bằng cách quẹt thẻ</p>
            </div>
            <div className="Payment3 w-100">
                <h1>Thanh Toán Khi Nhận Hàng</h1>
                <div className="box-payment3">
                <p>Khi quý khách hàng nhận hàng sẽ thanh toán tổng giá trị đơn hàng hoặc
                phần còn lại (sau khi khách hàng đã đặt cọc trước) bằng tiền mặt hoặc
                quẹt thẻ (chỉ áp dụng đơn hàng ở nội thành Tp. Hồ Chí Minh và Hà Nội).<br></br>

                Quý khách sẽ thanh toán tại địa điểm nhận hàng cho nhân viên
                giao nhận của JSX Technical hoặc đơn vị vận chuyển mà JSX Technical sử dụng.</p>
                </div>
            </div>
        </div>
    );
}
export default payment;