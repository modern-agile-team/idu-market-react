import React, {useState, useEffect} from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import BoardListItem from '../../components/Boards/BoardListItem';



const WatchlistComponent = (props) => {
    const studentId = props.match.params.studentId
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
        .get(`/api/watchlist/${studentId}`)
        .then((response) => {
            console.log(response.data);
            if (response.data.success) {
            const result = response.data.boards;
            setLoading(true);
            setProductList(result);
            }
        })
        .catch(e => {
            console.log(e);
        })
    }, [studentId]);

    return (
        <section className="market" id="market">
            {loading ? (
                <>
                    <h1 className="watchlist-title">
                        {`관심 목록 (${productList.length})`}
                    </h1>
                    <div className="container">
                        <BoardListItem
                            productList={productList}
                            watchlist
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="market-loading">
                        <div className="spin"></div>
                        <p className="market-loading-msg">Loading</p>
                    </div>
                </>
            )}
        </section>
    );
};

export default withRouter(WatchlistComponent);