import React, { useState } from "react";
import "./index.less";
// api
import { API_login } from "$src/api";
import { addCookie } from "$src/utils";
// 组件
import MyInput from "$src/components/MyInput";

const Login = props => {
  const [accountState, setAccountState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const onLogin = () => {
    const data = {
      accountState,
      passwordState,
    };
    API_login({
      account: accountState,
      password: passwordState,
    }).then(res => {
      if (res.success) {
        addCookie("accountState", accountState);
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
          src="//47.111.171.15:7001/myqq/img/logo.png"
        />
      </div>
      <div className="login-content">
        <MyInput
          value={accountState}
          onChange={value => {
            setAccountState(value);
          }}
        />
      </div>
      <div className="login-content">
        <MyInput
          type="password"
          value={passwordState}
          onChange={value => {
            setPasswordState(value);
          }}
        />
      </div>
      <button
        disabled={!passwordState || !accountState}
        onClick={onLogin}
        className={`login-button ${
          !passwordState || !accountState ? "disabled" : ""
        }`}
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
