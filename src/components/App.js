import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import useComment from "../hooks/useComment";
import Root from "../config/Root";

export const AppComponent = () => {
  return (
    <div>
      <CommentBox hook={(() => useComment(""))()} />
      <CommentList />
    </div>
  );
};

export default () => {
  return (
    <Root>
      <AppComponent />
    </Root>
  );
};
