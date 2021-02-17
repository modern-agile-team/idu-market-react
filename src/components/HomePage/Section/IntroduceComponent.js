import React, {useState, useRef, useEffect } from 'react';
import '../../../scss/HomePage/Introduce.scss';

const IntroduceComponent = () => {

    const [scrollActionYoutube, setScrollActionYoutube] = useState(false);
    const [scrollActionIntro, setScrollActionIntro] = useState(false);
    const introduceRefEl = useRef(null);

    const introduceHandleScroll = () => {
        let pageScrollY = window.scrollY;

        if (pageScrollY > 600) {
            setScrollActionIntro(true);
            setTimeout(() => setScrollActionYoutube(true), 300);
        }
        else {
            setScrollActionYoutube(false);
            setScrollActionIntro(false);
        } 
    }

    useEffect(() => {

        window.addEventListener('scroll', introduceHandleScroll);

        return () => window.removeEventListener('scroll', introduceHandleScroll);
    }, []);

    return (
        <section id="home-introduce" className="home-introduce" ref={introduceRefEl}>
            <div className="container">
                <div className={scrollActionIntro ? "intro-box show" : "intro-box"}>
                    <h1>INTRO</h1>
                </div>
                <div className={scrollActionYoutube ? "youtube-box show" : "youtube-box"}>
                    <iframe title="iuam intro youtube"src="https://www.youtube.com/embed/xvep-cJW7zk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
                <div className="intro-bg-box"></div>
            </div>
        </section>
    );
};

export default IntroduceComponent;