import React from "react";
import BookListComponent from "../../../components/Boards/Market/BookListComponent";
import BoardBanner from "../../../components/Boards/BoardBanner";

const BookListPage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Book" />
      <BookListComponent codeName="book" />
    </>
  );
};

export default BookListPage;