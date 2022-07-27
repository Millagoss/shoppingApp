import React from 'react';

import spinner from '../../assets/6.gif';

import { Spinner } from './loading.style';

const Loading = () => {
  return (
    <Spinner>
      <img src={spinner} alt='loading..' />;
    </Spinner>
  );
};

export default Loading;
