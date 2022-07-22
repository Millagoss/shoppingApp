import React from 'react';
import Aside from '../../components/asides/aside.component';

import CategoriesContainerComponent from '../../components/CategoryList/List-of-categories';
import Slider from '../../components/slider/slider.component';

import categoriesInfo from '../../data/data';

import { HomeContainer, Break } from './home.style';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Aside />
        <Slider />
        <Aside />
      </HomeContainer>
      <Break />
      <CategoriesContainerComponent categoriesInfo={categoriesInfo} />;
    </>
  );
};

export default Home;
