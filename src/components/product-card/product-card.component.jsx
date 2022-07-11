import './product-card.scss';
import CustomBtn from '../Button/CustomBtn';
import { useGlobalAddItemToCartContext } from '../../contexts/add-cart-item-context';

const ProductCard = ({ product }) => {
  const { id, name, imageUrl, price } = product;
  const { addItemToCart } = useGlobalAddItemToCartContext();

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt='' />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <CustomBtn onClick={() => addItemToCart(product)} buttonType='inverted'>
        Add to cart
      </CustomBtn>
    </div>
  );
};

export default ProductCard;
