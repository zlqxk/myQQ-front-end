import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import App from "./app";
import "./style/reset.less";
import "./untils/rem";
import io from "socket.io-client";

window.socket = io("/", {
  // 实际使用中可以在这里传递参数
  query: {
    room: "demo",
    userId: `17865429872`,
  },
});

socket.on("msg", res => {
  console.log(res);
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
