import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  BOARD_DELETE_REQUEST,
  BOARD_STATUS_REQUEST,
  IMAGE_DELETE_REQUEST,
} from "../../../redux/types";

import WatchlistAddComponent from '../../Watchlist/WatchlistAddComponent';
import WatchlistDeleteComponent from "../../Watchlist/WathlistDeleteComponent";

const BoardDetailTop = ({ boardDetail, categoryName, num }) => {

  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const studentId = useSelector((state) => state.auth.id);

  const [tradeSentence, setTradeSentence] = useState("판매중");
  const [dropStatus, setDropStatus] = useState(false);

  useEffect(() => {
    if(boards.status === 0) {
      setTradeSentence("판매중");
    }
    else if(boards.status === 1) {
      setTradeSentence("예약중");
    }
    else if(boards.status === 2){
      setTradeSentence("거래완료");
    }
  }, [boards]);

  const deleteImage = () => {
    const imgList = [];
    const body = {
      url: [],
    };

    let data = boardDetail.content;

    while (true) {
      const matcher = data.match("<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>");

      if (matcher) {
        data = data.replace(matcher[0], "");
      } else break;

      imgList.push(matcher[1]);
    }

    body.url = [...imgList];

    if (body.url.length > 0) {
      dispatch({
        type: IMAGE_DELETE_REQUEST,
        payload: body,
      });
    }
  };

  const onTradeSentenceClick = (e) => {
    e.preventDefault();
    setTradeSentence(e.target.textContent);

    if(e.target.textContent === "판매중") {

      const body = {
        categoryName,
        num: boardDetail.num,
        status: 0
      };

      dispatch({
        type: BOARD_STATUS_REQUEST,
        payload: body,
      })
    }
    if (e.target.textContent === "예약중") {
      const body = {
        categoryName,
        num: boardDetail.num,
        status: 1

      };
      dispatch({
        type: BOARD_STATUS_REQUEST,
        payload: body,
      })
    }
    if (e.target.textContent === "거래완료") {
      const body = {
        categoryName,
        num: boardDetail.num,
        status: 2
      };

      dispatch({
        type: BOARD_STATUS_REQUEST,
        payload: body,
      })
    }
  };

  const onDelete = (e) => {
    e.preventDefault();

    const confirm = window.confirm("정말 게시물을 삭제하시겠습니까?");

    if (confirm) {
      deleteImage();

      dispatch({
        type: BOARD_DELETE_REQUEST,
        payload: {
          categoryName,
          num,
        },
      });
    }
  };

  return (
    <div className="detail-top-box">
      {boardDetail ? (
        <h1 className="detail-title">{boardDetail.title}</h1>
      ) : (
        <></>
      )}

      {categoryName === "free" || categoryName === "notice" ? (
        ""
      ) : (
        <p className="detail-price">{boardDetail.price}원</p>
      )}

      <div className="detail-btn-box">
        {boards.studentId === studentId ? (
          <>
            <Link
              to={`/boards/${categoryName}/${num}/update`}
              className="detail-btn-edit"
            >
              수정
            </Link>
            <button className="detail-btn-delete" onClick={onDelete}>
              삭제
            </button>
            <Link 
              to={`/boards/${categoryName}`} className="detail-btn-list">
              목록
            </Link>
          </>
        ) : (
          <>
            <Link to={categoryName === 'watchlist' ? `/watchlist/${studentId}` : `/boards/${categoryName}`} className="detail-btn-list">
              목록
            </Link>
          </>
        )}
      </div>

      <div className="detail-date-student">
        <p>
          <AiOutlineUser />
          &nbsp;{boardDetail.studentName}
        </p>
        <p>
          <BsCalendar />
          &nbsp;{boardDetail.inDate}
        </p>
      </div>

      {categoryName === "free" || categoryName === "notice" ? (
        <></>
      ) : (
        <>
          {boards.studentId === studentId ? (
            <div className="detail-trade-status-box">
              {boards.status === 2 ? (
                  <Link to={`/boards/${categoryName}/${num}/complete`} className="trade-complete-btn">거래완료</Link>
              ) : (
                <></>
              )}

              <ul>
                <li className="detail-trade-status" onClick={() => setDropStatus(!dropStatus)}>
                  {
                    (function() {
                      if (boards.status === 0) return (
                        <>
                          <span className="trade-status sale"></span> {tradeSentence}<IoMdArrowDropdown />
                        </>
                      ) 
                      if (boards.status === 1) return (
                        <>
                          <span className="trade-status reservation"></span> {tradeSentence}<IoMdArrowDropdown />
                        </>
                      ) 
                      if (boards.status === 2) return (
                        <>
                          <span className="trade-status complete"></span> {tradeSentence}<IoMdArrowDropdown />
                        </>
                      ) 
                    })()
                  }

                  {dropStatus ? (
                    <ul className="detail-trade-status-drop">
                      <li value="판매중" onClick={onTradeSentenceClick}>
                        <span className="trade-status sale"></span>판매중
                      </li>
                      <li value="예약중" onClick={onTradeSentenceClick}>
                        <span className="trade-status reservation"></span>예약중
                      </li>
                      <li value="거래완료" onClick={onTradeSentenceClick}>
                        <span className="trade-status complete"></span>거래완료
                      </li>
                    </ul>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </>
      )}

      {categoryName === "free" || categoryName === "notice" ? (
        <></>
      ) : (
        <>
          {boards.studentId === studentId ? (
            <></>
          ) : (
            categoryName === 'watchlist' ? (
              <WatchlistDeleteComponent />
            ) : (
              <WatchlistAddComponent categoryName={categoryName} />
            )
          )}
        </>
      )}
    </div>
  );
};

export default withRouter(BoardDetailTop);
