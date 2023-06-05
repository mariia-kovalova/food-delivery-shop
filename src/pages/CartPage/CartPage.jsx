import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from 'hooks/useCart';
import { useDispatch } from 'react-redux';
import { setTotalPrice } from 'redux/cart/slice';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { Map } from 'modules/Cart/components/Map/Map';
import { UserForm } from 'modules/Cart/components/UserForm/UserForm';
import { Cart } from 'modules/Cart';
import { Submit } from 'modules/Cart/components/Submit/Submit';
import { Info } from 'shared/styles/components/Info';
import { Wrap } from './CartPage.styled';

const CartPage = () => {
  const { items } = useCart();

  const dispatch = useDispatch();

  useEffect(() => {
    const price = items.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    dispatch(setTotalPrice(price));
  }, [dispatch, items]);

  const showCart = items.length > 0;
  const showEmpty = items.length === 0;

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Section>
        <Container>
          {showCart && (
            <Wrap>
              <div className="form">
                <Map />
                <UserForm />
              </div>
              <div className="cart">
                <Cart items={items} />
              </div>
              <div className="submit">
                <Submit />
              </div>
            </Wrap>
          )}
          {showEmpty && <Info>Your cart is empty</Info>}
        </Container>
      </Section>
    </>
  );
};

export default CartPage;
