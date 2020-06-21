import React, { useState } from "react";
import './index.less'
import Input from "$src/components/Input";
import { API_login } from '../../api'
import { Modal } from 'antd-mobile'
const alert = Modal.alert;

const Login = function(props) {

  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    const data = {
      account,
      password
    }
    API_login(data).then(res => {
      if(res.success) {
        alert('登录成功')
      }
    })
  }
  
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
          showLogo={true}
          onChange={(e) => {setAccount(e.target.value)}}
        />
      </div>
      <div className="login-content">
        <Input
          type="password"
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </div>
      <button 
        disabled={!password || !account} 
        onClick={login} 
        className={
          `login-button ${(!password || !account)?'disabled':''}`
        }
      >
        <img 
          src="//47.111.171.15:7001/myqq/img/xiayibu.png" 
          alt=""
        />
      </button>
      <div className="login-bottom">
        <span>忘记密码</span>
        <span>|</span>
        <span onClick={() => {props.history.push('/register')}}>用户注册</span>
      </div>
    </div> 
  )
}

export default Login