import React, { useState } from 'react';
import './sign-up-form.scss';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/formInput';
import CustomBtn from '../Button/CustomBtn';
import Loading from '../loading/loading.component';
const formField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [textField, setTextField] = useState(formField);
  const { displayName, email, password, confirmPassword } = textField;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert('password does not match');
      return;
    }

    setIsLoading(true);
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      setTextField(formField);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
        <CustomBtn type='submit'>{isLoading ? '' : 'sign up'}</CustomBtn>
        {isLoading && <Loading />}
      </form>
    </div>
  );
};

export default SignUp;
