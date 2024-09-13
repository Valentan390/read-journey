import { createSlice } from "@reduxjs/toolkit";
import { UserAuthState } from "../../helpers";
import {
  userCurrentThunk,
  userRefreshTokenThunk,
  userSignInThunk,
  userSignOutThunk,
  userSignUpThunk,
} from "./operationsUserAuth";
import {
  handleFulfilled,
  handlePending,
  handleRefreshTokenFulfilled,
  handleRejected,
  handleSignOutFulfilled,
} from "./userAuthHelpers";

const initialState: UserAuthState = {
  user: { _id: "", name: "", email: "", token: "", refreshToken: "" },
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  isRefreshing: false,
  isLoadingUser: false,
  error: "",
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // userSignUp
      .addCase(userSignUpThunk.pending, handlePending)
      .addCase(userSignUpThunk.fulfilled, handleFulfilled)
      .addCase(userSignUpThunk.rejected, handleRejected)

      //  userSignIn
      .addCase(userSignInThunk.pending, handlePending)
      .addCase(userSignInThunk.fulfilled, handleFulfilled)
      .addCase(userSignInThunk.rejected, handleRejected)

      //  userCurrent
      .addCase(userCurrentThunk.pending, handlePending)
      .addCase(userCurrentThunk.fulfilled, handleFulfilled)
      .addCase(userCurrentThunk.rejected, handleRejected)

      //  userRefreshToken
      .addCase(userRefreshTokenThunk.pending, handlePending)
      .addCase(userRefreshTokenThunk.fulfilled, handleRefreshTokenFulfilled)
      .addCase(userRefreshTokenThunk.rejected, handleRejected)

      //  userSignOut
      .addCase(userSignOutThunk.pending, handlePending)
      .addCase(userSignOutThunk.fulfilled, (state) => {
        handleSignOutFulfilled(state, initialState);
      })
      .addCase(userSignOutThunk.rejected, handleRejected);
  },
});

export const userAuthReducer = userAuthSlice.reducer;
