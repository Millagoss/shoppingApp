import React from 'react';

import { RightArrowContainer, LeftArrowContainer } from './arrows.style';

export const RightArrow = () => {
  return (
    <RightArrowContainer>
      <span>&#8594;</span>
    </RightArrowContainer>
  );
};

export const LeftArrow = () => {
  return (
    <LeftArrowContainer>
      <span>&#8592;</span>
    </LeftArrowContainer>
  );
};
