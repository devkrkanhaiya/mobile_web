import React from "react";
import { Provider } from "react-redux";
import { store } from "@universal/common/store";

import Home from "@universal/common/containers/Home";
import Login from "@universal/common/containers/screens/auth/Login";

export default function App() {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <Login />
    </Provider>
  );
}
