import React, { useEffect } from "react";
import "./index.less";
import HeaderBar from "$src/components/HeaderBar";
import io from 'socket.io-client'
const socket = io('/', {

  // 实际使用中可以在这里传递参数
  query: {
    room: 'demo',
    userId: `17865429872`,
  }
});
console.log(socket, 'socket')

const Message = function (props) {

  useEffect(() => {
    socket.on('msg', res => {
      console.log(res)
    })
  }, [])
  
  const clickMe = () => {
    socket.emit('exchange', 'test')
  }

  return (
    <div className="message-box">
      <HeaderBar />
      <div onClick={clickMe}>
        测试我
      </div>
    </div>
  );
};

export default Message;
