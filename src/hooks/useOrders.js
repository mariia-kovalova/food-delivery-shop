import { useSelector } from 'react-redux';
import {
  selectOrdersError,
  selectOrdersIsLoading,
  selectOrdersItems,
} from 'redux/orders/selectors';

export const useOrders = () => {
  const items = useSelector(selectOrdersItems);
  const isLoading = useSelector(selectOrdersIsLoading);
  const error = useSelector(selectOrdersError);

  return {
    items,
    isLoading,
    error,
  };
};
