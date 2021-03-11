import React from "react";
import PostWriteComponent from "../../../components/Boards/Write/PostWriteComponent";
import BoardBanner from "../../../components/Boards/Layout/BoardBanner";

const PostWritePage = () => {
  return (
    <>
      <BoardBanner title="Market" desc="Write" />
      <PostWriteComponent />
    </>
  );
};

export default PostWritePage;