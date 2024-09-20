import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { Book, BooksRecommendet } from "../../helpers";

export interface RecommendedParams {
  title: string | null;
  author: string | null;
  page: number;
  limit: number | null;
}

export const booksRecommendedThunk = createAsyncThunk<
  BooksRecommendet,
  RecommendedParams,
  { rejectValue: string }
>("books/recommended", async (params, thunkAPI) => {
  try {
    const { data } = await axios.get("/books/recommend", { params: params });
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
            message = "Service not found.";
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

export const getAboutBookThunk = createAsyncThunk<
  Book,
  string,
  { rejectValue: string }
>("books/about", async (idBook, thunkAPI) => {
  try {
    const { data } = await axios.get<Book>(`/books/${idBook}`);
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
            message = "Service not found.";
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

export const addBookRecommendThunk = createAsyncThunk<
  Book,
  string,
  { rejectValue: string }
>("books/add/id", async (id, thunkAPI) => {
  try {
    const { data } = await axios.post(`books/add/${id}`);
    toast.success("You have successfully added a book.");
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
            message = "Service not found.";
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
