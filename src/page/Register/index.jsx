import React, { useState } from "react";
import './index.less'
import Button from '../../components/Button'
import { Checkbox, InputItem } from 'antd-mobile';



const Register = function(props) {

  const [isReadAgreement, setIsReadAgreement] = useState(false);

  const backToLogin = () => {
    props.history.push('/login')
  }
  
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
        <input type="text"/>
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