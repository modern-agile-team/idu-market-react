import React from 'react';
import Header from '../components/Header/Header';
import FunctionComponent from '../components/HomePage/Section/FunctionComponent';
import IntroduceComponent from '../components/HomePage/Section/IntroduceComponent';
import MainBannerComponent from '../components/HomePage/Section/MainBannerComponent';


const HomePage = () => {
    return (
        <>
            <Header></Header>
            <MainBannerComponent></MainBannerComponent>
            <FunctionComponent></FunctionComponent>
            <IntroduceComponent></IntroduceComponent>
        </>
    );
};

export default HomePage;