import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { BOARD_DELETE_REQUEST } from '../../../redux/types';

const BoardDetailTop = ({ boardDetail, categoryName, num }) => {
  const dispatch = useDispatch();
  const [tradeStatus, setTradeStatue] = useState("판매중");

  // const extractImage = () => {
  //   let whereImgStart = boardDetail.content.indexOf("<img src=");
  //   const extName = [
  //     "jpeg",
  //     "png",
  //     "jpg",
  //     "gif",
  //     "PNG",
  //     "JPEG",
  //     "JPG",
  //     "GIF",
  //   ];

  //   let whereImgEnd = "";
  //   let extNameFind = "";
  //   let resultImgUrl = "";

  //   for (let i = 0; i < extName.length; i++) {
  //     if (boardDetail.content.includes(extName[i])) {
  //       extNameFind = extName[i];
  //       whereImgEnd = boardDetail.content.indexOf(`${extName[i]}`);
  //     }
  //   }

  //   if (extNameFind === "jpeg" || extNameFind === "JPEG") {
  //     resultImgUrl = boardDetail.content.slice(whereImgStart + 10, whereImgEnd + 4);
  //   } else {
  //     resultImgUrl = boardDetail.content.slice(whereImgStart + 10, whereImgEnd + 3);
  //   }

  //   boardDetail.content.replace(resultImgUrl, "234");
  //   console.log(resultImgUrl);
  //   console.log(boardDetail.content);
  // }

  const onTradeStatusClick = (e) => {
      e.preventDefault();
      setTradeStatue(e.target.textContent);
    };

  const onDelete = e => {
    e.preventDefault();

    dispatch({
      type: BOARD_DELETE_REQUEST,
      payload: {
        categoryName,
        num,
      }
    })
    

  }

  return (
      <div className="detail-top-box">
        {boardDetail ? (
          <h1 className="detail-title">{boardDetail.title}</h1>
        ) : (
          <h1 className="detail-title"></h1>
        )}

        {categoryName === 'free' || categoryName === 'notice' ? (
            ""
        ): (
          <p className="detail-price">{boardDetail.price}원</p>
        )}

        <div className="detail-btn-box">
          <button className="detail-btn-edit">수정</button>
          <button className="detail-btn-delete" onClick={onDelete}>삭제</button>
          <Link to={`/boards/${categoryName}`} className="detail-btn-list">목록</Link>
        </div>

        <div className="detail-date-student">
          <p><AiOutlineUser />&nbsp;{boardDetail.studentName}</p>
          <p><BsCalendar />&nbsp;{boardDetail.inDate}</p>
        </div>

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
      </div>
  );
};

export default withRouter(BoardDetailTop);