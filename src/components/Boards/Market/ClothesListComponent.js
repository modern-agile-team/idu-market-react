import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BoardItemData } from "../../../container/BoardItemData";
import { AiOutlineArrowUp } from "react-icons/ai";
import SearchComponent from "../Layout/SearchComponent";
import BoardListItem from "../BoardListItem";

import { useDispatch, useSelector } from "react-redux";
import { CLOTHES_GET_REQUEST } from "../../../redux/types";

const ClothesListComponent = ({ categoryName }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.market.data);

  useEffect(() => {
    dispatch({
      type: CLOTHES_GET_REQUEST,
      payload: categoryName,
    });
  }, [dispatch]);

  return (
    <section className="market" id="market">
      <a href="#board-banner" className="scroll-top-btn">
        <AiOutlineArrowUp />
      </a>
      <SearchComponent categoryName={categoryName} />
      <div className="container">
        <BoardListItem category={category}></BoardListItem>
      </div>
    </section>
  );
};

export default ClothesListComponent;
