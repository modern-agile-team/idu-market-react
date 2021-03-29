import React from "react";
import FunctionComponent from "../../components/HomePage/Section/FunctionComponent";
import MainBannerComponent from "../../components/HomePage/Section/MainBannerComponent";
import IntroduceComponent from "../../components/HomePage/Section/IntroduceComponent";
import ArticlesComponent from "../../components/HomePage/Section/ArticlesComponent";
import NoticeComponent from "../../components/HomePage/Section/NoticeComponent";
import { SliderData } from "../../container/NoticeSliderData";

const HomePage = () => {
  return (
    <>
      <MainBannerComponent />
      <FunctionComponent />
      <IntroduceComponent />
      <NoticeComponent slides={SliderData} />
      <ArticlesComponent />
    </>
  );
};

export default HomePage;
