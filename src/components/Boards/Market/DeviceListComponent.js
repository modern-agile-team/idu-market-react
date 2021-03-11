import React, { Component } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import SearchComponent from "../Layout/SearchComponent";
import BoardListItem from "../BoardListItem";
import axios from "axios";

class DeviceListComponent extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      items: 8,
      preItems: 0,
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

        console.log(response.data);

        this.setState({
          productList: [...productList, ...result],
        });
      }
    });
  };

  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { items } = this.state;

    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );

    const scrollTop = documentElement.scrollTop;
    const clientHeight = documentElement.clientHeight;

    console.log(scrollTop + clientHeight);
    console.log(scrollHeight);

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
    const { productList } = this.state;

    return (
      <section className="market" id="market">
        <a href="#board-banner" className="scroll-top-btn">
          <AiOutlineArrowUp />
        </a>
        <SearchComponent categoryName={categoryName} />
        <div className="container">
          <BoardListItem productList={productList}></BoardListItem>
        </div>
      </section>
    );
  }
}

export default DeviceListComponent;
