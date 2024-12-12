import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Book,
  BooksRecommendet,
  BookUser,
  FinishReadingBook,
  FormDataAddBooks,
  FormPageData,
  Progress,
} from "../../helpers";

export interface RecommendedParams {
  title?: string | null;
  author?: string | null;
  page?: number;
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

export const addNewBookUserThunk = createAsyncThunk<
  BookUser,
  FormDataAddBooks,
  { rejectValue: string }
>("books/add", async (book, thunkAPI) => {
  try {
    const { data } = await axios.post<BookUser>("books/add", book);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body)";
            break;
          case 404:
            message = "Service not found.";
            break;
          case 409:
            message = "Such book already exists";
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

export const getUserBooksThunk = createAsyncThunk<
  BookUser[],
  void,
  { rejectValue: string }
>("books/own", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<BookUser[]>("books/own");
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
            message = "Not found";
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

export const deleteUserBookThunk = createAsyncThunk<
  {
    message: string;
    id: string;
  },
  string,
  { rejectValue: string }
>("books/remove", async (idBook, thunkAPI) => {
  try {
    const { data } = await axios.delete<{
      message: string;
      id: string;
    }>(`books/remove/${idBook}`);
    toast.success("The book has been successfully deleted.");
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
            message = "Not found";
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

export const getInfoAboutUserBookThunk = createAsyncThunk<
  BookUser,
  string,
  { rejectValue: string }
>("books/id", async (idUserBook, thunkAPI) => {
  try {
    const { data } = await axios.get<BookUser>(`books/${idUserBook}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body)";
            break;
          case 404:
            message = "Not found";
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

export const saveStartReadingBookThunk = createAsyncThunk<
  Progress[],
  FormPageData,
  { rejectValue: string }
>("books/reading/start", async (bookPage, thunkAPI) => {
  try {
    const { data } = await axios.post<BookUser>(
      "books/reading/start",
      bookPage
    );
    return data.progress;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body)";
            break;
          case 404:
            message = "Not found";
            break;
          case 409:
            message =
              "You haven't started reading this book | This book is already read | The finish page cann't be less than the start page";
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

export const saveFinishReadingBookThunk = createAsyncThunk<
  FinishReadingBook,
  FormPageData,
  { rejectValue: string }
>("books/reading/finish", async (bookPage, thunkAPI) => {
  try {
    const { data } = await axios.post<FinishReadingBook>(
      "books/reading/finish",
      bookPage
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        let message = "An error occurred";
        switch (status) {
          case 400:
            message = "Bad request (invalid request body)";
            break;
          case 404:
            message = "Not found";
            break;
          case 409:
            message =
              "You haven't started reading this book | This book is already read | The finish page cann't be less than the start page";
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
