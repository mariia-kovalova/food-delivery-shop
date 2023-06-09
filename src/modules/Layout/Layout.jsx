import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useCart } from 'hooks/useCart';
import { useDispatch, useSelector } from 'react-redux';
import { selectThemeMode } from 'redux/theme/selectors';
import { getOrdersByUserId } from 'redux/orders/thunks';

import { Footer } from 'modules/Footer';
import { Header } from 'modules/Header';
import { Main, Wrap } from './Layout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const { user_id } = useCart();
  const mode = useSelector(selectThemeMode);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user_id) dispatch(getOrdersByUserId(user_id));
  }, [dispatch, user_id]);

  return (
    <Wrap>
      <Header />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
      <ToastContainer autoClose={2500} theme={mode} />
    </Wrap>
  );
};
