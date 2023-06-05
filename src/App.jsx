import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import {
  home,
  all,
  shop,
  products,
  cart,
  history,
} from 'shared/constants/routes';
import { Layout } from 'modules/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOrdersByUserId } from 'redux/orders/thunks';
import { useCart } from 'hooks/useCart';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const ShopPage = lazy(() => import('pages/ShopPage/ShopPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));
const CartPage = lazy(() => import('pages/CartPage/CartPage'));
const HistoryPage = lazy(() => import('pages/HistoryPage/HistoryPage'));

export const App = () => {
  const { user_id } = useCart();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user_id) dispatch(getOrdersByUserId(user_id));
  }, [dispatch, user_id]);

  return (
    <Routes>
      <Route path={home} element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path={shop} element={<ShopPage />}>
          <Route path={products} element={<ProductsPage />} />
        </Route>
        <Route path={cart} element={<CartPage />} />
        <Route path={history} element={<HistoryPage />} />
        <Route path={all} element={<Navigate to={home} />} />
      </Route>
    </Routes>
  );
};
