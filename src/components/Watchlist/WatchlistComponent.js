import React, { useEffect, useState } from "react";

import BoardListItem from "../Boards/BoardListItem";


function WatchlistComponent() {

    const [productList, setProductList] = useState([]);
    
    return (
        <>
            <section className="watchlist" id="watchlist">
                <div className="container">
                    <span className="watchlist-title">관심목록</span>
                    <BoardListItem productList={productList}></BoardListItem>

                </div>
            </section>
        </>
    )
}

export default WatchlistComponent
