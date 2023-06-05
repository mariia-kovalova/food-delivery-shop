import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { useStores } from 'hooks/useStores';
import { useDispatch } from 'react-redux';
import { getStores } from 'redux/stores/thunks';

import { Loader } from 'shared/components/Loader';
import { oops } from 'shared/constants/errorText';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/styles/components/Section.styled';
import { Wrap } from './ShopPage.styled';
import { Shop } from 'modules/Shop';
import { storeNameNormalize } from 'shared/utils/storeNameNormalize';
import { Info } from 'shared/styles/components/Info';

const ShopPage = () => {
  const { stores, isLoading, error } = useStores();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  useEffect(() => {
    if (stores[0]?.store_name)
      navigate(`/shop/${storeNameNormalize(stores[0].store_name)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores]);

  const showList = stores.length > 0 && !error;
  const showError = !isLoading && error;

  return (
    <>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {showList && (
            <Wrap>
              <div className="shop-list">
                <Shop stores={stores} />
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
