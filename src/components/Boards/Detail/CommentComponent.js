import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COMMENT_GET_REQUEST, COMMENT_UPLOAD_REQUEST } from '../../../redux/types';

import SingleComment from './SingleComment'

const CommentComponent = ({ categoryName, num }) => {
    const dispatch = useDispatch();
    const commentList = useSelector(state => state.comment.comments)
    const userId = useSelector(state => state.auth.id);

    const [formValue, setFormValue] = useState({
        content: "",
        studentId: "",
    });
    
    const resetValue = useRef(null);

    const onChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value,
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        const {content} = formValue;
        const body =  {
            content,
            studentId: userId,
            categoryName,
            num,
        }

        if (body.content.length === 0) {
            alert("댓글이 비었습니다.");
        } else {
            dispatch({
                type: COMMENT_UPLOAD_REQUEST,
                payload: body,
            });

            resetValue.current.value = '';

            setFormValue({
                content: "",
                studentId: userId,
            });
        }
    }
    
    return (
        
        <>
            {commentList ? commentList.map((comment, index) => {
                return (
                    <SingleComment 
                        comment={comment} 
                        key={index} 
                        categoryName={categoryName}
                        num={num}
                    /> 
                )
            }) : (
                <></>
            )}
        
        <form className="detail-comment">
            <h1 className="comment-title">
                Write comments
            </h1>
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
        </form>
      </>
    );
};

export default CommentComponent;