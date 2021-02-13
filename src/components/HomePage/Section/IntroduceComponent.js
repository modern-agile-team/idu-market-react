import React, {useState, useEffect}from 'react';
import { VscArrowDown } from "react-icons/vsc";
import '../../../scss/HomePage/Introduce.scss';

const IntroduceComponent = () => {

    const [scrollActionYoutube, setScrollActionYoutube] = useState(false);
    const [scrollActionIntro, setScrollActionIntro] = useState(false);

    const handleScroll = () => {
        let pageScrollY = window.scrollY;

        if (pageScrollY / 10 >= 85) {
            setScrollActionIntro(true);
            setTimeout(() => {
                setScrollActionYoutube(true);
            }, 300)
        }
        
        else if (pageScrollY / 10 < 40) {
            setScrollActionYoutube(false);
            setScrollActionIntro(false);
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return (
        <section id="introduce" className="introduce">
            <div className="container">
                <div className={scrollActionIntro ? "intro-box show" : "intro-box"}>
                    <h1><span>I</span>UAM</h1>
                    <h1>INTRO</h1>
                </div>
                <div className={scrollActionYoutube ? "youtube-box show" : "youtube-box"}>
                    <iframe src="https://www.youtube.com/embed/wYn8TeTMUL4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
                <div className="intro-bg-box"></div>
                <a href="#" className="intro-btn">
                        <VscArrowDown></VscArrowDown>
                </a>
            </div>
        </section>
    );
};

export default IntroduceComponent;