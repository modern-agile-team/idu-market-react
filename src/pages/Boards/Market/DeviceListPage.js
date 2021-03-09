import React from "react";
import BoardBanner from "../../../components/Boards/BoardBanner";
import DeviceListComponent from "../../../components/Boards/Market/DeviceListComponent";

const DeviceListPage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Clothes" />
      <DeviceListComponent codeName="device" />
    </>
  );
};

export default DeviceListPage;
