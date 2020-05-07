import React, {Component} from "react";
import './index.less'
import Input from "../../components/Input";



const Login = function() {
  
  return (
    <div className="login-box">
      <div className="login-logo">
        <img width="100%" height="100%" src="http://47.111.171.15/myqq/img/qq-logo.jpg"/>
      </div>
      <div className="login-content">
        <Input
          showLogo={true}
        />
      </div>
      <div className="login-content">
        <Input/>
      </div>
    </div> 
  )
}

export default Login