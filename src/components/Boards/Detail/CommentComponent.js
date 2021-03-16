import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import SingleComment from './SingleComment'

const CommentComponent = ({}) => {
    const commentList = useSelector(state => state.comment.comments[0])
    const [formValue, setFormValue] = useState({
        contents: "",
    });
    
    const resetValue = useRef(null);

    const onChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <>
            {commentList ? commentList.map((comment) => {
                return (
                    <SingleComment comment={comment} key={comment.commentNum} /> 
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
                    // innerRef={resetValue}
                    type="textarea"
                    name="contents"
                    id="comment-contents"
                    className="comment-contents"
                    onChange={onChange}
                    placeholder="Comment"
                />
                <button className="comment-submit-btn">
                    Submit
                </button>
            </div>
        </form>
      </>
    );
};

export default CommentComponent;