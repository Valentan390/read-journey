import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectBooksRecommendet = (state: RootState) => state.books.books;

export const selectToTalPages = (state: RootState) => state.books.totalPages;

export const selectPage = (state: RootState) => state.books.page;

export const selectIsLoadingBooks = (state: RootState) =>
  state.books.isLoadingBooks;

export const selectIdBook = (state: RootState) => state.books.idBook;

export const selectBook = (state: RootState) => state.books.book;

export const selectStatusBook = (state: RootState) => state.filter.status;

export const selectBooksUser = (state: RootState) => state.books.booksUser;

export const selectBookUser = (state: RootState) => state.books.bookUser;

export const selectIsReadingBook = (state: RootState) =>
  state.books.isReadingBook;

export const selectProgressBookUser = (state: RootState) =>
  state.books.progressBookUser;

export const selectTimeLeftToRead = (state: RootState) =>
  state.books.timeLeftToRead;

export const createBook = createSelector(
  [selectBooksRecommendet, selectIdBook],
  (books, id) => books.find((book) => book._id === id)
);

export const createBookUser = createSelector(
  [selectBooksUser, selectStatusBook],
  (booksUser, status) => {
    if (status === "") {
      return booksUser;
    }
    return booksUser.filter((bookUser) => bookUser.status === status);
  }
);
