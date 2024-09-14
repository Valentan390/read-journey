import { FieldErrors } from "react-hook-form";
import { FormData, InputAuth, Name } from "./interfaseData";
import { Variants } from "framer-motion";

export const userNavData = [
  {
    to: "/recommended",
    text: "Home",
  },
  {
    to: "/library",
    text: "My library",
  },
];

export const inputSignUp: InputAuth[] = [
  { name: "name", span: "Name:" },
  { name: "email", span: "Mail:" },
  { name: "password", span: "Password:" },
];
export const inputSignIn: InputAuth[] = [
  { name: "email", span: "Mail:" },
  { name: "password", span: "Password:" },
];

export const getInputType = (name: Name, passwordVisible: boolean) => {
  if (name === "password") {
    return passwordVisible ? "text" : "password";
  } else {
    return name === "email" ? "email" : "text";
  }
};

export const getIconName = (
  errors: FieldErrors<FormData>,
  isValid: boolean,
  passwordVisible: boolean
) => {
  if (errors.password) {
    return "icon-pajamas_error";
  } else if (isValid) {
    return "icon-gg_check-o";
  }
  return passwordVisible ? "icon-eye" : "icon-eye-off";
};

export const getIconStroke = (
  errors: FieldErrors<FormData>,
  isValid: boolean
) => {
  if (errors.password) {
    return "red";
  } else if (isValid) {
    return "green";
  }
  return "white";
};

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0, duration: 0.8 },
  },
};
