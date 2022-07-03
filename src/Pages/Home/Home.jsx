import React from 'react';
import CategoriesContainerComponent from '../../components/CategoryList/CategoriesContainerComponent';
import categoriesInfo from '../../data/data';
const Home = () => {
  return <CategoriesContainerComponent categoriesInfo={categoriesInfo} />;
};

export default Home;
