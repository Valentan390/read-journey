import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./userAuth/userAuthSlice";
import { modalReducer } from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
