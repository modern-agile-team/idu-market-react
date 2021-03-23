import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  BOARD_DELETE_REQUEST,
  IMAGE_DELETE_REQUEST,
} from "../../../redux/types";

import WatchlistAddComponent from '../../Watchlist/WatchlistAddComponent';
import WatchlistDeleteComponent from "../../Watchlist/WathlistDeleteComponent";

const BoardDetailTop = ({ boardDetail, categoryName, num, match }) => {
  const dispatch = useDispatch();
  const creatorId = useSelector((state) => state.boards.studentId);
  const studentId = useSelector((state) => state.auth.id);

  const [tradeStatus, setTradeStatue] = useState("판매중");

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

  const onTradeStatusClick = (e) => {
    e.preventDefault();
    setTradeStatue(e.target.textContent);
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
        {creatorId === studentId ? (
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
          {creatorId === studentId ? (
            <div className="detail-trade-status-box">
              <ul>
                <li className="detail-trade-status">
                  {tradeStatus} <IoMdArrowDropdown />
                  <ul className="detail-trade-status-drop">
                    <li value="판매중" onClick={onTradeStatusClick}>
                      판매중
                    </li>
                    <li value="예약중" onClick={onTradeStatusClick}>
                      예약중
                    </li>
                    <li value="거래완료" onClick={onTradeStatusClick}>
                      거래완료
                    </li>
                  </ul>
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
          {creatorId === studentId ? (
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
