import React from "react";
import BoardDetailComponent from "../../../components/Boards/Detail/BoardDetailComponent";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";

const BoardDetailPage = () => {
  return (
    <>
      <BoardBanner title="Board" desc="Detail" />
      <BoardDetailComponent></BoardDetailComponent>
    </>
  );
};

export default BoardDetailPage;
