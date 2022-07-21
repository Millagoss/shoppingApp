import React from 'react';
import CategoriesContainerComponent from '../../components/CategoryList/List-of-categories';
import categoriesInfo from '../../data/data';
const Home = () => {
  return <CategoriesContainerComponent categoriesInfo={categoriesInfo} />;
};

export default Home;
