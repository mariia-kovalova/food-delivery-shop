import { useCart } from 'hooks/useCart';
import { getPrice } from 'shared/utils/getPrice';
import { formId } from '../UserForm/inputs';
import { Number, Price, SubmitBtn, Total, Wrap } from './Submit.styled';

export const Submit = () => {
  const { total_price } = useCart();

  return (
    <Wrap>
      <Price>
        <Total>Total price: </Total>
        <Number>{getPrice(total_price)}</Number>
      </Price>
      <SubmitBtn form={formId} type="submit">
        Submit
      </SubmitBtn>
    </Wrap>
  );
};
