import * as yup from "yup";

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

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
