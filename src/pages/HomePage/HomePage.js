import React from "react";
import FunctionComponent from "../../components/HomePage/Section/FunctionComponent";
import MainBannerComponent from "../../components/HomePage/Section/MainBannerComponent";
import IntroduceComponent from "../../components/HomePage/Section/IntroduceComponent";
import ArticlesComponent from "../../components/HomePage/Section/ArticlesComponent";
import NoticeComponent from "../../components/HomePage/Section/NoticeComponent";
import { SliderData } from "../../container/NoticeSliderData";
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>IUAM</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Idu Used Article Market" />
        <meta name="keywords" content="IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop" />
      </Helmet>
      <MainBannerComponent />
      <FunctionComponent />
      <IntroduceComponent />
      <NoticeComponent slides={SliderData} />
      <ArticlesComponent />
    </>
  );
};

export default HomePage;
