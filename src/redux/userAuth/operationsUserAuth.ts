import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  FormDataSignIn,
  FormDataSignUp,
  Tokens,
  User,
  UserSignOut,
} from "../../helpers";
import { RootState } from "../store";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

const setAuthHeader: (token: string) => void = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader: () => void = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const userSignUpThunk = createAsyncThunk<
  User,
  FormDataSignUp,
  { rejectValue: string }
>("users/signup", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<User>("/users/signup", credentials);
    setAuthHeader(data.token);
    toast.success("You have successfully registered.");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body).";
            break;
          case 404:
            message = "Service not found.";
            break;
          case 409:
            message = "Such email already exists.";
            break;
          case 500:
            message = "Server error.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const userSignInThunk = createAsyncThunk<
  User,
  FormDataSignIn,
  { rejectValue: string }
>("users/signin", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<User>("/users/signin", credentials);
    setAuthHeader(data.token);
    toast.success("You have successfully logged in.");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body).";
            break;
          case 401:
            message = "Email or password invalid";
            break;
          case 404:
            message = "Service not found";
            break;
          case 500:
            message = "Server error.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const userCurrentThunk = createAsyncThunk<
  User,
  void,
  { rejectValue: string; state: RootState }
>("users/current", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.userAuth.token;
    if (persistedToken === "") {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setAuthHeader(persistedToken);
    const { data } = await axios.get<User>("users/current");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 401:
            message = "Unauthorized";
            break;
          case 404:
            message = "Service not found";
            break;
          case 500:
            message = "Server error.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const userRefreshTokenThunk = createAsyncThunk<
  Tokens,
  void,
  { rejectValue: string; state: RootState }
>("users/refresh", async (_, thunkAPI) => {
  try {
    const { refreshToken } = thunkAPI.getState().userAuth;
    if (refreshToken === "") {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setAuthHeader(refreshToken);
    const { data } = await axios.get<Tokens>("users/current/refersh");
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 401:
            message = "Unauthorized";
            break;
          case 404:
            message = "Service not found";
            break;
          case 500:
            message = "Server error.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const userSignOutThunk = createAsyncThunk<
  UserSignOut,
  void,
  { rejectValue: string }
>("user/signout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post<UserSignOut>("/users/signout");
    clearAuthHeader();
    toast.success(data.message);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 401:
            message = "Unauthorized";
            break;
          case 404:
            message = "Service not found";
            break;
          case 500:
            message = "Server error.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else if (error.request) {
        const message = "No response from the server. Please try again later.";
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      } else {
        const message = `Request error: ${error.message}`;
        toast.error(message);
        return thunkAPI.rejectWithValue(message);
      }
    } else if (error instanceof Error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
