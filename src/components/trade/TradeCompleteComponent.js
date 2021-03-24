import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { TRADE_COMMET_GET_REQUEST } from '../../redux/types';

const TradeCompleteComponent = (props) => {
    const categoryName = props.match.params.categoryName;
    const num = props.match.params.num;
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const datalist = [
        {
            id: 'ssi02014'
        },
        {
            id: 'woorim123',
        },
        {
            id: 'jiwon',
        }
    ];

    useEffect(() => {
        const body = {
            categoryName,
            num,
        }

        dispatch({
            type: TRADE_COMMET_GET_REQUEST,
            payload: body,
        })
    }, [dispatch, auth.id, categoryName, num]);

    return (
        <section className="trade-complete" id="trade-complete">
            <div className="container">
                <h1 className="trade-buyer-number">{`구매 요청 인원 (${datalist.length})`}</h1>
                <div className="trade-buyer-box">
                    {datalist.map((data, index) => {
                        return (
                            <div className="trade-buyer" key={index}>
                                {data.id}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default withRouter(TradeCompleteComponent);