import React from 'react';
import './button.scss';
const buttonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
};
const CustomBtn = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonTypes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
