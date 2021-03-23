import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai'

function WatchlistBtnComponent(props) {

  const onWatchlist = () => {
    const confirmWatchlist = window.confirm("관심목록에 추가하시겠습니까?");

    if(confirmWatchlist) {
      console.log('hi');
    }
  }

  return (
      <div className="watchlist-btn-box" onClick={onWatchlist}>
        <AiFillHeart className="watchlist-btn" />
      </div>
  )
}

export default WatchlistBtnComponent;
