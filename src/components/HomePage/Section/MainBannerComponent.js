import React from "react";

const MainBannerComponent = () => {
  return (
    <section id="main-banner" className="main-banner">
      <div className="banner-title">
        <h1>
          <span>Idu</span> Used Article Marke<em>t</em>
        </h1>
        <p className="show">by. Woowahan Agile</p>
      </div>
      <div className="banner-img">
        <img
          className="show"
          src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/main-banner.png"
          alt="배너 이미지"
        />
        <a href="#home-function">START</a>
      </div>
    </section>
  );
};

export default MainBannerComponent;
