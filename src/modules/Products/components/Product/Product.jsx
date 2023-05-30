import { productTittleNormalize } from 'shared/utils/productTitleNoramlize';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, setStoreName } from 'redux/cart/slice';
import {
  Btn,
  Container,
  Img,
  Info,
  Price,
  StyledH3,
  TransparentSpace,
  Wrap,
} from './Product.styled';
import { useCart } from 'hooks/useCart';
import { useOneStore } from 'hooks/useOneStore';
import { useEffect, useState } from 'react';
import { Tooltip } from 'shared/components/ToolTip';
import { down } from 'shared/constants/tooltipPosition';

export const Product = ({ product }) => {
  const [ableToAdd, setAbleToAdd] = useState(true);
  const { items, store_name: cart_store_name } = useCart();
  const { store_name } = useOneStore();
  const dispatch = useDispatch();
  const { name, url, price, isInCart } = product;

  useEffect(() => {
    if (items.length > 0 && store_name !== cart_store_name) setAbleToAdd(false);
  }, [cart_store_name, items.length, store_name]);

  const handleToggleCart = () => {
    if (items.length === 0) dispatch(setStoreName(store_name));

    if (isInCart) {
      dispatch(removeFromCart(product));
      if (items.length === 0) dispatch(setStoreName(''));
    }

    if (!isInCart) dispatch(addToCart(product));
  };

  return (
    <Wrap>
      <Info>
        <Img src={url} width="164" height="164" loading="lazy" alt={name} />
        <StyledH3>{productTittleNormalize(name)}</StyledH3>
        <Price>{price} $</Price>
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
              text="you can order food only from one shop"
              position={down}
            >
              <TransparentSpace />
            </Tooltip>
          )}
        </Container>
      </Info>
    </Wrap>
  );
};

// tooltip id diabled - you can add to cart items only from a single store
