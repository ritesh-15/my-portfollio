import { configureStore } from "@reduxjs/toolkit";
import apiService from "./services/api/api.service";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
