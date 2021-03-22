import React, { useEffect, useState } from "react";
import BannerImage from "../../../img/main-banner.png";

const MainBannerComponent = () => {
  const [show, setShow] = useState(false);

  setTimeout(() => setShow(true), 400);

  return (
    <section id="main-banner" className="main-banner">
      <div className="banner-title">
        <h1>
          <span>Idu</span> Used Article Marke<em>t</em>
        </h1>
        <p className={show ? "show" : ""}>by. Woowahan Agile</p>
      </div>
      <div className="banner-img">
        <img className="show" src={BannerImage} alt="배너 이미지" />
        <a href="#home-function">START</a>
      </div>
    </section>
  );
};

export default MainBannerComponent;
