import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import SearchComponent from "../Layout/SearchComponent";
import BoardListItem from "../BoardListItem";
import { BoardItemData } from "../../../container/BoardItemData";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { BOOK_GET_REQUEST } from "../../../redux/types";

const BookListComponent = ({ categoryName }) => {
  const [infinite, setinfinite] = useState({
    productList: [],
    items: 10,
    preItems: 0,
  });

  const dispatch = useDispatch();
  const category = useSelector((state) => state.market.data);
  let result = [];

  useEffect(() => {
    // dispatch({
    //   type: BOOK_GET_REQUEST,
    //   payload: categoryName,
    // });

    getData();

    window.addEventListener("scroll", infiniteScroll);

    return () => window.removeEventListener("scroll", infiniteScroll);
  }, []);

  function getData() {
    axios.get(`/api/boards/${categoryName}`).then((response) => {
      if (response.data.success) {
        result = response.data.boards.slice(infinite.preItems, infinite.items);

        setinfinite({
          ...infinite,
          productList: [...infinite.productList, ...result],
          preItems: infinite.items,
          items: infinite.items + 10,
        });
      }
    });
  }

  function infiniteScroll() {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= 500) {
      axios.get(`/api/boards/${categoryName}`).then((response) => {
        if (response.data.success) {
          setinfinite({
            ...infinite,
            preItems: infinite.items,
            items: infinite.items + 10,
          });
          getData();
        }
      });
      console.log(result);
    }
  }

  return (
    <section className="market" id="market">
      <a href="#board-banner" className="scroll-top-btn">
        <AiOutlineArrowUp />
      </a>
      <SearchComponent categoryName={categoryName} />
      <div className="container">
        <BoardListItem productList={infinite.productList}></BoardListItem>
      </div>
    </section>
  );
};

export default BookListComponent;
