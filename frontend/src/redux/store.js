import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import { apiSlice } from './slices/api.slice';
import authSliceReducer from './slices/auth.slice';
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
     cart: cartReducer,
     auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;
