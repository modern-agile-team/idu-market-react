import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import BoardListItem from "../BoardListItem";
import axios from "axios";

const SearchComponent = ({ categoryName }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    content: "",
    categoryName,
  });

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   const { content, categoryName } = formValues;

  //   await axios
  //     .get(`/api/search?categoryName=${categoryName}&content=${content}`)
  //     .then((response) => {
  //       if (response.data.success) {
  //         const result = response.data.boards;
  //         console.log(result);

  //         setLoading(true);
  //         setProductList(result);
  //       }
  //     });
  // };

  return (
    <>
      <Link to={`/boards/${categoryName}/new`} className="upload-btn">
        <BiEditAlt className="upload-btn-icon" />
      </Link>
      <div className="market-search">
        <input
          type="text"
          name="content"
          className="market-search-input"
          onChange={onChange}
        />
        <span
          className={formValues.content ? "input-border fill" : "input-border"}
        />
        <label
          className={formValues.content ? "input-label fix" : "input-label"}
        >
          Search
        </label>
        <Link
          to={`/boards/${categoryName}/search/${formValues.content}`}
          className="markget-search-btn"
        >
          <BsSearch className="market-search-icon" />
        </Link>
      </div>
    </>
  );
};

export default SearchComponent;
