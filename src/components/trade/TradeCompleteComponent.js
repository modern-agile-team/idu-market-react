import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { BOARD_DETAIL_REQUEST, TRADE_COMMENT_GET_REQUEST, TRADE_COMPLETE_REQUEST } from '../../redux/types';

const TradeCompleteComponent = (props) => {
    const categoryName = props.match.params.categoryName;
    const num = props.match.params.num;

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const buyers = useSelector(state => state.trade.buyers);
    const { studentId, status } = useSelector(state => state.boards);

    useEffect(() => {
        if (categoryName === 'book' 
        || categoryName === 'device'
        || categoryName === 'clothes') {
            if(auth.id === studentId) {
                const body = {
                    categoryName,
                    num,
                };
        
                dispatch({
                    type: TRADE_COMMENT_GET_REQUEST,
                    payload: body,
                });
        
                dispatch({
                    type: BOARD_DETAIL_REQUEST,
                    payload: body,
                });
            } else {
                alert("잘못된 접근입니다.");
                props.history.push('/');
            }
        } else {
            alert("잘못된 접근입니다.");
            props.history.push('/');
        }

        if(status === 0 || status === 1) {
            alert("거래 완료 상태가 아닙니다.");
            props.history.push('/');
        }

    }, [dispatch, categoryName, num, props.history, status]);

    const onConfirmTrade = e => {
        const confirmBuyer = window.confirm(`${e.target.textContent}님으로 결정하시겠습니까?`);

        if(confirmBuyer) {
            const body = {
                categoryName,
                boardNum: num,
                studentId: e.target.textContent
            }

            dispatch({
                type: TRADE_COMPLETE_REQUEST,
                payload: body,
            });

            alert("거래가 종료되었습니다.");
        }
    }

    if (studentId) {
        if (studentId !== auth.id) {
            alert("잘못된 접근입니다.");
            props.history.push(`/boards/${categoryName}/${num}`);
        }
    }


    return (
        <section className="trade-complete" id="trade-complete">
            <div className="container">
                {buyers ? (
                    <h1 className="trade-buyer-number">{`구매 요청 인원 (${buyers.length - 1 === -1 ? 0 : buyers.length - 1})`}</h1>
                ) : (
                    <></>
                )}
                <div className="trade-buyer-box">
                    {buyers && studentId ?    (
                        <>
                            {buyers.map((buyer, index) => {
                                if (buyer.id !== studentId) {
                                    return (
                                        <div 
                                            className="trade-buyer" 
                                            key={index} 
                                            onClick={onConfirmTrade}
                                        >
                                            {buyer.id}
                                        </div>
                                    )
                                }
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </section>
    )
};

export default withRouter(TradeCompleteComponent);