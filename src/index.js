import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {HashRouter, BrowserRouter} from "react-router-dom";
import './style/reset.less'
import "./untils/rem";

ReactDOM.render(
  <HashRouter>
      <App/>
  </HashRouter>, document.getElementById("root")
);
