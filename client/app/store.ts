import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./services/api/api.service";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
