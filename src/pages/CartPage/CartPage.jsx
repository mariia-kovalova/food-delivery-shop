import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from 'hooks/useCart';
import { useUser } from 'hooks/useUser';

import { Cart } from 'modules/Cart';
import { UserForm } from 'modules/UserForm';
import { formId } from 'modules/UserForm/inputs';

import { useDispatch } from 'react-redux';
import { getOrdersByUserId } from 'redux/orders/thunks';
import { getPrice } from 'shared/utils/getPrice';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { Info } from 'shared/styles/components/Info';
import {
  Number,
  Price,
  SubmitBtn,
  SubmitWrap,
  Total,
  Wrap,
} from './CartPage.styled';

const CartPage = () => {
  const { id } = useUser();
  const { items } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getOrdersByUserId({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    const price = items.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    setTotalPrice(price);
  }, [items]);

  const showCart = items.length > 0;

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Section>
        <Container>
          {showCart ? (
            <>
              <Wrap>
                <div className="form">
                  <UserForm />
                </div>
                <div className="cart">
                  <Cart items={items} />
                </div>
              </Wrap>
              <SubmitWrap>
                <Price>
                  <Total>Total: </Total>
                  <Number>{getPrice(totalPrice)}</Number>
                </Price>
                <SubmitBtn form={formId} type="submit">
                  Submit
                </SubmitBtn>
              </SubmitWrap>
            </>
          ) : (
            <Info>Your cart is empty</Info>
          )}
        </Container>
      </Section>
    </>
  );
};

export default CartPage;
