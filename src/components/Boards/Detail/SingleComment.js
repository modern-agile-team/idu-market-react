import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REPLY_UPLOAD_REQUEST,
  COMMENT_GET_REQUEST,
} from "../../../redux/types";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";

const SingleComment = ({ comment, categoryName, num }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id);

  const [formValue, setFormValue] = useState({
    content: "",
    studentId: "",
    categoryName,
    num,
    groupNum: comment.groupNum,
  });

  const [updateFormValue, setUpdateFormValue] = useState({
    content: comment.content,
    studentId: userId,
    categoryName,
    num,
    groupNum: comment.groupNum,
  });

  const [openReply, setOpenReply] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const resetValue = useRef(null);

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateChange = (e) => {
    setUpdateFormValue({
      ...updateFormValue,
      [e.target.name]: e.target.value,
    });
  };

  const onOpenReply = () => {
    setOpenReply(!openReply);
  };

  const onOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { content, categoryName, num, groupNum } = formValue;
    const body = {
      content,
      studentId: userId,
      categoryName,
      num,
      groupNum,
    };

    if (body.content.length === 0) {
      alert("댓글이 비었습니다.");
    } else {
      dispatch({
        type: REPLY_UPLOAD_REQUEST,
        payload: body,
      });

      setTimeout(() => {
        dispatch({
          type: COMMENT_GET_REQUEST,
          payload: body,
        });
      }, 100);

      resetValue.current.value = "";

      setFormValue({
        content: "",
        studentId: userId,
        categoryName,
        num,
      });
    }
  };

  const onUpdate = (e) => {
    e.preventDefault();

    const { content, categoryName, num, groupNum } = updateFormValue;

    const body = {
      content,
      studentId: userId,
      categoryName,
      num,
      groupNum,
    };

    console.log(body);

    setOpenUpdate(!openUpdate);
  };

  return (
    <>
      {comment && comment.depth === 0 ? (
        <>
          <div className="comment-box">
            <div className="comment-student-id">
              <span>{comment.studentId}</span>
            </div>
            <div className="comment-content">
              <span>{comment.content}</span>
            </div>
            <div className="comment-comment-date">
              <span>{comment.inDate}</span>
            </div>
            <button onClick={onOpenReply} className="reply-open-btn">
              reply
            </button>
            {userId === comment.studentId ? (
              <div className="comment-update-box">
                <button className="comment-update-icon" onClick={onOpenUpdate}>
                  <RiPencilLine />
                </button>
                <button className="comment-delete-icon">
                  <RiDeleteBin6Line />
                </button>
              </div>
            ) : (
              <></>
            )}

            {openUpdate ? (
              <div className="comment-submit-box">
                <textarea
                  type="textarea"
                  name="content"
                  id="comment-contents"
                  className="comment-contents"
                  onChange={onUpdateChange}
                  placeholder="Comment"
                  defaultValue={comment.content}
                />

                <button className="comment-submit-btn" onClick={onUpdate}>
                  Update
                </button>
              </div>
            ) : (
              <></>
            )}

            {openReply ? (
              <div className="comment-submit-box">
                <textarea
                  ref={resetValue}
                  type="textarea"
                  name="content"
                  id="comment-contents"
                  className="comment-contents"
                  onChange={onChange}
                  placeholder="Comment"
                />

                <button className="comment-submit-btn" onClick={onSubmit}>
                  Submit
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
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
          </div>
        </>
      )}
    </>
  );
};

export default SingleComment;
