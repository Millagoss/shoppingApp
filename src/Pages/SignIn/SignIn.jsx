import React from 'react';
import {
  createUserDocument,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const user = await createUserDocument(response.user);
    console.log(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>sing in with google popup</button>
    </div>
  );
};

export default SignIn;
