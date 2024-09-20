import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksRecommendedThunk, getAboutBookThunk } from "./operationsBooks";
import { Book, BooksRecommendet, BooksState } from "../../helpers";

const initialState: BooksState = {
  books: [],
  book: {
    _id: "",
    title: "",
    author: "",
    imageUrl: "",
    totalPages: 0,
    recommend: true,
  },
  totalPages: 1,
  page: 1,
  perPage: 0,
  idBook: "",
  isLoadingBooks: false,
  error: "",
};

export const handlerPendingAction: CaseReducer<BooksState> = (state) => {
  state.isLoadingBooks = true;
  state.error = "";
};

export const handlerRejectedAction: CaseReducer<
  BooksState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoadingBooks = false;
  state.error = action.payload;
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
    setIdBook: (state, action: PayloadAction<string>) => {
      state.idBook = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(booksRecommendedThunk.pending, handlerPendingAction)
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
      .addCase(booksRecommendedThunk.rejected, handlerRejectedAction)

      .addCase(getAboutBookThunk.pending, handlerPendingAction)
      .addCase(
        getAboutBookThunk.fulfilled,
        (state, action: PayloadAction<Book>) => {
          state.isLoadingBooks = false;
          state.book = action.payload;
        }
      )
      .addCase(getAboutBookThunk.rejected, handlerRejectedAction);
  },
});

export const { setNextPage, setPreviousPage, setIdBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
