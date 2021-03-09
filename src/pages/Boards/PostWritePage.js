import React from "react";
import PostWriteComponent from "../../components/Boards/PostWriteComponent";
import BoardBanner from "../../components/Boards/BoardBanner";

const PostWritePage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Write"></BoardBanner>
      <PostWriteComponent />
    </>
  );
};

export default PostWritePage;
