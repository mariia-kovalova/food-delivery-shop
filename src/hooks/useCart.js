import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartStoreLocation,
  selectCartStoreName,
  selectCartTotalPrice,
  selectCartUserId,
} from 'redux/cart/selectors';

export const useCart = () => {
  const user_id = useSelector(selectCartUserId);
  const store_name = useSelector(selectCartStoreName);
  const store_location = useSelector(selectCartStoreLocation);
  const total_price = useSelector(selectCartTotalPrice);
  const items = useSelector(selectCartItems);

  return {
    user_id,
    store_name,
    store_location,
    total_price,
    items,
  };
};
