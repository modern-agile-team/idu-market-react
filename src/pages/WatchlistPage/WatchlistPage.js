import React from "react";
import WatchlistComponent from "../../components/Watchlist/WatchlistComponent";
import BoardBanner from "../../components/Boards/Layout/BoardBanner";
import { Helmet } from 'react-helmet';

const WatchlistPage = () => {
  return (
    <>
      <Helmet>
          <title>IUAM: 관심 목록</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Idu Used Article Market" />
          <meta name="keywords" content="인덕, 인덕대, 거래 장터, 대학교, Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 관심목록, 판매목록, 구매목록" />
      </Helmet>
      <BoardBanner title="IUAM" desc="Watchlist" ></BoardBanner>
      <WatchlistComponent></WatchlistComponent>
    </>
  );
};

export default WatchlistPage;