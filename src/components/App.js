import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import useComment from "../hooks/useComment";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../config/redux";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppComponent />
      </PersistGate>
    </Provider>
  );
};
