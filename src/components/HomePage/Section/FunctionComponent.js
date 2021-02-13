import React, { useEffect, useState } from 'react';
import '../../../scss/HomePage/Funtion.scss';
import communication from '../../../img/communication-2.png'
import information from '../../../img/information-2.png'
import shopping from '../../../img/shopping-2.png'

const FunctionComponent = () => {
    const [scrollAction, setScrollAction] = useState(false);

    const handleScroll = () => {
        let pageScrollY = window.scrollY;

        if (pageScrollY / 10 >= 18) setScrollAction(true);
        else if (pageScrollY === 0) setScrollAction(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return (
        <section id="function" className="function">
            <div className="container">
                <div className={scrollAction ? "function-items show" : "function-items"}>
                    <div className="function-item shopping">
                        <img src={shopping} alt="중고거래"/>
                        <p>Deal With Article</p>
                    </div>
                    <div className="function-item communication">
                        <img src={communication} alt="커뮤니케이션"/>
                        <p>Communication</p>
                    </div>
                    <div className="function-item information">
                        <img src={information} alt="정보"/>
                        <p>University <br />
                        Information
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunctionComponent;