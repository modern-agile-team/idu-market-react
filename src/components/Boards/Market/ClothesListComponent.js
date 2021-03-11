import React, { Component } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import SearchComponent from "../Layout/SearchComponent";
import BoardListItem from "../BoardListItem";
import axios from "axios";

class ClothesListComponent extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      items: 8,
      preItems: 0,
      loading: false,
    };
  }

  componentDidMount() {
    this.getData();
    window.addEventListener("scroll", this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  getData = () => {
    const { preItems, items, productList } = this.state;
    const { categoryName } = this.props;

    axios.get(`/api/boards/${categoryName}`).then((response) => {
      if (response.data.success) {
        const result = response.data.boards.slice(preItems, items);

        this.setState({
          productList: [...productList, ...result],
          loading: true,
        });
      }
    });
  };

  infiniteScroll = () => {
    const { documentElement } = document;
    const { items } = this.state;

    const scrollHeight = documentElement.scrollHeight;
    const scrollTop = documentElement.scrollTop;
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight + 0.65 >= scrollHeight) {
      this.setState({
        preItems: items,
        items: items + 8,
      });

      this.getData();
    }
  };

  render() {
    const { categoryName } = this.props;
    const { productList, loading } = this.state;

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
          <div class="market-loading">
            <div class="spin"></div>
            <p className="market-loading-msg">Loading</p>
          </div>
        )
      }
      </section>
    );
  }
}

export default ClothesListComponent;
