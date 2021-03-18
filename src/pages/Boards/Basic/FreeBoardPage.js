
import React from 'react';
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import BasicBoardComponent from '../../../components/Boards/Basic/BasicBoardComponent';

const BoardPage = () => {
    
    return (
        <>
            <BoardBanner title="Board" desc="Free" />
            <BasicBoardComponent categoryName="free"/>
        </>
    );
};

export default BoardPage;