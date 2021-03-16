import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ReplyComment from './ReplyComment';

const SingleComment = ({ comment }) => {
    const [formValue, setFormValue] = useState({
        contents: "",
    });
    const [openReply, setOpenReply] = useState(false);

    const onChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value,
        })
    }

    const onOpenReply = e => {
        setOpenReply(!openReply);
    }

    return (
        <>
            {comment && comment.commentDepth === 0 ? (                
                <>
                    <div className="comment-box">
                        <div className="comment-student-id">
                            <span>{comment.studentId}</span>
                        </div> 
                        <div className="comment-content">
                            <span>{comment.commentContent}</span>
                        </div> 
                        <div className="comment-comment-date">
                            <span>{comment.commentInDate}</span>
                        </div> 
                        <button onClick={onOpenReply} className="reply-open-btn">reply</button>

                        {openReply ? (
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
                        ) : (
                            <></>
                        )}
                    </div>
                </>          
                ) : (
                    <>
                        <ReplyComment comment={comment} openReply={openReply} />
                    </>
                )
            }
        </>
    );
};

export default SingleComment;