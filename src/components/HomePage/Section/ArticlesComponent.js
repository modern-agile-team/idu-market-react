import React from "react";
import { Link } from "react-router-dom";
import { BsBookHalf } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { BsLaptop } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

const ArticlesComponent = () => {
  return (
    <section id="home-articles " className="home-articles">
      <div className="container">
        <h1 className="article-title">ARTICLES</h1>
        <div className="article-box">
          <div className="article-item-box box1">
            <p className="article-item-icon">
              <BsBookHalf />
            </p>
            <h2 className="article-item-title">Book</h2>
            <Link to="/">
              <FaArrowCircleRight className="article-btn" />
            </Link>
          </div>
          <div className="article-item-box box2">
            <p className="article-item-icon">
              <GiClothes />
            </p>
            <h2 className="article-item-title">Clothes</h2>
            <Link to="/">
              <FaArrowCircleRight className="article-btn" />
            </Link>
          </div>
          <div className="article-item-box box3">
            <p className="article-item-icon">
              <BsLaptop />
            </p>
            <h2 className="article-item-title">Device</h2>
            <Link to="/">
              <FaArrowCircleRight className="article-btn" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesComponent;
