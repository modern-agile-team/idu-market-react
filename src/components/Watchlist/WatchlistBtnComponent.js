import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

<<<<<<< HEAD
function WatchlistBtnComponent(props) {
    const [WatchlistNumber, setWatchlistNumber] = useState(0);
    const [watchlisted, setWatchlisted] = useState(false);
=======
function WatchlistComponent(props) {

    const variable = {
        studentId : props.studentId,
    };
    
    const [WatchlistNumber, setWatchlistNumber] = useState(0);
    const [watchlisted, setwatchlisted] = useState(false);

    useEffect(() => {
        axios.post('/api/watchlist', variable)
            .then(response => {
                if (response.data.success) {
                    setWatchlistNumber(response.data.WatchlistNumber)
                } else {
                    alert('관심 수 정보를 가져오지 못했습니다.');
                }
            })

        axios.post('/api/watchlist', variable)
            .then(response => {
                if (response.data.success) {
                    setwatchlisted(response.data.watchlisted);
                } else {
                    alert('정보를 가져오지 못했습니다.');
                }
            })
    }, [])
>>>>>>> develop

    const onSubscribe = () => {
        if (watchlisted) {
            setWatchlistNumber(WatchlistNumber - 1);
<<<<<<< HEAD
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
=======
            setwatchlisted(!watchlisted);
        } else {
            setWatchlistNumber(WatchlistNumber + 1);
            setwatchlisted(!watchlisted);
        }
        // let watchlistedVariable = {
        //     studentId: props.studentId,
        //     userFrom: props.userFrom,
        // }

        // if (watchlisted) {
        //     axios.post('/api/watchlist/add', watchlistedVariable)
        //         .then(response => {
        //             if (response.data.success) {
        //                 setWatchlistNumber(WatchlistNumber - 1);
        //                 setwatchlisted(!watchlisted);
        //             } else {
        //                 alert('구독 취소 하는데 실패하였습니다.')
        //             }
        //         })
        // } else {
        //     axios.post('/api/watchlist/delete', watchlistedVariable)
        //         .then(response => {
        //             if (response.data.success) {
        //                 setWatchlistNumber(WatchlistNumber + 1);
        //                 setwatchlisted(!watchlisted);
        //             } else {
        //                 alert('구독 하는데 실패하였습니다.')
        //             }
        //         })
                
        // }
    }



    return (
        <>
            <button
                style={{
                    backgroundColor: `${watchlisted ? '#E03030' : '#999'}`,
                    borderRadius: '4px',
                    color: '#fff',
                    border: 'none',
                    outline: 'none',
                    width:'50px',
                    height:"40px",
                    fontSize:"1.1rem",
                    cursor: 'pointer',
                    fontFamily:"'Jua', sans-serif"
                }}
                onClick={onSubscribe}
            >
                {WatchlistNumber} {watchlisted ? [<AiFillHeart size="22" />] : [<AiOutlineHeart size="22"/>] }
            </button>
>>>>>>> develop
        </>
    )
}

<<<<<<< HEAD
export default WatchlistBtnComponent;
=======
export default WatchlistComponent;
>>>>>>> develop
