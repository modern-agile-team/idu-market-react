import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const SearchComponent = ({ categoryName }) => {
  const [formValues, setFormValues] = useState({
    search: "",
  });

  const onChange = (e) => {
    setFormValues({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Link to={`/boards/${categoryName}/new`} className="upload-btn">
        <BiEditAlt className="upload-btn-icon" />
      </Link>
      <div className="market-search">
        <input
          type="text"
          name="search"
          className="market-search-input"
          onChange={onChange}
        />
        <span
          className={formValues.search ? "input-border fill" : "input-border"}
        />
        <label
          className={formValues.search ? "input-label fix" : "input-label"}
        >
          Search
        </label>
        <button type="submit" className="markget-search-btn">
          <BsSearch className="market-search-icon" />
        </button>
      </div>
    </>
  );
};

export default SearchComponent;
