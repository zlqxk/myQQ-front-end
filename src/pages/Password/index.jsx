import React, { useState, useEffect } from "react";
import "./index.less";
import Button from "$src/components/Button";
import { addCookie } from '$src/utils'
import _ from "lodash";
import { API_create } from "$src/api";

const Password = function (props) {
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    setMobile(_.get(props, "history.location.state.mobile", ""));
  }, [props]);

  // 注册账号
  const register = () => {
    API_create({
      password,
    }).then((res) => {
      if(res.success) {
        addCookie('account', mobile)
        props.history.replace('/home')
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
        <span>{mobile}</span>
      </div>
      <div className="password-input">
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="请输入密码"
          type="text"
        />
      </div>
      <div className="password-button">
        <Button onClick={register}>注册账号</Button>
      </div>
    </div>
  );
};

export default Password;
