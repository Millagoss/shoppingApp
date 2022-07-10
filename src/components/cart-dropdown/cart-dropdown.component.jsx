import { useGlobalCartStateContextHook } from '../../contexts/cart-item-context';
import CustomBtn from '../Button/CustomBtn';
import './cart-dropdown.style.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-item'></div>
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
  );
};

export default CartDropdown;
