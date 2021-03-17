import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function WatchlistBtnComponent(props) {
    const [WatchlistNumber, setWatchlistNumber] = useState(0);
    const [watchlisted, setWatchlisted] = useState(false);

    const onSubscribe = () => {
        if (watchlisted) {
            setWatchlistNumber(WatchlistNumber - 1);
            setWatchlisted(!watchlisted);
        } else {
            setWatchlistNumber(WatchlistNumber + 1);
            setWatchlisted(!watchlisted);
        }
    }

    return (
        <>  
            <section className="watchlist-btn">
                <div className="container">
                    <button className="watchlist-btn-watch"
                        style={{
                            backgroundColor: `${watchlisted ? '#E03030' : '#EFEFEF'}`,
                            borderRadius: '10px',
                            color: `${watchlisted ? '#fff' : '#222'}`,
                            border: 'none',
                            outline: 'none',
                            fontSize: "1.1rem",
                            
                        }}
                        onClick={onSubscribe}
                    >
                        {watchlisted ? [<AiFillHeart size="16" />] : [<AiOutlineHeart size="16"/>]} {WatchlistNumber} 
                    </button>
                </div>
            </section>
        </>
    )
}

export default WatchlistBtnComponent;
