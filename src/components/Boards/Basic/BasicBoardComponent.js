import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SearchComponent from "../Search/SearchComponent";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { BASIC_BOARD_GET_REQUEST } from "../../../redux/types";
import { useDispatch, useSelector } from "react-redux";

function BasicBoardComponent({ categoryName }) {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();
  const freeBoardList = useSelector((state) => state.boards.data);
  // const auth = useSelector(state => state.auth);

  const perPage = 10;
  const pageVisited = pageNumber * perPage;
  const pageCount = Math.ceil(freeBoardList.length / perPage);

  useEffect(() => {
      dispatch({
        type: BASIC_BOARD_GET_REQUEST,
        payload: categoryName,
      });
  }, [dispatch, categoryName]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayBoardList = freeBoardList
    .slice(pageVisited, pageVisited + perPage)
    .map((boardItem) => {
      return (
        <tr key={boardItem.num}>
          <td>{boardItem.num}</td>
          <td className="boardlist-common-title">
            <Link to={`/boards/${categoryName}/${boardItem.num}`}>
              {boardItem.title}
            </Link>
          </td>
          <td><Link to={`/students/${boardItem.studentId}`}>{boardItem.studentId}</Link></td>
          <td>{boardItem.inDate.substring(0, 10)}</td>
          <td>{boardItem.hit}</td>
        </tr>
      );
    });

  return (
    <section id="boardlist-common" className="boardlist-common">
      <SearchComponent categoryName={categoryName} />
      <div className="container">
        <table className="boardlist-common-tables">
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>

          <tbody id="boardlist-common-body">{displayBoardList}</tbody>
        </table>

        <div className="pagination-container">
          <ReactPaginate
            previousLabel={<FaAngleLeft />}
            nextLabel={<FaAngleRight />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-container"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disabled"}
            activeLinkClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
}

export default BasicBoardComponent;
