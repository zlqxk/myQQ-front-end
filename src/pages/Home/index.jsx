import React, { useEffect } from "react";
import "./index.less";
import MessageListCard from "$src/components/MessageListCard";
import TabBar from "$src/components/TabBar";
import HeaderBar from "$src/components/HeaderBar";
const arr = [
  {
    userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
    nickName: "珂珂",
    lastRecord: "你好啊露露",
    lastTime: "昨天",
  },
  {
    userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
    nickName: "珂珂",
    lastRecord: "你好啊露露",
    lastTime: "昨天",
  },
  {
    userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
    nickName: "珂珂",
    lastRecord: "你好啊露露",
    lastTime: "昨天",
  },
  {
    userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
    nickName: "珂珂",
    lastRecord: "你好啊露露",
    lastTime: "昨天",
  },
];

const Home = props => {
  return (
    <div className="home-box">
      <HeaderBar />
      <MessageListCard
        key={index}
        x-for={(item, index) in arr}
        userPic={item.userPic}
        nickName={item.nickName}
        lastRecord={item.lastRecord}
        lastTime={item.lastTime}
        onClick={() => {
          props.history.push("/home/message");
        }}
      />
      <TabBar />
    </div>
  );
};

export default Home;
