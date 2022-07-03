import React from 'react';
import CategoryItemComponent from './CategoryItemComponent';

const CategoriesContainerComponent = ({ categoriesInfo }) => {
  return (
    <div className='categories-container'>
      {categoriesInfo.map((info) => {
        return <CategoryItemComponent key={info.id} {...info} />;
      })}
    </div>
  );
};

export default CategoriesContainerComponent;
