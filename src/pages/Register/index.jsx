import React, { useState, useRef, useEffect } from "react";
import "./index.less";
// api
import { API_sendCode, API_checkCode } from "$src/api";
// 组件
import Button from "$src/components/Button";
import MyInput from "$src/components/MyInput";
import { Checkbox } from "antd-mobile";
const pStyle = {
  fontSize: ".16rem",
  color: "#2c3e50",
};

const Register = function (props) {
  const [isReadAgreementState, setIsReadAgreementState] = useState(false);
  const [timeState, setTimeState] = useState(60);
  const [inputMoblieState, setInputMobileState] = useState("");
  const [checkCodeState, setCheckCodeState] = useState("");
  const currentTimeRef = useRef(60);

  /**
   * 发送验证码
   */
  const onSendCode = () => {
    API_sendCode({ mobile: inputMoblieState }).then(res => {
      if (res.success) {
        handleInterval();
      }
    });
  };

  /**
   * 计时器
   */
  const handleInterval = () => {
    // 先立即执行一次
    setTimeState(--currentTimeRef.current);
    const id = setInterval(() => {
      // 如果倒计时大于0则倒计时，小于0则停止
      currentTimeRef.current--;
      if (currentTimeRef.current === 0) {
        currentTimeRef.current = 60;
        clearInterval(id);
      }
      setTimeState(currentTimeRef.current);
    }, 1000);
  };

  /**
   * 手机号注册
   */
  const mobileRegister = () => {
    const data = {
      mobile: inputMoblieState,
      checkCode: checkCodeState,
    };
    API_checkCode(data).then(res => {
      if (res.success) {
        props.history.push({
          pathname: "/password",
          state: {
            mobile: inputMoblieState,
          },
        });
      }
    });
  };

  const renderCode = () => {
    const spanStyle = {
      fontSize: ".16rem",
      marginLeft: ".1rem",
    }
    return timeState === 60 ? (
      <span
        style={{
          ...spanStyle,
          color: "#1fa2ff",
        }}
        onClick={onSendCode}
      >
        获取验证码
      </span>
    ) : (
      <span style={spanStyle}>
        {`${timeState}s后重试`}
      </span>
    );
  };

  return (
    <div className="register-box">
      <header></header>
      <article>输入手机号码</article>
      <div className="register-agreement">
        <Checkbox
          onChange={() => {
            setIsReadAgreementState(!isReadAgreementState);
          }}
        />
        <span>
          已阅读并同意
          <a href="#">服务协议</a>和<a href="#">隐私政策</a>
        </span>
      </div>
      <div className="register-input">
        <MyInput
          fashion="underline"
          addonBefore={<p style={pStyle}>+86</p>}
          value={inputMoblieState}
          onChange={value => {
            setInputMobileState(value);
          }}
        />
      </div>
      <div className="register-input">
        <MyInput
          fashion="underline"
          placeholder="请输入验证码"
          value={checkCodeState}
          onChange={value => {
            setCheckCodeState(value);
          }}
          addonAfter={renderCode()}
        />
      </div>
      <div className="register-button">
        <Button visible={isReadAgreementState} onClick={mobileRegister}>
          下一步
        </Button>
      </div>
    </div>
  );
};

export default Register;
