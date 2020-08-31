import React from "react";
import PropTypes from "prop-types";
import "./index.less";

const MyInput = props => {
  const { fashion } = props;
  return (
    <div style={props.style} className="myInput-box">
      <div className={`${fashion}-box`}>
        <div x-if={props.addonBefore} className="addonBefore">
          {props.addonBefore}
        </div>
        <div className={`${fashion}-div`}>
          <input
            className={`${fashion}`}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        </div>
        <div x-if={props.addonAfter} className="addonAfter">
          {props.addonAfter}
        </div>
      </div>
    </div>
  );
};

MyInput.defaultProps = {
  type: "text",
  style: {},
  placeholder: "",
  fashion: "primary",
};
MyInput.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  addonBefore: PropTypes.node,
  addonAfter: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  fashion: PropTypes.string,
};

export default MyInput;
