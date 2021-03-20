import React, { useState } from "react";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  COMMENT_GET_REQUEST,
  COMMENT_UPDATE_REQUEST,
  COMMENT_DELETE_REQUEST,
} from "../../../redux/types";

const ReplyComment = ({ comment, num, categoryName }) => {
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  const [openUpdate, setOpenUpdate] = useState(false);
  
  const [updateFormValue, setUpdateFormValue] = useState({
    content: comment.content,
    studentId: userId,
    commentNum: comment.num,
    categoryName,
    num,
    groupNum: comment.groupNum,
  });
  
  const onOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const onUpdateChange = (e) => {
    setUpdateFormValue({
      ...updateFormValue,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdate = (e) => {
    e.preventDefault();

    console.log(comment);
    const {
      content,
      categoryName,
      num,
      groupNum,
      commentNum,
    } = updateFormValue;

    const body = {
      content,
      studentId: userId,
      categoryName,
      commentNum,
      num,
      groupNum,
    };

    if (body.content.length === 0) {
      alert("댓글이 비었습니다.");
    } else {
      dispatch({
        type: COMMENT_UPDATE_REQUEST,
        payload: body,
      });

      setTimeout(() => {
        dispatch({
          type: COMMENT_GET_REQUEST,
          payload: body,
        });
      }, 100);
    }

    setOpenUpdate(!openUpdate);
  };

  const onDelete = (e) => {
    e.preventDefault();

    const body = {
      commentNum: comment.num,
      categoryName,
      num,
      studentId: userId,
      depth: comment.depth,
    };

    dispatch({
      type: COMMENT_DELETE_REQUEST,
      payload: body,
    });
    
    alert("답글이 삭제되었습니다.");

    setTimeout(() => {
      dispatch({
        type: COMMENT_GET_REQUEST,
        payload: body,
      });
    }, 100);

  };

  return (
    <>
      <div className="reply-box">
        <div className="comment-student-id">
          <span>{comment.studentId}</span>
        </div>
        <div className="comment-content">
          <span>{comment.content}</span>
        </div>
        <div className="comment-comment-date">
          <span>{comment.inDate}</span>
        </div>

        {openUpdate ? (
          <div className="comment-submit-box">
            <textarea
              type="textarea"
              name="content"
              id="comment-contents"
              className="comment-contents update"
              onChange={onUpdateChange}
              placeholder="Comment"
              defaultValue={comment.content}
            />

            <button className="comment-submit-btn update" onClick={onUpdate}>
              Update
            </button>
          </div>
        ) : (
          <></>
        )}

        {userId === comment.studentId ? (
          <div className="comment-update-box">
            <button className="comment-update-icon" onClick={onOpenUpdate}>
              <RiPencilLine />
            </button>
            <button className="comment-delete-icon" onClick={onDelete}>
              <RiDeleteBin6Line />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ReplyComment;
