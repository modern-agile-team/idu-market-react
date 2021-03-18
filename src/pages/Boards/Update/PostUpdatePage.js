import React from 'react';
import PostUpdateComponent from '../../../components/Boards/Update/PostUpdateComponent';
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";

const PostUpdatePage = () => {
    return (
        <>
            <BoardBanner title="IUAM" desc="Update" />
            <PostUpdateComponent></PostUpdateComponent>
        </>
    );
};

export default PostUpdatePage;