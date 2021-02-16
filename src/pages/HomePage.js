import React from 'react';
import Header from '../components/Header/Header';
import FunctionComponent from '../components/HomePage/Section/FunctionComponent';
import IntroduceComponent from '../components/HomePage/Section/IntroduceComponent';
import MainBannerComponent from '../components/HomePage/Section/MainBannerComponent';
import NoticeComponent from '../components/HomePage/Section/NoticeComponent';
import { SliderData } from '../components/HomePage/Section/NoticeSliderData';



const HomePage = () => {
    return (
        <>
            <Header></Header>
            <MainBannerComponent></MainBannerComponent>
            <FunctionComponent></FunctionComponent>
            <IntroduceComponent></IntroduceComponent>
            <NoticeComponent slides={SliderData}></NoticeComponent>
        </>
    );
};

export default HomePage;