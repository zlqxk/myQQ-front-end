import React from "react";
import PropTypes from "prop-types";
import "./index.less";

const Button = props => {
  const { visible = true, onClick, style, children } = props;
  return (
    <>
      <button
        className={`button ${!visible ? "visible" : ""}`}
        onClick={onClick}
        disabled={!visible}
        style={style}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Button;
