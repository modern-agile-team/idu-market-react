import React from 'react';
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import NoticeBoardComponent from '../../../components/Boards/Basic/NoticeBoardComponent';

const BoardPage = () => {
    
    return (
        <>
            <BoardBanner title="Board" desc="Notice" />
            <NoticeBoardComponent categoryName="notice"/>
        </>
    );
};

export default BoardPage;