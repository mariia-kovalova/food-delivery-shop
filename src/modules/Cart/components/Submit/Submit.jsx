import { useEffect } from 'react';
import { useCart } from 'hooks/useCart';
import { useUser } from 'hooks/useUser';
import { useDispatch } from 'react-redux';
import { setTotalPrice } from 'redux/cart/slice';
import { getPrice } from 'shared/utils/getPrice';
import { formId } from '../UserForm/inputs';
import { Tooltip } from 'shared/components/ToolTip';
import { down } from 'shared/constants/tooltipPosition';
import {
  Container,
  Number,
  Price,
  SubmitBtn,
  Total,
  Wrap,
} from './Submit.styled';

export const Submit = () => {
  const { address } = useUser();
  const { total_price, items } = useCart();

  const dispatch = useDispatch();

  useEffect(() => {
    const price = items.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    dispatch(setTotalPrice(price));
  }, [dispatch, items]);

  return (
    <Wrap>
      <Price>
        <Total>Total price: </Total>
        <Number>{getPrice(total_price)}</Number>
      </Price>
      <Container>
        <SubmitBtn form={formId} type="submit" disabled={!address}>
          Submit
        </SubmitBtn>
        {!address && (
          <Tooltip
            ariaLabel="disabled action"
            text="provide your address to make an order"
            position={down}
          />
        )}
      </Container>
    </Wrap>
  );
};
