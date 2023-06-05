import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, setStore } from 'redux/cart/slice';

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
  const [ableToAdd, setAbleToAdd] = useState(true);

  const { items, store_name: cart_store_name } = useCart();
  const { store_name, location } = useOneStore();

  const { name, url, price, isInCart } = product;

  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length > 0 && store_name !== cart_store_name) setAbleToAdd(false);
  }, [cart_store_name, items.length, store_name]);

  const handleToggleCart = () => {
    if (items.length === 0) dispatch(setStore({ store_name, location }));

    if (isInCart) dispatch(removeFromCart(product));

    if (!isInCart) dispatch(addToCart(product));
  };

  return (
    <Wrap>
      <Info>
        <Img src={url} width="164" height="164" loading="lazy" alt={name} />
        <StyledH3>{productTittleNormalize(name)}</StyledH3>
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
