import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store"

const Root = (
  <Provider store={store}>
    <Home></Home>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
