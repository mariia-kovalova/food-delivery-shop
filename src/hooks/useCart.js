import { useSelector } from 'react-redux';
import { selectCartItems, selectCartStoreName } from 'redux/cart/selectors';

export const useCart = () => {
  const items = useSelector(selectCartItems);
  const store_name = useSelector(selectCartStoreName);

  return {
    store_name,
    items,
  };
};
