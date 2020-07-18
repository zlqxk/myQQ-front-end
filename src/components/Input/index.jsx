import React from "react";
import PropTypes from "prop-types";
import "./index.less";

const Input = function (props) {
  const { userPic, onChange, type } = props;
  return (
    <div className="input-box">
      <div x-if={userPic} className="input-img">
        <img width="100%" height="100%" src={userPic} alt="" />
      </div>
      <input onChange={onChange} type={type} />
    </div>
  );
};

Input.propTypes = {
  userPic: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
