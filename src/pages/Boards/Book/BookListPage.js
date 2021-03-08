import React from "react";
import BookListComponent from "../../../components/Boards/Book/BookListComponent";
import BoardBanner from "../../../components/Boards/BoardBanner";

const BookListPage = () => {
  return (
    <>
      <BoardBanner />
      <BookListComponent />
    </>
  );
};

export default BookListPage;
