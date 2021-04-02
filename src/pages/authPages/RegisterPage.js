import React from "react";
import RegisterComponent from "../../components/auth/RegisterComponent";
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
          <title>IUAM-(Register)</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Idu Used Article Market" />
          <meta name="keywords" content="IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 로그인, login, 회원가입, register" />
      </Helmet>
      <RegisterComponent></RegisterComponent>
    </>
  );
};

export default RegisterPage;
