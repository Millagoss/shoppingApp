import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import './categories-preview.scss';

const CategoriesPreview = ({ title, products }) => {
  // console.log(products);

  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoriesPreview;