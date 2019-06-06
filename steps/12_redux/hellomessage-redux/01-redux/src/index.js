import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import style from "./assets/style/app.css";

import Global from "./Global";

const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Provider store={store}>
    <Global />
  </Provider>,
  mountNode
);
