import React, { useState, useRef, useEffect } from "react";
import './index.less'
import Button from '../../components/Button'
import { Checkbox, InputItem } from 'antd-mobile';

let id = null;


const Register = function(props) {

  const [isReadAgreement, setIsReadAgreement] = useState(false);
  const [time, setTime] = useState(0);
  const currentTime = useRef(60);

  const backToLogin = () => {
    props.history.push('/login')
  }

  /**
   * 发送验证码
   */
  const sendCode = () => {
    // 先立即执行一次
    setTime(currentTime.current)
    id = setInterval(() => {
      // 如果倒计时大于0则倒计时，小于0则停止
      if (currentTime.current > 0) {
        currentTime.current--
        setTime(currentTime.current)
      } else {
        currentTime.current = 60;
        clearInterval(id)
      }
    }, 100)
  }

  useEffect(() => {
    return () => {
      clearInterval(id)
    }
  },[clearInterval])
  
  return (
    <div className="register-box">
      <header>
        <img onClick={backToLogin} src="//47.111.171.15/myqq/img/left.png" alt=""/>
      </header>
      <article>
        输入手机号码
      </article>
      <div className="register-agreement">
        <Checkbox
          onChange={() => {setIsReadAgreement(!isReadAgreement)}}
        />
        <span>
          已阅读并同意
          <a href="#">服务协议</a>
          和
          <a href="#">隐私政策</a>
        </span>
      </div>
      <div className="register-input">
        <span>+86</span>
        <input placeholder="请输入手机号码" type="text"/>
        |
        { 
          !time?
          <span
            style={{fontSize:'.16rem', marginLeft:'.1rem', color:'#1fa2ff'}}
            onClick={sendCode}
          >
            获取验证码
          </span>:
          <span
            style={{fontSize:'.16rem', marginLeft:'.1rem'}}
          >
            {`${time}s后重试`}
          </span>
        }
      </div>
      <div className="register-input">
        <span>验证码</span>
        <input placeholder="请输入验证码" type="text"/>
      </div>
      <div className="register-button">
        <Button 
          visible={isReadAgreement}
          onClick={() => {console.log(11)}}
        >
          下一步
        </Button>
      </div>
    </div> 
  )
}

export default Register