import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/Checkout-item/Checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import './checkout.style.scss';

import PaymentForm from '../../components/payment-form/payment-form.component';

const CheckOut = () => {
  const { itemsInCart } = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <PaymentForm />
    </div>
  );
};

export default CheckOut;
