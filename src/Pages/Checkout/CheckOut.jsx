import React from 'react';
import CheckoutItem from '../../components/Checkout-item/Checkout-item.component';
import { useGlobalAddItemToCartContext } from '../../contexts/add-cart-item-context';
import './checkout.style.scss';

const CheckOut = () => {
  const { itemsInCart, cartTotal } = useGlobalAddItemToCartContext();

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>Remove</div>
      </div>

      {itemsInCart.map((item) => {
        return <CheckoutItem key={item.id} product={item} />;
      })}
      <span className='total'>Total : ${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
