import React from 'react';
import './auth.scss';
import SignUp from '../../components/sign-up/SignUp';
import SignInComponent from '../../components/sign-in/SignIn.component';

const Authentication = () => {
  return (
    <div className='auth-container'>
      <SignInComponent />
      <SignUp />
    </div>
  );
};

export default Authentication;
