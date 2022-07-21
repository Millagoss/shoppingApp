import React from 'react';
import { useNavigate } from 'react-router-dom';

import './categories.styles.scss';

const CategoryItemComponent = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();
  // console.log(route);
  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <div className='category-item-container' onClick={handleNavigation}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItemComponent;
