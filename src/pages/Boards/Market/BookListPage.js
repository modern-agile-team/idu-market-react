import React from "react";
import MarketListComponent from "../../../components/Boards/Market/MarketListComponent";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";

const BookListPage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Book" />
      <MarketListComponent categoryName="book" />
    </>
  );
};

export default BookListPage;
