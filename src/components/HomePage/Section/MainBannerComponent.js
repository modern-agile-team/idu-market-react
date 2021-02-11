import React, { useEffect, useState } from 'react';
import BannerImage from '../../../img/shopping.png'
import { FiArrowDownCircle } from "react-icons/fi";
import '../../../scss/HomePage/MainBanner.scss';

const MainBannerComponent = () => {
    const [upImg, setUpImg] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setUpImg(!upImg);
        }, 600)
    }, [])

    console.log(upImg)
    
    return (
        <section id="main-banner" className="main-banner">
            <div className="banner-img">
                <img className={upImg ? "show" : ""} src={BannerImage} alt="배너 이미지"/>
            </div>
            <div className="banner-title">
                <h1><span>Idu</span> Used Article Marke<em>t</em></h1>
                <p>by. Woowahan Agile</p>
                <a href="#function" className="banner-btn"><FiArrowDownCircle></FiArrowDownCircle></a>
            </div>
        </section>
    );
};

export default MainBannerComponent;