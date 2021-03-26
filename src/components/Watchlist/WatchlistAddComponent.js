import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { BOARD_WATCHLIST_ADD_REQUEST } from "../../redux/types";

function WatchlistAddComponent({ categoryName }) {
  const dispatch = useDispatch();
  const boardDetail = useSelector((state) => state.boards);
  const auth = useSelector((state) => state.auth);

  const onSubmitWatchlist = () => {
    const confirmWatchlist = window.confirm("관심목록에 추가하시겠습니까?");

    const body = {
      boardNum: boardDetail.num,
      categoryName: categoryName,
      studentId: auth.id,
    };

    if (confirmWatchlist) {
      dispatch({
        type: BOARD_WATCHLIST_ADD_REQUEST,
        payload: body,
      });
    }
  };

  return (
    <div className="watchlist-add-box" onClick={onSubmitWatchlist}>
      <AiFillHeart className="watchlist-btn-add" />
    </div>
  );
}

export default WatchlistAddComponent;
