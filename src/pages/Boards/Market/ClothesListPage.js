import React from "react";
import BoardBanner from "../../../components/Boards/BoardBanner";
import ClothesListComponent from "../../../components/Boards/Market/ClothesListComponent";

const ClothesListPage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Clothes" />
      <ClothesListComponent></ClothesListComponent>
    </>
  );
};

export default ClothesListPage;
