import React from 'react';
import ArticlesComponent from '../../components/HomePage/Section/ArticlesComponent';
import FunctionComponent from '../../components/HomePage/Section/FunctionComponent';
import IntroduceComponent from '../../components/HomePage/Section/IntroduceComponent';
import MainBannerComponent from '../../components/HomePage/Section/MainBannerComponent';
import NoticeComponent from '../../components/HomePage/Section/NoticeComponent';
import Footer from '../../components/Footer/Footer';
import { SliderData } from '../../container/NoticeSliderData';

const HomePage = () => {
    return (
        <>
            <MainBannerComponent />
            <FunctionComponent />
            <IntroduceComponent />
            <NoticeComponent slides={SliderData} />
            <ArticlesComponent />
            <Footer />
        </>
    );
};

export default HomePage;