import { useSelector } from 'react-redux';
import {
  selectStoresError,
  selectStoresIsLoading,
  selectStoresItems,
} from 'redux/stores/selectors';

export const useStores = () => {
  const stores = useSelector(selectStoresItems);
  const isLoading = useSelector(selectStoresIsLoading);
  const error = useSelector(selectStoresError);

  return {
    stores,
    isLoading,
    error,
  };
};
