import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './product-card.scss';
import CustomBtn from '../Button/CustomBtn';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

const ProductCard = ({ product }) => {
  const [toggleClass, setToggleClass] = useState('');
  const { id, name, imageUrl, price } = product;

  const { itemsInCart } = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const checkRef = useRef();

  // console.log(itemsInCart);

  const handleClick = () => {
    dispatch(addItemToCart(itemsInCart, product));
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
