import React, {lazy} from "react";
import FunctionComponent from "../../components/HomePage/Section/FunctionComponent";
import MainBannerComponent from "../../components/HomePage/Section/MainBannerComponent";
import { SliderData } from "../../container/NoticeSliderData";

const HomePage = () => {
  const IntroduceComponent = lazy(() => import('../../components/HomePage/Section/IntroduceComponent'));
  const ArticlesComponent = lazy(() => import('../../components/HomePage/Section/ArticlesComponent'));
  const NoticeComponent = lazy(() => import('../../components/HomePage/Section/NoticeComponent'));

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
