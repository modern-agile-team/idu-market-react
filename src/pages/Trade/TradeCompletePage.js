import React from 'react';
import TradeCompleteComponent from '../../components/trade/TradeCompleteComponent';
import BoardBanner from "../../components/Boards/Layout/BoardBanner";

const TradeCompletePage = () => {

    return (
        <>
            <BoardBanner title="IUAM" desc="Complete" />
            <TradeCompleteComponent />
        </>
    );
};

export default TradeCompletePage;