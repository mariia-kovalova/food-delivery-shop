import { useCart } from 'hooks/useCart';

import { Helmet } from 'react-helmet-async';
import { Section } from 'shared/styles/components/Section.styled';
import { Container } from 'shared/styles/components/Container.styled';
import { Cart } from 'modules/Cart';
import { Info } from 'shared/styles/components/Info';

const CartPage = () => {
  const { items } = useCart();

  const showCart = items.length > 0;
  const showEmpty = items.length === 0;

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Section>
        <Container>
          {showCart && <Cart />}
          {showEmpty && <Info>Your cart is empty</Info>}
        </Container>
      </Section>
    </>
  );
};

export default CartPage;
