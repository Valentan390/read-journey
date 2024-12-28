import * as yup from "yup";

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const enRegexp = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;

export const schemaSignUp = yup.object({
  name: yup
    .string()
    .required("Field is required")
    .min(3, "must be at least 3 characters long"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(7, "must be at least 7 characters long")
    .max(18, "must be no more than 18 characters long"),
});

export const schemaSignIn = yup.object({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(7, "must be at least 7 characters long")
    .max(18, "must be no more than 18 characters long"),
});

export const schemaAddBook = yup.object({
  title: yup
    .string()
    .required("Field is required")
    .min(3, "must be at least 3 characters long")
    .matches(enRegexp, "Title must contain only Latin letters"),
  author: yup
    .string()
    .required("Field is required")
    .min(3, "must be at least 3 characters long")
    .matches(enRegexp, "Author must contain only Latin letters"),
  totalPages: yup
    .number()
    .typeError("Total pages must be a number")
    .required("Field is required")
    .positive("Total pages must be a positive number")
    .integer("Total pages must be an integer"),
});

export const schemaPageBook = yup.object({
  page: yup
    .number()
    .typeError("Page must be a valid number")
    .transform((value, originalValue) =>
      /^\d+$/.test(originalValue) ? Number(originalValue) : undefined
    )
    .min(1, "Page must be at least 1")
    .integer("Page must be an integer")
    .required("Page is required"),
  id: yup.string().required("Book ID is required"),
});
