import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/user.slice';
import apiSlice from './services/rootAPI'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;