import React, { useState } from 'react';
import './sign-up-form.scss';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/formInput';
import CustomBtn from '../Button/CustomBtn';
const formField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [textField, setTextField] = useState(formField);
  const { displayName, email, password, confirmPassword } = textField;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert('password does not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      setTextField(formField);
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
        <CustomBtn type='submit'>Sign up</CustomBtn>
      </form>
    </div>
  );
};

export default SignUp;
