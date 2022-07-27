import React from 'react';

import { RightArrowContainer, LeftArrowContainer } from './arrows.style';

import { ReactComponent as RightArrowIcon } from '../../assets/rightArrow.svg';
import { ReactComponent as LeftArrowIcon } from '../../assets/leftArrow.svg';

export const RightArrow = () => {
  return (
    <RightArrowContainer>
      <RightArrowIcon className='right-icon' />
    </RightArrowContainer>
  );
};

export const LeftArrow = () => {
  return (
    <LeftArrowContainer>
      <LeftArrowIcon className='left-icon' />
    </LeftArrowContainer>
  );
};
