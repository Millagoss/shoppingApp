import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './loading.style';

const Loading = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Loading;
