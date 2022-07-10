import './product-card.scss';
import CustomBtn from '../Button/CustomBtn';

const ProductCard = ({ id, name, imageUrl, price }) => {
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt='' />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <CustomBtn buttonType='inverted'>Add to cart </CustomBtn>
    </div>
  );
};

export default ProductCard;
