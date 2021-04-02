
import React from 'react';
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import BasicBoardComponent from '../../../components/Boards/Basic/BasicBoardComponent';
import { Helmet } from 'react-helmet';

const BoardPage = () => {
    
    return (
        <>
        <Helmet>
            <title>IUAM-(Free)</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Idu Used Article Market" />
            <meta name="keywords" content="Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 자유게시판" />
        </Helmet>
            <BoardBanner title="Board" desc="Free" />
            <BasicBoardComponent categoryName="free"/>
        </>
    );
};

export default BoardPage;