import { configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./userAuth/userAuthSlice";
import { modalReducer } from "./modal/modalSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { burgerMenuReducer } from "./burgerMenu/burgerMenuSlice";

const userAuthPersistConfig = {
  key: "userAuth",
  storage,
  whitelist: ["refreshToken"],
};

const userAuthPersistedReducer = persistReducer(
  userAuthPersistConfig,
  userAuthReducer
);

export const store = configureStore({
  reducer: {
    userAuth: userAuthPersistedReducer,
    modal: modalReducer,
    burgerMenu: burgerMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
