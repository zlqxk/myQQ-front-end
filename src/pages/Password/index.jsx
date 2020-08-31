import React, { useState, useEffect } from "react";
import "./index.less";
// api
import { addCookie } from "$src/utils";
import _ from "lodash";
import { API_create } from "$src/api";
// 组件
import Button from "$src/components/Button";
import MyInput from "$src/components/MyInput";

const Password = function (props) {
  const [passwordState, setPasswordState] = useState("");
  const [mobileState, setMobileState] = useState("");

  useEffect(() => {
    setMobileState(_.get(props, "history.location.state.mobile", ""));
  }, [props]);

  // 注册账号
  const register = () => {
    API_create({
      password: passwordState,
    }).then(res => {
      if (res.success) {
        addCookie("account", mobileState);
        props.history.replace("/home");
      }
    });
  };

  return (
    <div className="password-box">
      <header>
        {/* <img onClick={() => {props.history.push('/login')}} src="//47.111.171.15:7001/myqq/img/left.png" alt=""/> */}
      </header>
      <article>请输入密码</article>
      <div className="password-title">
        <span>注册的手机号为：</span>
        <span>{mobileState}</span>
      </div>
      <div className="password-input">
        <MyInput
          value={passwordState}
          onChange={value => {
            setPasswordState(value);
          }}
          placeholder="请输入密码"
          type="text"
          fashion="underline"
        />
      </div>
      <div className="password-button">
        <Button onClick={register}>注册账号</Button>
      </div>
    </div>
  );
};

export default Password;
