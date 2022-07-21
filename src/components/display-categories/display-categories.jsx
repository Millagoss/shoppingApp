import { useGlobalShopProductsContext } from '../../contexts/shopProductsContext';
import CategoriesPreview from '../categories-preview/categories-preview.component';

const DisplayCategories = () => {
  const { shopProducts } = useGlobalShopProductsContext();
  // console.log(shopProducts);
  return (
    <>
      {Object.keys(shopProducts).map((title) => {
        const products = shopProducts[title];
        return (
          <CategoriesPreview key={title} products={products} title={title} />
        );
      })}
    </>
  );
};

export default DisplayCategories;
