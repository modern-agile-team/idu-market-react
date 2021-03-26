import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

function WatchlistDeleteComponent(props) {
  const boardDetail = useSelector((state) => state.boards);
  const auth = useSelector((state) => state.auth);

  const onDeleteWatchlist = () => {
    const confirmWatchlist = window.confirm("관심목록에서 제거하시겠습니까?");

    if (confirmWatchlist) {
      axios
        .delete(`/api/watchlist/${auth.id}`, {
          data: {
            boardNum: boardDetail.num,
          },
        })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.msg);
          }
        })
        .catch((err) => {
          const response = err.response;
          alert(response.data.msg);
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
