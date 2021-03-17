import React, { useEffect, useState } from "react";

function Subscrition() {
    const [productList, setProductList] = useState([]);
    
    return (
        <>
            <section className="subscribe" id="subscribe">
                <div className="container">
                    <span className="subscribe-title">관심목록</span>
                </div>
            </section>
        </>
    )
}

export default Subscrition
