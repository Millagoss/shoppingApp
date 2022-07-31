import { useState, useEffect } from 'react';
import { useGlobalShopProductsContext } from '../../contexts/shopProductsContext';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Loading from '../loading/loading.component';

const DisplayCategories = () => {
  const { shopProducts } = useGlobalShopProductsContext();

  // console.log(shopProducts);

  // if (!shopProducts) {
  //   return (
  //     <div className='category-preview-container'>
  //       <div className='preview'>
  //         <Loading />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      {shopProducts &&
        Object.keys(shopProducts).map((title) => {
          const products = shopProducts[title];
          return (
            <CategoriesPreview key={title} products={products} title={title} />
          );
        })}
    </>
  );
};

export default DisplayCategories;
