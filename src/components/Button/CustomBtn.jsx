import React from 'react';
import './button.scss';
export const buttonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
};
const CustomBtn = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonTypes[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? '...' : children}
    </button>
  );
};

export default CustomBtn;
