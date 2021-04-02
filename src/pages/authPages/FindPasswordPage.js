import React from "react";
import { Helmet } from 'react-helmet';
import FindPasswordComponent from "../../components/auth/FindPasswordComponent";

const FindPwdPage = () => {
  return (
    <>
      <Helmet>
        <title>IUAM-(FindPassword)</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Idu Used Article Market" />
        <meta name="keywords" content="Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 아이디찾기, findId, 비밀번호찾기, findPassword" />
      </Helmet>
      <FindPasswordComponent></FindPasswordComponent>
    </>
  );
};

export default FindPwdPage;
