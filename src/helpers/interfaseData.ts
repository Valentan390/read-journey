import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}

export interface UserAuthState {
  user: User;
  token: string;
  refreshToken: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoadingUser: boolean;
  error: string | undefined;
}

export interface FormDataSignIn {
  email: string;
  password: string;
}

export interface FormDataSignUp extends FormDataSignIn {
  name: string;
}

export type Tokens = Pick<User, "token" | "refreshToken">;

export interface UserSignOut {
  message: string;
}

export interface FormData {
  name?: string;
  email: string;
  password: string;
}

export type Name = "name" | "email" | "password";

export type Span = "Name:" | "Mail:" | "Password:";

export interface InputAuthProps {
  name: Name;
  span: Span;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  isValid: boolean;
}

export interface InputAuth {
  name: Name;
  span: Span;
}

export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
  status: string;
  owner: string;
  progress: [];
}

export interface BooksRecommendet {
  results: Book[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface Progress {
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: "inactive" | "active";
}

export interface TimeLeftToRead {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface BookUser {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: string;
  owner: string;
  progress: Progress[];
}

export interface FinishReadingBook extends BookUser {
  timeLeftToRead: TimeLeftToRead;
}

export interface BooksState {
  books: Book[];
  book: Book;
  bookUser: BookUser;
  progressBookUser: Progress[];
  timeLeftToRead: TimeLeftToRead;
  booksUser: BookUser[];
  isReadingBook: boolean;
  totalPages: number;
  page: number;
  perPage: number;
  idBook: string;
  isLoadingBooks: boolean;
  error: string | undefined;
}

export type NameInputAddBooks = "title" | "author" | "totalPages";

export type SpanInputAddBooks =
  | "Book title:"
  | "The author:"
  | "Number of pages:";

export interface InputAddBooksRender {
  name: NameInputAddBooks;
  span: SpanInputAddBooks;
}

export interface FormDataAddBooks {
  title: string;
  author: string;
  totalPages: number;
}

export interface FormPageData {
  page: number;
  id: string;
}
