import React from 'react';
import BoardBanner from '../../components/Boards/Layout/BoardBanner';
import PurchaseListComponent from '../../components/purchaseAndSaleList/PurchaseListComponent';

const PurchaseListPage = () => {
    return (
        <>
            <BoardBanner title="IUAM" desc="Purchase"></BoardBanner>
            <PurchaseListComponent></PurchaseListComponent>
        </>
    );
};

export default PurchaseListPage;