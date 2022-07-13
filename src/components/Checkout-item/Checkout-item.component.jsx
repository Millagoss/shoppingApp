import React from 'react';
import { useGlobalAddItemToCartContext } from '../../contexts/add-cart-item-context';
import './checkout.component.style.scss';
const CheckoutItem = ({ product }) => {
  const { id, name, quantity, imageUrl, price } = product;
  const { incrementQuantity, decrementQuantity, clearCartItem } =
    useGlobalAddItemToCartContext();

  const clearItemHandler = () => clearCartItem(product);
  const incrementHandler = () => incrementQuantity(product);
  const decrementHandler = () => decrementQuantity(product);

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
