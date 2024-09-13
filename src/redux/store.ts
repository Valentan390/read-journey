import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./userAuth/userAuthSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
