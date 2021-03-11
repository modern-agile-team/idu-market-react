
import React from 'react';
import BoardBanner from "../../components/Boards/Layout/BoardBanner";
import FreeBoardComponent from '../../components/Boards/FreeBoardComponent';

const BoardPage = () => {
    
    return (
        <>
            <BoardBanner title="Board" desc="Free" />
            <FreeBoardComponent categoryName="free"/>
        </>
    );
};

export default BoardPage;