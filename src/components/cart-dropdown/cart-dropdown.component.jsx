import { useGlobalAddItemToCartContext } from '../../contexts/add-cart-item-context';
import CustomBtn from '../Button/CustomBtn';
import './cart-dropdown.style.scss';

const CartDropdown = () => {
  const { itemsInCart } = useGlobalAddItemToCartContext();

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {itemsInCart.map((product) => {
          const { id, imageUrl, price, name, quantity } = product;
          return (
            <div key={id} className='cart-item-container'>
              <img src={imageUrl} alt={name} />
              <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                  {quantity} X {price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
  );
};

export default CartDropdown;
