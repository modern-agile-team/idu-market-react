import React from "react";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import MarketListComponent from "../../../components/Boards/Market/MarketListComponent";
import { Helmet } from 'react-helmet';

const DeviceListPage = () => {
  return (
    <>
      <Helmet>
        <title>IUAM-(Market)</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Idu Used Article Market" />
        <meta name="keywords" content="IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop" />
      </Helmet>
      <BoardBanner title="Market" desc="Device" />
      <MarketListComponent categoryName="device" />
    </>
  );
};

export default DeviceListPage;
