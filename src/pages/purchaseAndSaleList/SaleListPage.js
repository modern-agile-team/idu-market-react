import React from 'react';
import BoardBanner from '../../components/Boards/Layout/BoardBanner';
import SaleListComponent from '../../components/purchaseAndSaleList/SaleListComponent';
import { Helmet } from 'react-helmet';

const SaleListPage = () => {
    return (
        <>
            <Helmet>
                <title>IUAM-(SaleListPage)</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Idu Used Article Market" />
                <meta name="keywords" content="IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 관심목록, 판매목록, 구매목록" />
            </Helmet>
            <BoardBanner title="IUAM" desc="Sale"></BoardBanner>
            <SaleListComponent></SaleListComponent>
        </>
    );
};

export default SaleListPage;