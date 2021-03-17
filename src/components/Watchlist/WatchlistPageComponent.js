import React, { useEffect, useState } from "react";
<<<<<<< HEAD

function Subscrition() {
=======
import BoardListItem from "../Boards/BoardListItem";


function WatchlistPageComponent() {
>>>>>>> develop
    const [productList, setProductList] = useState([]);
    
    return (
        <>
<<<<<<< HEAD
            <section className="subscribe" id="subscribe">
                <div className="container">
                    <span className="subscribe-title">관심목록</span>
=======
            <section className="watchlist" id="watchlist">
                <div className="container">
                    <span className="watchlist-title">관심목록</span>
                    <BoardListItem productList={productList}></BoardListItem>
>>>>>>> develop
                </div>
            </section>
        </>
    )
}

<<<<<<< HEAD
export default Subscrition
=======
export default WatchlistPageComponent
>>>>>>> develop
