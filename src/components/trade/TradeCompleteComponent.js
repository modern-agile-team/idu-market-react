import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BOARD_DETAIL_REQUEST,
  TRADE_COMMENT_GET_REQUEST,
  TRADE_COMPLETE_REQUEST,
} from "../../redux/types";

const TradeCompleteComponent = (props) => {
  const categoryName = props.match.params.categoryName;
  const num = props.match.params.num;
  // const studentId = props.match.params.studentId;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const buyers = useSelector((state) => state.trade.buyers);
  const { studentId, status, nickname } = useSelector((state) => state.boards);

  console.log(studentId);

  useEffect(() => {
    const body = {
      categoryName,
      num,
    };

    if (studentId.length === 0) {
      dispatch({
        type: BOARD_DETAIL_REQUEST,
        payload: body,
      });
    } else {
      if (
        categoryName === "book" ||
        categoryName === "device" ||
        categoryName === "clothes"
      ) {
        if (status === 0 || status === 1) {
          alert("거래 완료 상태가 아닙니다.");
          props.history.push("/");
        }

        if (auth.id !== studentId) {
          alert("잘못된 접근입니다.");
          props.history.push("/");
        } else {
          dispatch({
            type: TRADE_COMMENT_GET_REQUEST,
            payload: body,
          });
        }
      } else {
        alert("잘못된 접근입니다.");
        props.history.push("/");
      }
    }
  }, [dispatch, categoryName, num, status, auth.id, studentId, props.history]);

  const onConfirmTrade = (e) => {
    const confirmBuyer = window.confirm(
      `${e.target.textContent}님으로 결정하시겠습니까?`
    );

    if (confirmBuyer) {
      const body = {
        categoryName,
        boardNum: num,
        nickname: e.target.textContent,
      };

      dispatch({
        type: TRADE_COMPLETE_REQUEST,
        payload: body,
      });

      alert("거래가 종료되었습니다.");
    }
  };

  return (
    <section className="trade-complete" id="trade-complete">
      <div className="container">
        {buyers ? (
          <h1 className="trade-buyer-number">{`구매 요청 인원 (${(function () {
            let count = 0;

            if (buyers.length === 1) {
              if(buyers[0].nickname === nickname) {
                return count = 0;
              }
            }
            for (let el in buyers) {
              if (el !== nickname) count++;
              return count;
            }
            if (buyers.length === 0) {
              return count = 0;
            }
          })()})`}</h1>
        ) : (
          <></>
        )}
        <div className="trade-buyer-box">
          {buyers && nickname ? (
            <>
              {buyers.map((buyer, index) => {
                if (buyer.nickname !== nickname) {
                  return (
                    <div
                      className="trade-buyer"
                      key={index}
                      onClick={onConfirmTrade}
                    >
                      {buyer.nickname}
                    </div>
                  );
                } else return null;
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default withRouter(TradeCompleteComponent);
