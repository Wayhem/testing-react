import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import useComment from "../hooks/useComment";

export default () => {
  return (
    <div>
      <CommentBox hook={(() => useComment(""))()} />
      <CommentList />
    </div>
  );
};
