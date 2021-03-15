import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import BoardDetailTop from './BoardDetailTop';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import { editorConfiguration } from "../../Editor/EditorConfig";
import { BOARD_DETAIL_REQUEST } from "../../../redux/types";

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
  }, [dispatch]);

  console.log(boardDetail);

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
      </div>
    </section>
  );
};

export default withRouter(BoardDetailComponent);
