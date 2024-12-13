import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../redux/features/cart/cartSlice";
import carsApi from './cars/carsApi';
import newsApi from './news/newsApi'; // Impor newsApi

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [carsApi.reducerPath]: carsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer, // Tambahkan reducer untuk newsApi
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(carsApi.middleware, newsApi.middleware), // Tambahkan middleware untuk newsApi
});
