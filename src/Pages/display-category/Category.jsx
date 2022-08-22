import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/shop-products/categories.selector.js';
import { selectCategoriesIsLoading } from '../../store/shop-products/categories.selector.js';
import Loading from '../../components/loading/loading.component';

import './Category.scss';

const Category = () => {
  const { category } = useParams();
  const shopProducts = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(shopProducts[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(shopProducts[category]);
  }, [shopProducts, category]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 className='products-title'>{category}</h2>
          <div className='category-container'>
            {products &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Category;
