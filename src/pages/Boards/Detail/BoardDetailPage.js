import React from "react";
import BoardDetailComponent from "../../../components/Boards/Detail/BoardDetailComponent";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import { Helmet } from 'react-helmet';

const BoardDetailPage = () => {
  return (
    <>
      <Helmet>
          <title>IUAM-(Detail)</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Idu Used Article Market" />
          <meta name="keywords" content="IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, Detail" />
      </Helmet>
      <BoardBanner title="Board" desc="Detail" />
      <BoardDetailComponent></BoardDetailComponent>
    </>
  );
};

export default BoardDetailPage;
