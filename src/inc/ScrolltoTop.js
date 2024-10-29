import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // Cuộn lên đầu trang
    }, [pathname]);  // Gọi lại khi pathname thay đổi

    return null;
}

export default ScrollToTop;