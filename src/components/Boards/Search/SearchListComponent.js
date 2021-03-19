import React, { useEffect, useState } from "react";
import BoardListItem from "../BoardListItem";
import SearchComponent from "./SearchComponent";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SearchListComponent = (props) => {
  const categoryName = props.match.params.categoryName;
  const content = props.location.search.slice(9);

  const [pageNumber, setPageNumber] = useState(0);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  const perPage = 10;
  const pageVisited = pageNumber * perPage;
  const pageCount = Math.ceil(productList.length / perPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  useEffect(() => {
    axios
      .get(`/api/search?categoryName=${categoryName}&content=${content}`)
      .then((response) => {
        if (response.data.success) {
          const result = response.data.boards;
          console.log(result);

          setLoading(true);
          setProductList(result);
        }
      });
  }, [content]);

  const displayBoardList = productList
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
          <td>{boardItem.studentId}</td>
          <td>{boardItem.inDate.substring(0, 10)}</td>
          <td>{boardItem.hit}</td>
        </tr>
      );
    });

  return (
    <>
      <section className="market" id="market">
        {loading ? (
          <>
            <SearchComponent categoryName={categoryName} />

            {categoryName === 'free' || categoryName === 'notice' ? (
              <section id="boardlist-common" className="boardlist-common">
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
            ) : (
              <div className="container">
                <BoardListItem
                  productList={productList}
                  categoryName={categoryName}
                ></BoardListItem>
              </div>
            )}
          
          </>
        ) : (
          <>
            <div className="market-loading">
              <div className="spin"></div>
              <p className="market-loading-msg">Loading</p>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default withRouter(SearchListComponent);
