import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/user/sliceUser';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
