import { RootState } from "../store";

export const selectBoorsRecommendet = (state: RootState) => state.books.books;

export const selectToTalPages = (state: RootState) => state.books.totalPages;

export const selectPage = (state: RootState) => state.books.page;

export const selectIsLoadingBooks = (state: RootState) =>
  state.books.isLoadingBooks;
