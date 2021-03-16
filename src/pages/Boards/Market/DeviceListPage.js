import React from "react";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import MarketListComponent from "../../../components/Boards/Market/MarketListComponent";

const DeviceListPage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Device" />
      <MarketListComponent categoryName="device" />
    </>
  );
};

export default DeviceListPage;
