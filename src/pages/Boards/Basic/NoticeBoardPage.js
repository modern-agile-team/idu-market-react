import React from 'react';
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import BasicBoardComponent from '../../../components/Boards/Basic/BasicBoardComponent';

const BoardPage = () => {
    
    return (
        <>
            <BoardBanner title="Board" desc="Notice" />
            <BasicBoardComponent categoryName="notice"/>
        </>
    );
};

export default BoardPage;