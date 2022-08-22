import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DisplayCategories from '../../components/display-categories/display-categories';
import Category from '../display-category/Category';
import { setCategoriesFetchStart } from '../../store/shop-products/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoriesFetchStart());
  }, []);

  return (
    <Routes>
      <Route index element={<DisplayCategories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
