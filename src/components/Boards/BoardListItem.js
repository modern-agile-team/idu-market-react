import React from "react";
import { Link } from "react-router-dom";

const BoardListItem = ({ productList }) => {
  return (
    <>
      {productList.map((board, index) => {
        return (
          <div className="market-items" key={board.index}>
            <Link
              to={`/boards/book/${board.num}`}
              className="market-img-box-link"
            >
              <div className="market-img-box">
                <img src={board.thumbnail} alt="test" />
              </div>
            </Link>
            <Link to={`/boards/book/${board.num}`}>
              <h1 className="market-item-title">{board.title}</h1>
            </Link>
            {/* <p className="market-item-price">{board.price}</p> */}
            <p className="market-item-id">{board.studentId}</p>
            <p className="market-item-date">{board.inDate}</p>
          </div>
        );
      })}
    </>
  );
};

export default BoardListItem;
