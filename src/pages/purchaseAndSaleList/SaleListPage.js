import React from 'react';
import BoardBanner from '../../components/Boards/Layout/BoardBanner';
import SaleListComponent from '../../components/purchaseAndSaleList/SaleListComponent';

const PurchaseListPage = () => {
    return (
        <>
            <BoardBanner title="IUAM" desc="Sale"></BoardBanner>
            <SaleListComponent></SaleListComponent>
        </>
    );
};

export default PurchaseListPage;