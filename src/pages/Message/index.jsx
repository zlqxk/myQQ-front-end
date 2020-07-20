import React, { useState, useEffect } from "react";
import "./index.less";
import HeaderBar from "$src/components/HeaderBar";
import io from "socket.io-client";
const socket = io("/", {
  // 实际使用中可以在这里传递参数
  query: {
    room: "demo",
    userId: `17865429872`,
  },
});
console.log(socket, "socket");

const Message = function (props) {
  const [messageState, setMessageState] = useState("");

  useEffect(() => {
    socket.on("msg", res => {
      console.log(res);
    });
  }, []);

  const submitMessage = () => {
    socket.emit("exchange", messageState);
    setMessageState("");
  };

  return (
    <div className="message-box">
      <HeaderBar />
      <div className="message-content">
      
      </div>
      <div className="message-footer">
        <div className="message-input">
          <input
            value={messageState}
            onChange={e => {
              setMessageState(e.target.value);
            }}
            type="text"
          />
        </div>
        <button onClick={submitMessage} className="message-submit">
          发送
        </button>
      </div>
    </div>
  );
};

export default Message;
