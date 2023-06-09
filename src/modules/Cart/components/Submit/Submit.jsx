import { useEffect } from 'react';
import { useCart } from 'hooks/useCart';
import { useUser } from 'hooks/useUser';
import { useDispatch } from 'react-redux';
import { setTotalPrice } from 'redux/cart/slice';
import { getPrice } from 'shared/utils/getPrice';
import { formId } from '../UserForm/inputs';
import { Number, Price, SubmitBtn, Total, Wrap } from './Submit.styled';

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
      <SubmitBtn form={formId} type="submit" disabled={!address}>
        Submit
      </SubmitBtn>
    </Wrap>
  );
};
