import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DisplayCategories from '../../components/display-categories/display-categories';
import Category from '../display-category/Category';
import { setCategories } from '../../store/shop-products/categories.action';

import { getCollectionAndDocument } from '../../utils/firebase/firebase.utils';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCollectionAndDocument('categories');
      console.log(categories);
      dispatch(setCategories(categories));
    };

    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<DisplayCategories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
