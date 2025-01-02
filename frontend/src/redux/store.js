import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import { apiSlice } from './slices/api.slice';
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
     cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;
