import React from 'react';
import './slider.style.scss';

const SingleSlide = ({ item, itemIndex, index, categoriesInfo }) => {
  const { imageUrl, id, title } = item;

  let position = 'next-slide';

  if (index === itemIndex) {
    position = 'active-slide';
  }
  if (
    itemIndex === index - 1 ||
    (index === 0 && itemIndex === categoriesInfo.length - 1)
  ) {
    position = 'prev-slide';
  }

  return (
    <div key={id} className={`slide-item ${position}`}>
      <img src={imageUrl} />
      <h2>{title}</h2>
    </div>
  );
};

export default SingleSlide;
