import React, { useEffect } from "react";
import { Button } from "antd-mobile";
import "./index.less";
import TabBar from "$src/components/TabBar";
import HeaderBar from "$src/components/HeaderBar";
import ListCard from "$src/components/ListCard";

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
    lastRecord: "你好啊露露asdasdasdadasdsadasdasdasdasdadasdasdasd",
    lastTime: "昨天",
  },
  {
    userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
    nickName: "珂珂",
    lastRecord: "你好啊露露阿萨大大大叔",
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
const mock = [
  {
    userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
    nickName: "珂珂珂珂珂珂珂珂珂珂珂珂珂珂",
    lastRecord: "你好啊露露",
    lastTime: "昨天",
  },
  {
    userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
    nickName: "珂珂asdasdasdasd",
    lastRecord: "你好啊露露asdasdasd",
    lastTime: "昨天",
  },
];

const FriendList = props => {
  const agreeRequest = e => {
    console.log(e);
  };
  const rejectRequest = e => {
    console.log(e);
  };

  const renderAddExtra = () => {
    return (
      <>
        <Button
          onClick={agreeRequest}
          type="ghost"
          inline
          size="small"
          style={{ marginRight: "4px" }}
        >
          同意
        </Button>
        <Button onClick={rejectRequest} type="ghost" inline size="small">
          拒绝
        </Button>
      </>
    );
  };

  return (
    <div className="friendList-box">
      <HeaderBar />
      <div className="friendList-content">
        <div className="friendList-newFriend">
          <header>
            <span>有新朋友添加</span>
            <span className="iconfont icon-iconfonti"></span>
          </header>
          <div>
            <ListCard
              key={index}
              x-for={(item, index) in mock}
              userPic={item.userPic}
              nickName={item.nickName}
              lastRecord="请求添加好友"
              extra={renderAddExtra()}
            />
          </div>
        </div>
        <header>
          <span>我的好友</span>
          <span className="iconfont icon-iconfonti"></span>
        </header>
        <ListCard
          key={index}
          x-for={(item, index) in arr}
          userPic={item.userPic}
          nickName={item.nickName}
          lastRecord={item.lastRecord}
          onClick={() => {
            props.history.push("/home/message");
          }}
        />
      </div>
      <TabBar />
    </div>
  );
};

export default FriendList;
