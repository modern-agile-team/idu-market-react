import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import SearchComponent from "../Layout/SearchComponent";
import BoardListItem from "../BoardListItem";
import axios from "axios";

const DeviceListComponent = ({categoryName}) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  let [preItems, items] = [0, 8];

  const getMoreData = async () => {
    axios.get(`/api/boards/${categoryName}`).then((response) => {
      if (response.data.success) {
        const result = response.data.boards.slice(preItems, items);
        const mergedData = productList.concat(result);

        console.log(response.data);

        setLoading(true);
        setProductList(prev => prev.concat(mergedData));
      }
    });
  };

  const handleScroll = () => {
    const { documentElement } = document;
    const scrollHeight = documentElement.scrollHeight;
    const scrollTop = documentElement.scrollTop;
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      preItems = items;
      items += 8;

      getMoreData();
    }
  };

  useEffect(() => {
    getMoreData();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  
  return (
    <section className="market" id="market">
        {loading ? (
          <>
            <a href="#board-banner" className="scroll-top-btn">
              <AiOutlineArrowUp />
            </a>
            <SearchComponent categoryName={categoryName} />
            <div className="container">
              <BoardListItem productList={productList}></BoardListItem>
            </div>
          </>
        ) : (
          <>
            <div class="market-loading">
              <div class="spin"></div>
              <p className="market-loading-msg">Loading</p>
            </div>
          </>
        )}
      </section>
  );
};

export default DeviceListComponent;
