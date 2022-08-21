import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/shop-products/categories.selector.js';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Loading from '../loading/loading.component';

const DisplayCategories = () => {
  const shopProducts = useSelector(selectCategoriesMap);

  const isLoading = useSelector(selectCategoriesIsLoading);
  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        shopProducts &&
        Object.keys(shopProducts).map((title) => {
          const products = shopProducts[title];
          return (
            <CategoriesPreview key={title} products={products} title={title} />
          );
        })
      )}
    </>
  );
};

export default DisplayCategories;
