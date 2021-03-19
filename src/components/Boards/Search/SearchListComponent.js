import React, { useEffect, useState } from "react";
import BoardListItem from "../BoardListItem";
import SearchComponent from "./SearchComponent";
import axios from "axios";
import { withRouter } from "react-router-dom";

const SearchListComponent = (props) => {
  const categoryName = props.match.params.categoryName;
  const content = props.match.params.content;

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(categoryName, content);
    axios
      .get(`/api/search?categoryName=${categoryName}&content=${content}`)
      .then((response) => {
        if (response.data.success) {
          const result = response.data.boards;
          console.log(result);

          setLoading(true);
          setProductList(result);
        }
      });
  }, [content]);
  return (
    <>
      <section className="market" id="market">
        {loading ? (
          <>
            <SearchComponent categoryName={categoryName}></SearchComponent>
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
    </>
  );
};

export default withRouter(SearchListComponent);
