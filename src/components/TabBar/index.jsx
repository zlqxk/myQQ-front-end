import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./index.less";

const TabBar = props => {
  return (
    <div className="tab-bar-box">
      <div>
        <NavLink
          to="/home"
          className={props.location.pathname === "/home" ? "active" : ""}
        >
          <span className="iconfont icon-xiaoxi"></span>
          <span>消息</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/friendList">
          <span className="iconfont icon-lianxirenxuanzhong"></span>
          <span>联系人</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="/look">
          <span className="iconfont icon-chakanyanjingshishifenxi2"></span>
          <span>看点</span>
        </NavLink>
      </div>
      <div>
        <NavLink to="space">
          <span className="iconfont icon-xingqiu"></span>
          <span>动态</span>
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(TabBar);
