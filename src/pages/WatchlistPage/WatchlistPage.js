import React from "react";
import WatchlistComponent from "../../components/Watchlist/WatchlistComponent";
import BoardBanner from "../../components/Boards/Layout/BoardBanner";

const WatchlistPage = () => {
  return (
    <>
      <BoardBanner title="IUAM" desc="Watchlist" ></BoardBanner>
      <WatchlistComponent></WatchlistComponent>
    </>
  );
};

export default WatchlistPage;