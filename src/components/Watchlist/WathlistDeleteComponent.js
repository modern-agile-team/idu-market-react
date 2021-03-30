import React from "react";
import { withRouter } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { BOARD_WATCHLIST_DELETE_REQUEST } from "../../redux/types";

function WatchlistDeleteComponent(props) {
  const dispatch = useDispatch();
  const boardDetail = useSelector((state) => state.boards);
  const auth = useSelector((state) => state.auth);

  const onDeleteWatchlist = () => {
    const confirmWatchlist = window.confirm("관심목록에서 제거하시겠습니까?");

    const body = {
      boardNum: boardDetail.num,
      studentId: auth.id,
    };

    if (confirmWatchlist) {
      dispatch({
        type: BOARD_WATCHLIST_DELETE_REQUEST,
        payload: body,
      });
    }
  };

  return (
    <div className="watchlist-delete-box" onClick={onDeleteWatchlist}>
      <AiFillHeart className="watchlist-btn-delete" />
    </div>
  );
}

export default withRouter(WatchlistDeleteComponent);
