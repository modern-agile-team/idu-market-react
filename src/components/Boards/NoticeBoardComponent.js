import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { tableData } from "./MOCK_DATA"
import { Link } from 'react-router-dom';
import ReactPaginate  from "react-paginate";
import SearchComponent from "./Layout/SearchComponent";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { NOTICEBOARD_GET_REQUEST } from "../../redux/types";
import { useDispatch, useSelector } from "react-redux";

function NoticeBoardComponent({ categoryName }) {
    const dispatch = useDispatch();
    const freeboard = useSelector((state) => state.market.data);

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pageVisited = pageNumber * usersPerPage
    const pageCount = Math.ceil(freeboard.length / usersPerPage);

    const changePage = ({selected}) => {
            setPageNumber(selected);
    }

    useEffect(() => {
        dispatch({
        type: NOTICEBOARD_GET_REQUEST,
        payload: categoryName,
        });
    }, [dispatch]);

    const displayUsers = freeboard
    .slice(pageVisited, pageVisited + usersPerPage)
    .map(user => {
        return (
        <tr key={user.num}>
            <td>{user.num}</td>
            <td className="boardlist-common-title"><Link to={`/boards/${categoryName}${user.num}`}>{user.title}</Link></td>
            <td>{user.studentName}</td>
            <td>{user.inDate}</td>
            <td>{user.hit}</td>
        </tr>
        );
    });

    return (
        <section id="boardlist-common" className="boardlist-common">
            <div className="freeboard-container">
                <div className="boardlist-common-search">
                    <SearchComponent categoryName={categoryName} />
                </div>
                
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
                        {displayUsers}
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

