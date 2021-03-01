import React, {useState, useEffect } from 'react';

const IntroduceComponent = () => {
    const [scrollActionYoutube, setScrollActionYoutube] = useState(false);
    const [scrollActionIntro, setScrollActionIntro] = useState(false);

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
        <section id="home-introduce" className="home-introduce">
            <div className="container">
                <div className={scrollActionIntro ? "intro-box show" : "intro-box"}>
                    <h1 className="intro-title">INTRO</h1>
                </div>
                <div className={scrollActionYoutube ? "youtube-box show" : "youtube-box"}>
                    <iframe 
                        className="intro-youtube"
                        title="iuam intro youtube"
                        src="https://www.youtube.com/embed/xvep-cJW7zk" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowfullscreen 
                    />
                </div>
                <div className="intro-bottom-box"></div>
            </div>
        </section>
    );
};

export default IntroduceComponent;