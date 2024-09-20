import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectBooksRecommendet = (state: RootState) => state.books.books;

export const selectToTalPages = (state: RootState) => state.books.totalPages;

export const selectPage = (state: RootState) => state.books.page;

export const selectIsLoadingBooks = (state: RootState) =>
  state.books.isLoadingBooks;

export const selectIdBook = (state: RootState) => state.books.idBook;

export const selectBook = (state: RootState) => state.books.book;

export const createBook = createSelector(
  [selectBooksRecommendet, selectIdBook],
  (books, id) => books.find((book) => book._id === id)
);
