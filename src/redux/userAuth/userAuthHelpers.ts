import type { PayloadAction } from "@reduxjs/toolkit";

import { Tokens, User, UserAuthState } from "../../helpers";

export const handlePending = (state: UserAuthState) => {
  state.error = "";
  state.isLoadingUser = true;
};

export const handleFulfilled = (
  state: UserAuthState,
  action: PayloadAction<User>
) => {
  state.isLoggedIn = true;
  state.isLoadingUser = false;
  state.user = action.payload;
  state.token = action.payload.token;
  state.refreshToken = action.payload.refreshToken;
};

export const handleRejected = (
  state: UserAuthState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoadingUser = false;
  state.error = action.payload;
};

export const handleRefreshTokenFulfilled = (
  state: UserAuthState,
  action: PayloadAction<Tokens>
) => {
  state.isLoadingUser = false;
  state.token = action.payload.token;
  state.refreshToken = action.payload.refreshToken;
};

export const handleSignOutFulfilled = (
  state: UserAuthState,
  initialState: UserAuthState
) => {
  state.user = initialState.user;
  state.token = initialState.token;
  state.refreshToken = initialState.refreshToken;
  state.isLoggedIn = initialState.isLoggedIn;
  state.isRefreshing = initialState.isRefreshing;
  state.isLoadingUser = initialState.isLoadingUser;
  state.error = initialState.error;
};
