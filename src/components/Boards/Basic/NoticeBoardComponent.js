import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ReactPaginate  from "react-paginate";
import SearchComponent from "./SearchComponent";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { NOTICEBOARD_GET_REQUEST } from "../../../redux/types";
import { useDispatch, useSelector } from "react-redux";

function NoticeBoardComponent({ categoryName }) {
    const [pageNumber, setPageNumber] = useState(0);

    const dispatch = useDispatch();
    const noticeBoardList = useSelector((state) => state.boards.data);

    const usersPerPage = 10;
    const pageVisited = pageNumber * usersPerPage
    const pageCount = Math.ceil(noticeBoardList.length / usersPerPage);

    const changePage = ({selected}) => {
            setPageNumber(selected);
    }

    useEffect(() => {
        dispatch({
        type: NOTICEBOARD_GET_REQUEST,
        payload: categoryName,
        });
    }, [dispatch]);

    const displayBoardList = noticeBoardList
    .slice(pageVisited, pageVisited + usersPerPage)
    .map(boardItem => {
        return (
        <tr key={boardItem.num}>
            <td>{boardItem.num}</td>
            <td className="boardlist-common-title">
                <Link to={`/boards/${categoryName}/${boardItem.num}`}>{boardItem.title}</Link>
            </td>
            <td>{boardItem.studentId}</td>
            <td>{boardItem.inDate.substring(0, 10)}</td>
            <td>{boardItem.hit}</td>
        </tr>
        );
    });

    return (
        <section id="boardlist-common" className="boardlist-common">
            <div className="container">
                <SearchComponent categoryName={categoryName} />
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
                    <tbody id="boardlist-common-body">
                        {displayBoardList}
                    </tbody>
                </table>
                <div className= "boardlist-common-write" >
                </div>
               
                <div className="pagination-container">
                <ReactPaginate
                    previousLabel={<FaAngleLeft/>}
                    nextLabel={<FaAngleRight/>}
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
    )
}

export default NoticeBoardComponent;

