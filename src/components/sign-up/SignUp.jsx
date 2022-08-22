import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './sign-up-form.scss';
import FormInput from '../form-input/formInput';
import CustomBtn from '../Button/CustomBtn';
import { signUpStart } from '../../store/user/user.action';

const formField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [textField, setTextField] = useState(formField);
  const dispatch = useDispatch();
  const { displayName, email, password, confirmPassword } = textField;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert('password does not match');
      return;
    }

    setIsLoading(true);
    try {
      dispatch(signUpStart(email, password, displayName));
      setTextField(formField);
      setIsLoading(false);
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
      alert(error.code);
    }
  };

  const handleOnChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setTextField({ ...textField, [property]: value });
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          type='text'
          value={displayName}
          name='displayName'
          onChange={handleOnChange}
          required
        />

        <FormInput
          label='Email'
          type='Email'
          value={email}
          name='email'
          onChange={handleOnChange}
          required
        />

        <FormInput
          label='Password'
          type='Password'
          value={password}
          name='password'
          onChange={handleOnChange}
          required
        />

        <FormInput
          label='Confirm password'
          type='password'
          value={confirmPassword}
          name='confirmPassword'
          onChange={handleOnChange}
          required
        />
        <CustomBtn type='submit' isLoading={isLoading}>
          sign up
        </CustomBtn>
      </form>
    </div>
  );
};

export default SignUp;
