import React, { useEffect, useRef, useState } from 'react';
import '../../../scss/HomePage/Funtion.scss';
import communication from '../../../img/communication-2.png'
import information from '../../../img/information-2.png'
import shopping from '../../../img/shopping-2.png'

const FunctionComponent = () => {
    const [scrollActionFuntion, setScrollActionFunction] = useState(false);
    const refEl = useRef(null);

    const handleScroll = () => {
        let pageScrollY = window.scrollY + (refEl.current.offsetTop * 0.7);

        if (pageScrollY > refEl.current.offsetTop) setScrollActionFunction(true);
        else setScrollActionFunction(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return (
        <section id="home-function" className="home-function" ref={refEl}>
            <div className="container">
                <div className={scrollActionFuntion ? "function-items show" : "function-items"}>
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