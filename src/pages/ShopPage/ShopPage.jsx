import { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router';

import { useStores } from 'hooks/useStores';
import { useDispatch } from 'react-redux';
import { getStores } from 'redux/stores/thunks';

import { Loader } from 'shared/components/Loader';
import { oops } from 'shared/constants/errorText';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { Wrap } from './ShopPage.styled';
import { Shop } from 'modules/Shop';
import { Info } from 'pages/CartPage/CartPage.styled';

const ShopPage = () => {
  const { items, isLoading, error } = useStores();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  const showList = items.length > 0 && !error;
  const showError = !isLoading && error;

  return (
    <>
      <Helmet>
        <title>Food Delivery</title>
      </Helmet>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {showList && (
            <Wrap>
              <div className="shop-list">
                <Shop stores={items} />
              </div>
              <div className="products-list">
                <Suspense>
                  <Outlet />
                </Suspense>
              </div>
            </Wrap>
          )}
          {showError && <Info>{oops}</Info>}
        </Container>
      </Section>
    </>
  );
};

export default ShopPage;
