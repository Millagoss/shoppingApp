import React from 'react';
import {
  createUserDocument,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import SignUp from '../../components/sign-up/SignUp';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = await createUserDocument(response.user);
    console.log(user);
  };

  const logGoogleUserUsingRedirect = async () => {
    const response = await signInWithGoogleRedirect();
    // const user = await createUserDocument(response.user);
    // console.log(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>sing in with google popup</button>
      <button onClick={logGoogleUserUsingRedirect}>
        sing in with google redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
