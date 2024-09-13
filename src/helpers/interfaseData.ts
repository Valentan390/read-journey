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
