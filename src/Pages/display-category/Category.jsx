import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useGlobalShopProductsContext } from '../../contexts/shopProductsContext';

import './Category.scss';

const Category = () => {
  const { category } = useParams();
  const { shopProducts } = useGlobalShopProductsContext();
  const [products, setProducts] = useState(shopProducts[category]);

  useEffect(() => {
    setProducts(shopProducts[category]);
  }, [shopProducts, category]);

  return (
    <>
      <h2 className='products-title'>{category}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

export default Category;
