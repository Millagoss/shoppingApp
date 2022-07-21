import React from 'react';
import CategoryItemComponent from './CategoryItemComponent';

const ListOfCategories = ({ categoriesInfo }) => {
  return (
    <div className='list-of-categories-container'>
      {categoriesInfo.map((info) => {
        return <CategoryItemComponent key={info.id} {...info} />;
      })}
    </div>
  );
};

export default ListOfCategories;
