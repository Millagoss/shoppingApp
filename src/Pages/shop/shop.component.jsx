import { useGlobalShopProductsContext } from '../../contexts/shopProductsContext';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.style.scss';
const Shop = () => {
  const { shopProducts } = useGlobalShopProductsContext();
  // console.log(shopData);

  return (
    <div className='products-container'>
      {shopProducts.map((product) => {
        // console.log(product);
        // const { id, name } = product;
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
