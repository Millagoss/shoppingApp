import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useSelector } from 'react-redux';

import { selectCartCount } from '../../store/cart/cart.selector';

import './cart-icon.style.scss';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
