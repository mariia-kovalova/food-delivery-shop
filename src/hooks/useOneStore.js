import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'redux/cart/selectors';
import {
  selectStoreId,
  selectStoreItems,
  selectStoreLocation,
  selectStoreName,
} from 'redux/store/selectors';
import { getRandomPrice } from 'shared/utils/getRandomPrice';

const selectStoreItemsWithPrice = createSelector([selectStoreItems], items =>
  items.map(item => ({ ...item, price: getRandomPrice() }))
);

const slectItemsWithPriceAndIsInCart = createSelector(
  [selectStoreItemsWithPrice, selectCartItems],
  (storeItems, cartItems) => {
    const cartIds = cartItems?.map(item => item.id) || [];

    return storeItems.map(item => ({
      ...item,
      isInCart: cartIds.includes(item.id),
    }));
  }
);

export const useOneStore = () => {
  const id = useSelector(selectStoreId);
  const name = useSelector(selectStoreName);
  const location = useSelector(selectStoreLocation);
  const products = useSelector(slectItemsWithPriceAndIsInCart);

  return {
    id,
    name,
    location,
    products,
  };
};
