import axios from "axios";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

function WatchlistAddComponent({ categoryName }) {
  const boardDetail = useSelector((state) => state.boards);
  const auth = useSelector((state) => state.auth);

  const onSubmitWatchlist = () => {
    const confirmWatchlist = window.confirm("관심목록에 추가하시겠습니까?");
    const body = {
      boardNum: boardDetail.num,
      categoryName: categoryName,
    };

    if (confirmWatchlist) {
      axios
        .post(`/api/watchlist/${auth.id}`, body)
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
    <div className="watchlist-add-box" onClick={onSubmitWatchlist}>
      <AiFillHeart className="watchlist-btn-add" />
    </div>
  );
}

export default WatchlistAddComponent;
