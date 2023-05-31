import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { selectThemeMode } from 'redux/theme/selectors';

import { Footer } from 'modules/Footer';
import { Header } from 'modules/Header';
import { Main, Wrap } from './Layout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const mode = useSelector(selectThemeMode);

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
