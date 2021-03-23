import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineComment } from "react-icons/ai";

const BoardListItem = ({ productList, categoryName }) => {
  console.log(productList);
  return (
    <>
      {productList.map((board) => {
        return (
          <div className="market-items" key={board.num}>
            <Link
              to={`/boards/${categoryName}/${board.num}`}
              className="market-img-box-link"
            >
              <div className="market-img-box">
                <img src={board.thumbnail} alt="test" />
              </div>
            </Link>
            <Link to={`/boards/${categoryName}/${board.num}`}>
              <h1 className="market-item-title">{board.title}</h1>
            </Link>
            <p className="market-item-price">{board.price}원</p>
            <p className="market-item-id">
                <Link to={`/students/${board.studentId}`}><AiOutlineUser />{board.studentId} &nbsp;</Link>
              <AiOutlineComment />
              {board.commentCount}
            </p>
            <p className="market-item-date">{board.inDate.substring(0, 10)}</p>
          </div>
        );
      })}
    </>
  );
};

export default BoardListItem;
