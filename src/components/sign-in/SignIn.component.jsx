import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sign-in-component.scss';
import CustomBtn from '../Button/CustomBtn';
import FormInput from '../form-input/formInput';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';
import { selectErrorCode } from '../../store/user/user.selector';
import { useEffect } from 'react';

const formField = {
  email: '',
  password: '',
};

const SignInComponent = () => {
  const [textField, setTextField] = useState(formField);
  const { email, password } = textField;
  const [showErrorCode, setShowErrorCode] = useState(false);

  const errorCode = useSelector(selectErrorCode);
  console.log(errorCode.errorCode);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowErrorCode(true);
    setTimeout(() => {
      setShowErrorCode(false);
    }, 4000);
  }, [errorCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
    } catch (error) {
      alert(error);
    }
  };

  const handleOnChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setTextField({ ...textField, [property]: value });
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  return (
    <div className='sign-up-container' style={{ width: '28rem' }}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {showErrorCode && <h5 className='error-code'>{errorCode.errorCode}</h5>}
      <form onSubmit={handleSubmit}>
        <FormInput
          label='email'
          type='email'
          value={email}
          name='email'
          onChange={handleOnChange}
          required
        />
        <FormInput
          label='password'
          type='password'
          value={password}
          name='password'
          onChange={handleOnChange}
          required
        />
        <div className='buttons-container'>
          <CustomBtn type='submit' onSubmit={handleSubmit}>
            Sign in
          </CustomBtn>
          <CustomBtn
            buttonType='google'
            type='button'
            onClick={signInWithGoogle}
          >
            Sign in with google
          </CustomBtn>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
