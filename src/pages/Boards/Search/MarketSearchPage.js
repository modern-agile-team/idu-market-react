import React from "react";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import SearchListComponent from "../../../components/Boards/Search/SearchListComponent";
import { Helmet } from 'react-helmet';

const MarketSearchPage = () => {
  return (
    <>
      <Helmet>
        <title>IUAM-(Search)</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Idu Used Article Market" />
        <meta name="keywords" content="Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 검색, Search" />
      </Helmet>
      <BoardBanner title="Market" desc="Search"></BoardBanner>
      <SearchListComponent></SearchListComponent>
    </>
  );
};

export default MarketSearchPage;
