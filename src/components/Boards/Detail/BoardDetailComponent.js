import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardDetailTop from "./BoardDetailTop";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import { editorConfiguration } from "../../Editor/EditorConfig";
import {
  BOARD_DETAIL_REQUEST,
  COMMENT_GET_REQUEST,
} from "../../../redux/types";
import CommentComponent from "../Comment/CommentComponent";

const BoardDetailComponent = (props) => {
  const categoryName = props.match.params.categoryName;
  const num = props.match.params.num;
  const studentId = props.match.params.studentId;

  const boardDetail = useSelector((state) => state.boards);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (studentId === "not-login") {
      alert("로그인 후에 이용하실 수 있습니다.");
      props.history.push("/login");
    }

    if (auth.id.length !== 0) {
      if (studentId === auth.id) {
        dispatch({
          type: BOARD_DETAIL_REQUEST,
          payload: {
            categoryName,
            num,
            studentId: auth.id,
          },
        });

        dispatch({
          type: COMMENT_GET_REQUEST,
          payload: {
            categoryName,
            num,
            studentId: auth.id,
          },
        });
      }
    }
  }, [dispatch, categoryName, num, props.history, auth.id]);

  return (
    <section id="board-Detail" className="board-Detail">
      <div className="container">
        <BoardDetailTop
          boardDetail={boardDetail}
          categoryName={categoryName}
          num={num}
        />

        <div className="detail-edtior">
          <CKEditor
            editor={BalloonEditor}
            data={boardDetail.content}
            config={editorConfiguration}
            disabled="true"
          />
        </div>
        <CommentComponent categoryName={categoryName} num={num} />
      </div>
    </section>
  );
};

export default withRouter(BoardDetailComponent);
