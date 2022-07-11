import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useGlobalAddItemToCartContext } from '../../contexts/add-cart-item-context';

import './cart-icon.style.scss';

const CartIcon = () => {
  const { cartCount } = useGlobalAddItemToCartContext();

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
