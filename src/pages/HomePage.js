import React from 'react';
import Header from '../components/Header/Header';
import FunctionComponent from '../components/HomePage/Section/FunctionComponent';
import MainBannerComponent from '../components/HomePage/Section/MainBannerComponent';


const HomePage = () => {
    return (
        <>
            <Header></Header>
            <MainBannerComponent></MainBannerComponent>
            <FunctionComponent></FunctionComponent>
        </>
    );
};

export default HomePage;