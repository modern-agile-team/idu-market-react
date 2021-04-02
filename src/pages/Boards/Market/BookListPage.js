import React from "react";
import MarketListComponent from "../../../components/Boards/Market/MarketListComponent";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import { Helmet } from 'react-helmet';

const BookListPage = () => {
  return (
    <>
      <Helmet>
        <title>IUAM: 거래 장터(책)</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Idu Used Article Market" />
        <meta name="keywords" content="Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop" />
      </Helmet>
      <BoardBanner title="Market" desc="Book" />
      <MarketListComponent categoryName="book" />
    </>
  );
};

export default BookListPage;
