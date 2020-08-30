import React, { useState, useEffect, useCallback } from "react";
import "./index.less";
// api
// import socketAddFriends from '$src/io/socketAddFriends';
import {
  API_addFriends,
  API_queryWaitAddFriends,
  API_addFriendsResult,
  API_queryFriends,
} from "$src/api";
import { getCookie } from "$src/utils";
// 组件
import {
  Button,
  SearchBar,
  WhiteSpace,
  Toast,
  Result,
  Icon,
} from "antd-mobile";
import TabBar from "$src/components/TabBar";
import HeaderBar from "$src/components/HeaderBar";
import ListCard from "$src/components/ListCard";

const FriendList = (props) => {
  const [searchValueState, setSearchValueState] = useState("");
  const [waitFriendsState, setWaitFriendsState] = useState([]);
  const [friendsListState, setFriendsListState] = useState([]);

  // 获取添加好友列表
  const queryWaitAddFriends = useCallback(() => {
    API_queryWaitAddFriends({
      receiverId: getCookie('account'),
    }).then((res) => {
      if (res.success) {
        const newData =
          Array.isArray(res.data) &&
          res.data.map((item) => {
            return {
              nickName: item.senderId,
              userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
              lastTime: "昨天",
            };
          });
        setWaitFriendsState(newData);
      }
    });
  }, [getCookie('account')]);

  // 获取好友列表
  const queryFriends = useCallback(() => {
    API_queryFriends({
      senderId: getCookie('account'),
    }).then((res) => {
      if (res.success) {
        const newData =
          Array.isArray(res.data) &&
          res.data.map((item) => {
            return {
              nickName: item.receiverId,
              userPic: "//47.111.171.15:7001/myqq/img/defaultPic.svg",
              lastTime: "昨天",
            };
          });
        setFriendsListState(newData);
      }
    });
  }, [getCookie('account')]);

  useEffect(() => {
    queryWaitAddFriends();
    queryFriends();
  }, [queryWaitAddFriends, queryFriends]);

  const agreeRequest = (flag, senderId) => {
    API_addFriendsResult({
      senderId: senderId,
      receiverId: getCookie('account'),
      agree: flag,
    }).then((res) => {
      if (res.success) {
        queryWaitAddFriends();
        queryFriends();
      }
    })
  };

  const onAddFriends = () => {
    API_addFriends({
      senderId: getCookie('account'),
      receiverId: searchValueState,
    }).then((res) => {
      if (res.success) {
        Toast.success(res.data);
      }
    });
  };

  const renderAddExtra = (senderId) => {
    return (
      <>
        <Button
          onClick={() => {
            agreeRequest(true, senderId);
          }}
          type="ghost"
          inline
          size="small"
          style={{ marginRight: "4px" }}
        >
          同意
        </Button>
        <Button
          onClick={() => {
            agreeRequest(false, senderId);
          }}
          type="ghost"
          inline
          size="small"
          style={{ marginRight: "4px" }}
        >
          拒绝
        </Button>
      </>
    );
  };

  return (
    <div className="friendList-box">
      <HeaderBar />
      <div className="friendList-content">
        <WhiteSpace size="xs" />
        <SearchBar
          style={{ background: "#fbfbfb" }}
          placeholder="添加好友"
          value={searchValueState}
          onChange={(value) => {
            setSearchValueState(value);
          }}
          onSubmit={onAddFriends}
        />
        <div
          x-if={waitFriendsState.length > 0}
          className="friendList-newFriend"
        >
          <header>
            <span>有新朋友添加</span>
            <span className="iconfont icon-iconfonti"></span>
          </header>
          <div>
            <ListCard
              key={index}
              x-for={(item, index) in waitFriendsState}
              userPic={item.userPic}
              nickName={item.nickName}
              lastRecord="请求添加好友"
              extra={renderAddExtra(item.nickName)}
            />
          </div>
        </div>
        <header>
          <span>我的好友</span>
          <span className="iconfont icon-iconfonti"></span>
        </header>
        <ListCard
          key={index}
          x-if={friendsListState.length}
          x-for={(item, index) in friendsListState}
          userPic={item.userPic}
          nickName={item.nickName}
          lastRecord={item.lastRecord}
          onClick={() => {
            props.history.push("/home/message");
          }}
        />
        <Result
          x-if={!friendsListState.length}
          img={
            <Icon
              type="check-circle"
              className="spe"
              style={{ fill: "#1F90E6" }}
            />
          }
          title="暂无好友"
          message="你可以通过上方添加好友"
        />
      </div>
      <TabBar />
    </div>
  );
};

export default FriendList;
