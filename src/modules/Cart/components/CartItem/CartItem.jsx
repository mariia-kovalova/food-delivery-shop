import { useDispatch } from 'react-redux';
import { removeFromCart } from 'redux/cart/slice';

import { productTittleNormalize } from 'shared/utils/productTitleNoramlize';
import { getPrice } from 'shared/utils/getPrice';

import { Amount } from '../Amount/Amount';
import { Btn, Img, Info, Price, StyledH3, Svg, Wrap } from './CartItem.styled';
import sprite from 'shared/icons/sprite.svg';

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, url, price, amount } = item;

  const handleRemoreFromCart = () => dispatch(removeFromCart(item));

  return (
    <Wrap>
      <Info>
        <Img src={url} width="70" height="70" loading="lazy" alt={name} />
        <StyledH3>{productTittleNormalize(name)}</StyledH3>
        <Price>{getPrice(price)}</Price>
      </Info>
      <Btn type="button" onClick={handleRemoreFromCart}>
        <Svg>
          <use href={`${sprite}#icon-trash-can-solid`} />
        </Svg>
      </Btn>
      <Amount id={id} amount={amount} />
    </Wrap>
  );
};
