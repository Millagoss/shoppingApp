import React, { useEffect, useState } from 'react';

import './slider.style.scss';

import categoriesInfo from '../../data/data';
import SingleSlide from './singleSlide.component';

import { LeftArrow, RightArrow } from '../arrows/arrows.component';

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIndex((indx) => indx + 1);
    }, 6000);

    return () => clearInterval(timer);
  }, [index]);

  useEffect(() => {
    if (index < 0) {
      setIndex(categoriesInfo.length - 1);
    } else if (index > categoriesInfo.length - 1) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className='slider-container'>
      {categoriesInfo.map((item, itemIndex) => {
        return (
          <SingleSlide
            item={item}
            index={index}
            itemIndex={itemIndex}
            categoriesInfo={categoriesInfo}
          />
        );
      })}
      <LeftArrow />
      <RightArrow />
    </div>
  );
};

export default Slider;
