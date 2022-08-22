import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import './categories-preview.scss';
import { useGlobalCartStateContextHook } from '../../contexts/cart-dropdown-context';

const CategoriesPreview = ({ title, products }) => {
  const { setIsCartDropdownOpen } = useGlobalCartStateContextHook();
  // console.log(products);
  const closeDropdown = () => {
    setIsCartDropdownOpen(false);
  };
  return (
    <div className='category-preview-container' onClick={closeDropdown}>
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
