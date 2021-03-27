import React, { useEffect, useState } from "react";

const FunctionComponent = () => {
  const [scrollActionFuntion, setScrollActionFunction] = useState(false);

  function functionHandleScroll() {
    let pageScrollY = window.scrollY;

    if (pageScrollY > 250) setScrollActionFunction(true);
    else setScrollActionFunction(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", functionHandleScroll);

    return () => {
      window.removeEventListener("scroll", functionHandleScroll);
    };
  }, []);

  return (
    <section id="home-function" className="home-function">
      <div className="container">
        <div
          className={
            scrollActionFuntion ? "function-items show" : "function-items"
          }
        >
          <div className="function-item shopping">
            <img src="https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/shopping-2.png" alt="중고거래" className="function-img" />
            <p className="function-desc">Deal With Article</p>
          </div>
          <div className="function-item communication">
            <img
              src="https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/communication-2.png"
              alt="커뮤니케이션"
              className="function-img"
            />
            <p className="function-desc">Communication</p>
          </div>
          <div className="function-item information">
            <img src="https://woowahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/information-2.png" alt="정보" className="function-img" />
            <p className="function-desc">
              University <br />
              Information
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionComponent;
