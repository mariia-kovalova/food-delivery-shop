import { useSelector } from 'react-redux';
import {
  selectOrdersError,
  selectOrdersIsLoading,
  selectOrdersItems,
} from 'redux/orders/selectors';

export const useOrders = () => {
  const orders = useSelector(selectOrdersItems);
  const isLoading = useSelector(selectOrdersIsLoading);
  const error = useSelector(selectOrdersError);

  return {
    orders,
    isLoading,
    error,
  };
};
