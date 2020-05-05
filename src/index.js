import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {HashRouter, BrowserRouter} from "react-router-dom";
import './style/reset.less'

ReactDOM.render(
  <HashRouter>
      <App/>
  </HashRouter>, document.getElementById("root")
);
