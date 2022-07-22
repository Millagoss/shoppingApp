import React from 'react';

import { GoToTopContainer } from './go-to-top.style';

const GoToTop = () => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <GoToTopContainer onClick={handleGoToTop}>
      <span>Top</span>
    </GoToTopContainer>
  );
};

export default GoToTop;
