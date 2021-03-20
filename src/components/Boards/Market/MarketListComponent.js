import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import BoardListItem from "../BoardListItem";
import axios from "axios";
import SearchComponent from "../Search/SearchComponent";

const MarketListComponent = ({ categoryName }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    content: "",
    categoryName,
  });

  const LAST_COUNT = 9;

  let isLoading = false;
  let lastNum = 0;

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const getMoreData = useCallback(async () => {
    isLoading = true;

    await axios
      .get(`/api/boards/${categoryName}?lastNum=${lastNum}`)
      .then((response) => {
        if (response.data.success) {
          const result = response.data.boards;

          if (result.length < 10) {
            window.removeEventListener("scroll", handleScroll);
          } else {
            lastNum = result[LAST_COUNT].num;
          }
          setLoading(true);
          setProductList((prev) => [...prev, ...result]);
        }
      });
    isLoading = false;
  }, []);

  const handleScroll = useCallback(() => {
    const { documentElement } = document;
    const scrollHeight = documentElement.scrollHeight;
    const scrollTop = documentElement.scrollTop;
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight + 200 >= scrollHeight && isLoading === false) {
      getMoreData();
    }
  }, []);

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    getMoreData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setLoading(false);
    };
  }, []);

  return (
    <section className="market" id="market">
      {loading ? (
        <>
          <button className="scroll-top-btn" onClick={scrollTop}>
            <AiOutlineArrowUp />
          </button>
          <SearchComponent categoryName={categoryName}/>
          <div className="container">
            <BoardListItem
              productList={productList}
              categoryName={categoryName}
            ></BoardListItem>
          </div>
        </>
      ) : (
        <>
          <div className="market-loading">
            <div className="spin"></div>
            <p className="market-loading-msg">Loading</p>
          </div>
        </>
      )}
    </section>
  );
};

export default MarketListComponent;
