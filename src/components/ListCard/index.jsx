import React from "react";
import PropTypes from "prop-types";
import "./index.less";

const ListCard = props => {
  return (
    <div 
      className="listCard-box" 
      onClick={props.onClick}
    >
      <div className="listCard">
        <div className="listCard-left">
          <div className="listCard-pic">
            <img width="100%" height="100%" src={props.userPic} alt="" />
          </div>
          <div className="listCard-nickName">
            <p>{props.nickName}</p>
            <p>{props.lastRecord}</p>
          </div>
        </div>
        <div className="listCard-extra">{props.extra}</div>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  userPic: PropTypes.string,
  nickName: PropTypes.string,
  lastRecord: PropTypes.string,
  extra: PropTypes.node,
  onClick: PropTypes.func,
};

export default ListCard;
