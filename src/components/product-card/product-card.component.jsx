import React, { useRef, useState } from 'react';
import './product-card.scss';
import CustomBtn from '../Button/CustomBtn';
import { useGlobalAddItemToCartContext } from '../../contexts/add-cart-item-context';

import { ReactComponent as CheckLogo } from '../../assets/check.svg';

const ProductCard = ({ product }) => {
  // console.log(product);
  const [toggleClass, setToggleClass] = useState('');
  const { id, name, imageUrl, price } = product;
  const { addItemToCart } = useGlobalAddItemToCartContext();

  const checkRef = useRef();

  const handleClick = () => {
    addItemToCart(product);
    setToggleClass('display');
    setTimeout(() => {
      setToggleClass('');
    }, 1000);
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt='' />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <CustomBtn onClick={handleClick} buttonType='inverted'>
        Add to cart
        {/* <CheckLogo className='check-icon' /> */}
        <span
          ref={checkRef}
          className={`fa-solid fa-circle-check ${toggleClass}`}
        ></span>
      </CustomBtn>
    </div>
  );
};

export default ProductCard;
