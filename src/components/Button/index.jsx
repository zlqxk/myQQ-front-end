import React, { memo } from 'react';
import './index.less';

const Button =  function(props) {
  const { visible=true, onClick } = props
  return (
    <>
      <button
        className={`button ${!visible? 'visible': ''}`}
        onClick={onClick}
        disabled={!visible}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  )
}

export default memo(Button)