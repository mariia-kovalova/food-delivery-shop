import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { themeReducer } from './theme/slice';
import { storesReducer } from './stores/slice';
import { storeReducer } from './store/slice';
import { ordersReducer } from './orders/slice';
import { cartReducer } from './cart/slice';
import { userReducer } from './user/slice';

const persistConfig = {
  key: 'delivery-food-app',
  storage,
  whitelist: ['theme', 'cart', 'user'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  stores: storesReducer,
  store: storeReducer,
  orders: ordersReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
