import React, { useState, useEffect } from "react";
import Slide1 from '../img/464146155_1147604817374974_1420441125198123897_n.jpg';
import Slide2 from '../img/464103003_1147604824041640_2729593518896856903_n.jpg';
import Slide3 from '../img/464035521_1147604827374973_5601122393604773313_n.jpg';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = [
    {
        src: Slide1,
        alt: "Acer Nitro ANV15"
    },
    {
        src: Slide2,
        alt: "Gigabyte G6 KF"
    },
    {
        src: Slide3,
        alt: "Asus ROG Strix Scar 16"
    },
];

function Slider() {
    const [slideInDex, setSlideInDex] = useState(0);

    //Slile Tiếp Theo
    const nextSlide = () => {
        setSlideInDex((prevIndex) => (prevIndex + 1) % images.length);
    };

    //Slide trước
    const backSlide = () => {
        setSlideInDex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    //Tự chuyển sau 4s
    useEffect(() =>{
        const inteval = setInterval(nextSlide, 4000);

        return () => clearInterval(inteval)

    }, []);
    return (
        <div className="slider-box">
            <div className="top-border-slider"></div>
            <div className="list">
            <img className="slider-img" src={images[slideInDex].src} alt={images[slideInDex].alt}></img>
                <button className="slider-left" onClick={nextSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button className="slider-right" onClick={backSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
                <div className="bottom-border-slider"></div>
        </div>
        
    );
}
export default Slider;