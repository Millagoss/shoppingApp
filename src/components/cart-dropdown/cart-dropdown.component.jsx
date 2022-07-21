import { useNavigate } from 'react-router-dom';

import { useGlobalAddItemToCartContext } from '../../contexts/add-cart-item-context';
import CustomBtn from '../Button/CustomBtn';

import {
  CartDropdownContainer,
  CartItems,
  CartItem,
  ItemDetails,
} from './cart-dropdown.style';

const CartDropdown = () => {
  const { itemsInCart } = useGlobalAddItemToCartContext();
  const navigtion = useNavigate();

  const handleClick = () => {
    navigtion('/checkout');
  };

  if (itemsInCart.length === 0) {
    return (
      <CartDropdownContainer>
        <CartItems style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h3>cart is empty</h3>
        </CartItems>
      </CartDropdownContainer>
    );
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {itemsInCart.map((product) => {
          const { id, imageUrl, price, name, quantity } = product;
          return (
            <CartItem>
              <img src={imageUrl} alt={name} />
              <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                  {quantity} X {price}
                </span>
              </ItemDetails>
            </CartItem>
          );
        })}
      </CartItems>
      <CustomBtn onClick={handleClick}>GO TO CHECKOUT</CustomBtn>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
