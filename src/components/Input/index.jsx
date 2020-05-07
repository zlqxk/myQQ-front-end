import React, {} from "react";
import './index.less';

const Input = function(props) {
  const { showLogo=false } = props
  return (
    <div className="input-box">
      { showLogo? 
          <div className="input-img">
            <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588882308143&di=e627d42402ece767896fe776254226d8&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg" alt=""/>
          </div>: 
        null 
      }
      <input/>
    </div>
  )
}

export default Input