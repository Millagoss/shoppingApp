import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  removeCartItem,
  clearItemFromCart,
  addItemToCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './checkout.component.style.scss';

const CheckoutItem = ({ product }) => {
  const { id, name, quantity, imageUrl, price } = product;
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(itemsInCart, product));
  const incrementHandler = () => dispatch(addItemToCart(itemsInCart, product));
  const decrementHandler = () => dispatch(removeCartItem(itemsInCart, product));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>

      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decrementHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <br />
        <div className='arrow' onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
