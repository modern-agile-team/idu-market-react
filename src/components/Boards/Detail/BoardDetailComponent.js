import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import { editorConfiguration } from "../../Editor/EditorConfig";
import { BOARD_DETAIL_REQUEST } from "../../../redux/types";

const BoardDetailComponent = (props) => {
  const [tradeStatus, setTradeStatue] = useState("판매중");
  const categoryName = props.match.params.categoryName;
  const num = props.match.params.num;

  console.log(num);
  const boardDetail = useSelector((state) => state.boards);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: BOARD_DETAIL_REQUEST,
      payload: {
        categoryName,
        num,
      },
    });
  }, [dispatch]);

  const onTradeStatusClick = (e) => {
    e.preventDefault();
    setTradeStatue(e.target.textContent);
  };

  console.log(boardDetail);

  return (
    <section id="board-Detail" className="board-Detail">
      <div className="container">
        <div className="detail-top-box">
          {boardDetail ? (
            <h1 className="detail-title">{boardDetail.title}</h1>
          ) : (
            <h1 className="detail-title"></h1>
          )}

          <p className="detail-price">15000원</p>
          <div className="detail-btn-box">
            <button className="detail-btn-edit">수정</button>
            <button className="detail-btn-delete">삭제</button>
            <button className="detail-btn-list">목록</button>
          </div>
          <div className="detail-date">
            <p>작성일: 2020-03-15</p>
          </div>
          <div className="detail-trade-status-box">
            <ul>
              <li className="detail-trade-status">
                {tradeStatus}
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
        <div className="detail-edtior">
          <CKEditor
            editor={BalloonEditor}
            data={boardDetail.content}
            config={editorConfiguration}
            disabled="true"
          />
        </div>
      </div>
    </section>
  );
};

export default withRouter(BoardDetailComponent);
