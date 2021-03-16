import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardDetailTop from './BoardDetailTop';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import { editorConfiguration } from "../../Editor/EditorConfig";
import { BOARD_DETAIL_REQUEST, COMMENT_GET_REQUEST } from "../../../redux/types";
import CommentComponent from "./CommentComponent";

const BoardDetailComponent = (props) => {
  const categoryName = props.match.params.categoryName;
  const num = props.match.params.num;

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

    dispatch({
      type: COMMENT_GET_REQUEST,
      payload: {
        categoryName,
        num,
      },
    });
  }, []);

  return (
    <section id="board-Detail" className="board-Detail">
      <div className="container">
        <BoardDetailTop 
          boardDetail={boardDetail} 
          categoryName={categoryName}
        />

        <div className="detail-edtior">
          <CKEditor
            editor={BalloonEditor}
            data={boardDetail.content}
            config={editorConfiguration}
            disabled="true"
          />
        </div>
        <CommentComponent categoryName={categoryName} num={num}/>
      </div>
    </section>
  );
};

export default withRouter(BoardDetailComponent);
