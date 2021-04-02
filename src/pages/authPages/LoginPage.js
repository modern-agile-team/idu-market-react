import React from "react";
import LoginComponent from "../../components/auth/LoginComponent";
import { Helmet } from 'react-helmet';
const LoginPage = () => {
  return (
    <>
      <Helmet>
          <title>IUAM: 로그인</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Idu Used Article Market" />
          <meta name="keywords" content="Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 로그인, login, 회원가입, register" />
      </Helmet>
      <LoginComponent></LoginComponent>
    </>
  );
};

export default LoginPage;
