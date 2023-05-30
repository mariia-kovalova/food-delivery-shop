import { storeNameNormalize } from './storeNameNormalize';

export const getStore = (stores, store_name) =>
  stores.find(store => storeNameNormalize(store.store_name) === store_name);
