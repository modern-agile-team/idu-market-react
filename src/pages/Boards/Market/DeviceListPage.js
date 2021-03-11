import React from "react";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import DeviceListComponent from "../../../components/Boards/Market/DeviceListComponent";

const DeviceListPage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Device" />
      <DeviceListComponent categoryName="device" />
    </>
  );
};

export default DeviceListPage;
