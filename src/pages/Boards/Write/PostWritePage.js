import React from "react";
import PostWriteComponent from "../../../components/Boards/Write/PostWriteComponent";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";
import { Helmet } from 'react-helmet';

const PostWritePage = () => {
  return (
    <>
      <Helmet>
          <title>IUAM: 글 작성하기</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Idu Used Article Market" />
          <meta name="keywords" content="Idu Used Article Market, IUAM, 인덕대학교, 아이두마켓, Idu, 중고시장, 중고마켓, 인덕대학교중고마켓, idu-market.shop, 글쓰기, Write, PostWrite" />
      </Helmet>
      <BoardBanner title="IUAM" desc="Write" />
      <PostWriteComponent />
    </>
  );
};

export default PostWritePage;
