import React, { useEffect, useState } from 'react';
import BannerImage from '../../../img/shopping.png'
import { VscArrowDown } from "react-icons/vsc";
import '../../../scss/HomePage/MainBanner.scss';

const MainBannerComponent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(!show);
        }, 400);
    }, [])
    

    return (
        <section id="main-banner" className="main-banner">
                <div className="banner-title">
                    <h1><span>Idu</span> Used Article Marke<em>t</em></h1>
                    <p className={show ? "show" : ""}>by. Woowahan Agile</p>
                </div>
                <div className="banner-img">
                    <img className="show" src={BannerImage} alt="배너 이미지"/>
                </div>
                <a href="#function" className="banner-btn">
                        <VscArrowDown></VscArrowDown>
                </a>
        </section>
    );
};

export default MainBannerComponent;