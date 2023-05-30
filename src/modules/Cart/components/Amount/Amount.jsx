import { useDispatch } from 'react-redux';
import { Btn, Number, Wrap } from './Amount.styled';
import { setAmount } from 'redux/cart/slice';

export const Amount = ({ id, amount }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(setAmount({ id, amount: amount + 1 }));
  };

  const handleDecrease = () => {
    dispatch(setAmount({ id, amount: amount - 1 }));
  };

  return (
    <Wrap className="amount">
      <Btn type="button" onClick={handleDecrease} disabled={amount <= 1}>
        -
      </Btn>
      <Number>{amount}</Number>
      <Btn type="button" onClick={handleIncrease}>
        +
      </Btn>
    </Wrap>
  );
};
