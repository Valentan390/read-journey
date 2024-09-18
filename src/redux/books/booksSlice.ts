import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksRecommendedThunk } from "./operationsBooks";
import { BooksRecommendet, BooksState } from "../../helpers";

const initialState: BooksState = {
  books: [],
  totalPages: 1,
  page: 1,
  perPage: 0,
  isLoadingBooks: false,
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setPreviousPage: (state) => {
      if (state.page >= 2) {
        state.page -= 1;
      }
    },
    setNextPage: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(booksRecommendedThunk.pending, (state) => {
        state.isLoadingBooks = true;
        state.error = "";
      })
      .addCase(
        booksRecommendedThunk.fulfilled,
        (state, action: PayloadAction<BooksRecommendet>) => {
          state.isLoadingBooks = false;
          state.books = action.payload.results;
          state.page = action.payload.page;
          state.perPage = action.payload.perPage;
          state.totalPages = action.payload.totalPages;
        }
      )
      .addCase(booksRecommendedThunk.rejected, (state, action) => {
        state.isLoadingBooks = false;
        state.error = action.payload;
      });
  },
});

export const { setNextPage, setPreviousPage } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
