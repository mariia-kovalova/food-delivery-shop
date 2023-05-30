import { useSelector } from 'react-redux';
import { selectCartItems } from 'redux/cart/selectors';

export const useCart = () => {
  const items = useSelector(selectCartItems);

  return {
    items,
  };
};
