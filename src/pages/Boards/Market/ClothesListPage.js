import React from "react";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import MarketListComponent from "../../../components/Boards/Market/MarketListComponent";

const ClothesListPage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Clothes" />
      <MarketListComponent categoryName="clothes" />
    </>
  );
};

export default ClothesListPage;
