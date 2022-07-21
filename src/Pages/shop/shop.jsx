import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DisplayCategories from '../../components/display-categories/display-categories';
import Category from '../display-category/Category';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<DisplayCategories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
