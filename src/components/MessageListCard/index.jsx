import React from "react";
import { WhiteSpace } from "antd-mobile";
import PropTypes from "prop-types";
import "./index.less";

const MessageListCard = props => {
  return (
    <div className="messageListCard-box">
      <div className="messageListCard">
        <div className="messageListCard-left">
          <div className="messageListCard-pic">
            <img width="100%" height="100%" src={props.userPic} alt="" />
          </div>
          <div className="messageListCard-nickName">
            <p>{props.nickName}</p>
            <p>{props.lastRecord}</p>
          </div>
        </div>
        <div className="messageListCard-right">{props.lastTime}</div>
      </div>
    </div>
  );
};

MessageListCard.propTypes = {
  userPic: PropTypes.string,
  nickName: PropTypes.string,
  lastRecord: PropTypes.string,
  lastTime: PropTypes.string,
};

export default MessageListCard;
