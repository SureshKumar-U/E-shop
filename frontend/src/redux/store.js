import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import { apiSlice } from './slices/api.slice';
import userSliceReducer from './slices/userSlice';
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
     cart: cartReducer,
     user: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;
