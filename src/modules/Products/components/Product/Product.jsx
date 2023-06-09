import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  setStore,
  setTotalPrice,
} from 'redux/cart/slice';

import { useCart } from 'hooks/useCart';
import { useOneStore } from 'hooks/useOneStore';

import { productTittleNormalize } from 'shared/utils/productTitleNoramlize';
import { down } from 'shared/constants/tooltipPosition';

import { getPrice } from 'shared/utils/getPrice';
import { Tooltip } from 'shared/components/ToolTip';
import {
  Btn,
  Container,
  Img,
  Info,
  Price,
  StyledH3,
  Wrap,
} from './Product.styled';

export const Product = ({ product }) => {
  const { items, store_name } = useCart();
  const { name, location } = useOneStore();

  const dispatch = useDispatch();

  const { name: tittle, url, price, isInCart } = product;

  const handleToggleCart = () => {
    if (!isInCart) {
      if (items.length === 0)
        dispatch(setStore({ store_name: name, location }));
      dispatch(addToCart(product));
    }

    if (isInCart) {
      if (items.length === 1) {
        dispatch(setStore({ store_name: '', location: null }));
        dispatch(setTotalPrice(0));
      }
      dispatch(removeFromCart(product));
    }
  };

  const ableToAdd =
    items.length === 0 || (items.length !== 0 && name === store_name);

  return (
    <Wrap>
      <Info>
        <Img src={url} width="164" height="164" loading="lazy" alt={tittle} />
        <StyledH3>{productTittleNormalize(tittle)}</StyledH3>
        <Price>{getPrice(price)}</Price>
        <Container>
          <Btn
            type="button"
            isInCart={isInCart}
            disabled={!ableToAdd}
            onClick={handleToggleCart}
          >
            {isInCart ? 'Remove from cart' : 'Add to cart'}
          </Btn>
          {!ableToAdd && (
            <Tooltip
              ariaLabel="disabled action"
              text="you can order food only from one store"
              position={down}
            />
          )}
        </Container>
      </Info>
    </Wrap>
  );
};
