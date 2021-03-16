import React, { useState, useRef } from 'react';

const CommentComponent = () => {
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
    );
};

export default CommentComponent;