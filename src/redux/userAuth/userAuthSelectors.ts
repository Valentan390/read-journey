import { RootState } from "../store";

export const selectUser = (state: RootState) => state.userAuth.user;

export const selectIsLoggedin = (state: RootState) => state.userAuth.isLoggedIn;

export const selectIsLoadingUser = (state: RootState) =>
  state.userAuth.isLoadingUser;
