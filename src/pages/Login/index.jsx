import React, { useState } from "react";
import "./index.less";
// api
import { API_login } from "$src/api";
import { addCookie } from '$src/utils'
// 组件
import Input from "$src/components/Input";

const Login = function (props) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    const data = {
      account,
      password,
    };
    API_login(data).then(res => {
      if (res.success) {
        addCookie('account', account)
        props.history.replace("/home");
      }
    });
  };

  return (
    <div className="login-box">
      <div className="login-logo">
        <img
          width="100%"
          height="100%"
          src="//47.111.171.15:7001/myqq/img/qq-logo.jpg"
        />
      </div>
      <div className="login-content">
        <Input
          userPic="//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588882308143&di=e627d42402ece767896fe776254226d8&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg"
          onChange={e => {
            setAccount(e.target.value);
          }}
        />
      </div>
      <div className="login-content">
        <Input
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        disabled={!password || !account}
        onClick={onLogin}
        className={`login-button ${!password || !account ? "disabled" : ""}`}
      >
        <img src="//47.111.171.15:7001/myqq/img/xiayibu.png" alt="" />
      </button>
      <div className="login-bottom">
        <span>忘记密码</span>
        <span>|</span>
        <span
          onClick={() => {
            props.history.push("/register");
          }}
        >
          用户注册
        </span>
      </div>
    </div>
  );
};

export default Login;
