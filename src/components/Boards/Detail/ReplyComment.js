import React, {useState} from 'react';

const ReplyComment = ({ comment }) => {
    // const [openReply, setOpenReply] = useState(false);

    // const onOpenReply = e => {
    //     setOpenReply(!openReply);
    // }

    return (
        <>
            <div className="reply-box">
                <div className="comment-student-id">
                    <span>{comment.studentId}</span>
                </div> 
                <div className="comment-content">
                    <span>{comment.commentContent}</span>
                </div> 
                <div className="comment-comment-date">
                    <span>{comment.commentInDate}</span>
                </div> 
            </div>
        </>
    );
};

export default ReplyComment;