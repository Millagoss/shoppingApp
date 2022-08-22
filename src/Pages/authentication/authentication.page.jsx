import React from 'react';
import './auth.scss';
import SignUp from '../../components/sign-up/SignUp';
import SignInComponent from '../../components/sign-in/SignIn.component';

import { useGlobalCartStateContextHook } from '../../contexts/cart-dropdown-context';

const Authentication = () => {
  const { isCartDropdownOpen, setIsCartDropdownOpen } =
    useGlobalCartStateContextHook();

  const closeDropdown = () => {
    setIsCartDropdownOpen(false);
  };

  return (
    <div className='auth-container' onClick={closeDropdown}>
      <SignInComponent />
      <SignUp />
    </div>
  );
};

export default Authentication;
