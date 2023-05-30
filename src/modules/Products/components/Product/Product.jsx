import { productTittleNormalize } from 'shared/utils/productTitleNoramlize';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from 'redux/cart/slice';
import { Btn, Img, Info, Price, StyledH3, Wrap } from './Product.styled';

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { name, url, price, isInCart } = product;

  const handleToggleCart = () => {
    if (isInCart) dispatch(removeFromCart(product));
    if (!isInCart) dispatch(addToCart(product));
  };

  return (
    <Wrap>
      <Info>
        <Img src={url} width="164" height="164" loading="lazy" alt={name} />
        <StyledH3>{productTittleNormalize(name)}</StyledH3>
        <Price>{price} $</Price>
        <Btn type="button" isInCart={isInCart} onClick={handleToggleCart}>
          {isInCart ? 'Remove from cart' : 'Add to cart'}
        </Btn>
      </Info>
    </Wrap>
  );
};
