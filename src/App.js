import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './inc/Navbar';
import Footer from "./inc/Footer";
import Home from './page/Home';
import Laptop from "./page/Laptop";
import Laptop2Home from "./page/Laptop2-Home";
import Laptop3Home from "./page/Laptop3-Home";
import Laptop1 from "./page/Laptop1";
import Laptop2 from "./page/Laptop2";
import Laptop3 from "./page/Laptop3";
import Laptop4 from "./page/Laptop4";
import Laptop5 from "./page/Laptop5";
import Laptop6 from "./page/Laptop6";
import PC from "./page/PC";
import PC1Home from "./page/PC1-Home";
import PC3Home from "./page/PC3-Home";
import PC1 from "./page/PC1";
import PC2 from "./page/PC2";
import PC3 from "./page/PC3";
import PC4 from "./page/PC4";
import PC5 from "./page/PC5";
import PC6 from "./page/PC6";
import Monitor from "./page/Monitor";
import Monitor1Home from "./page/Monitor1-Home";
import Monitor2Home from "./page/Monitor2-Home";
import Monitor3Home from "./page/Monitor3-Home";
import Monitor1 from "./page/Monitor1";
import Monitor2 from "./page/Monitor2";
import Monitor3 from "./page/Monitor3";
import Monitor4 from "./page/Monitor4";
import Monitor5 from "./page/Monitor5";
import Monitor6 from "./page/Monitor6";
import LaptopAcer from "./page/Laptop-Acer";
import LaptopGigabyte from "./page/Laptop-Gigabyte";
import Warranty from './page/Warranty';
import Suggestions from './page/Suggestions';
import Payment from './page/Payment-Instructions';
import { CartProvider } from "./page/CartContext";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout"
import ScrollToTop from "./inc/ScrolltoTop";

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Laptop" element={<Laptop />} />
          <Route path="/Laptop/Laptop-gaming-Gigabyte-G6-KF-H3VN853SH" element={<Laptop2Home />} />
          <Route path="/Laptop/Laptop-gaming-ASUS-ROG-Strix-SCAR-16-G634JYR-RA132W" element={<Laptop3Home />} />
          <Route path="/Laptop/Laptop-Acer-Acer-Nitro-V-ANV15-51-72VS" element={<Laptop1 />} />
          <Route path="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-72-78DQ" element={<Laptop2 />} />
          <Route path="/Laptop/Laptop-gaming-Acer-Nitro-V-ANV16-41-R36Y" element={<Laptop3 />} />
          <Route path="/Laptop/Laptop-gaming-Acer-Predator-Helios-Neo-16-PHN16-71-53M7" element={<Laptop4 />} />
          <Route path="/Laptop/Laptop-gaming-Acer-Predator-Helios-300-PH315-55-751D" element={<Laptop5 />} />
          <Route path="/Laptop/Laptop-Acer-Aspire-3-A315-510P-34XZ" element={<Laptop6 />} />
          <Route path="/PC" element={<PC />} />
          <Route path="/PC/PC-GVN-AMD-R5-5600X/-VGA-RTX-3050-(Powered by ASUS)" element={<PC1Home />} />
          <Route path="/PC/PC-GVN-x-ASUS-Advanced-Ai-(Intel-Core-Ultra-9-285K/-VGA-RTX-4090" element={<PC1 />} />
          <Route path="/PC/PC-GVN-x-AORUS-XTREME-ICE-(Intel-i9-14900K/-VGA-RTX-4080-Super)" element={<PC2 />} />
          <Route path="/PC/PC-GVN-x-MSI-Dragon-ACE-(Intel-i9-14900K/-VGA-RTX-4080-Super)" element={<PC3 />} />
          <Route path="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i7-14700K/-VGA-RTX-4070-Ti-Super)" element={<PC4 />} />
          <Route path="/PC/PC-GVN-x-Corsair-iCUE-(Intel-i7-14700F/-VGA-RTX-4070Ti-Super)" element={<PC5 />} />
          <Route path="/PC/PC-GVN-x-ASUS-Back-to-Future-(Intel-i9-14900K/-VGA-RTX-4090)" element={<PC6 />} />
          <Route path="/PC/PC-GVN-AMD-R5-8400F/-VGA-RX-7600" element={<PC3Home />} />
          <Route path="/Monitor/Màn-hình-Philips-27M2N3200L-27-IPS-180Hz-chuyên-game" element={<Monitor1Home />} />
          <Route path="/Monitor/Màn-hình-Acer-VG271U-M3-27-IPS-2K-180Hz-chuyên-game" element={<Monitor2Home />} />
          <Route path="/Monitor/Màn-hình-ASUS-VY249HF-R-24-IPS-100Hz-viền-mỏng" element={<Monitor3Home />} />
          <Route path="/Monitor/Màn-hình-ViewSonic-VX2882-4KP-28-IPS-4K-150Hz-HDR10-USBC" element={<Monitor1 />} />
          <Route path="/Monitor/Màn-hình-ViewSonic-VX2479-HD-PRO-24-IPS-180Hz-chuyên-game" element={<Monitor2 />} />
          <Route path="/Monitor/Màn-hình-GIGABYTE-GS27FA-27-IPS-180Hz-chuyên-game" element={<Monitor3 />} />
          <Route path="/Monitor/Màn-hình-MSI-G244F-E2-24-Rapid-IPS-180Hz-chuyên-game" element={<Monitor4 />} />
          <Route path="/Monitor/Màn-hình-ViewSonic-VX2528-25-IPS-180Hz-Gsync-chuyên-game" element={<Monitor5 />} />
          <Route path="/Monitor/Màn-hình-Philips-27M2N3200S-27-IPS-180Hz-chuyên-game" element={<Monitor6 />} />
          <Route path="/Monitor" element={<Monitor />} />
          <Route path="/LaptopAcer" element={<LaptopAcer />} />
          <Route path="/LaptopGigabyte" element={<LaptopGigabyte />} />
          <Route path="/Warranty-Check" element={<Warranty />} />
          <Route path="/Suggestions" element={<Suggestions />} />
          <Route path="/Payment-Instructions" element={<Payment />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Check-out" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}
export default App;