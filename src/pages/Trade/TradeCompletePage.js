import React from 'react';
import TradeCompleteComponent from '../../components/trade/TradeCompleteComponent';
import BoardBanner from "../../components/Boards/Layout/BoardBanner";
import { Helmet } from 'react-helmet';

const TradeCompletePage = () => {

    return (
        <>
            <Helmet>
                <title>IUAM-(TradeComplete)</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Idu Used Article Market" />
                <meta name="keywords" content="Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 완료" />
            </Helmet>
            <BoardBanner title="IUAM" desc="Complete" />
            <TradeCompleteComponent />
        </>
    );
};

export default TradeCompletePage;