import { FC } from "react";
import Logo from "../Logo/Logo";
import {
  SignUpAndSignIn_Button,
  SignUpAndSignIn_Form,
  SignUpAndSignIn_Link,
  SignUpAndSignIn_Span,
  SignUpAndSignIn_Title,
  SignUpAndSignInContainer,
  SignUpAndSignInWrapper,
} from "./SignUpAndSignIn.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation } from "react-router-dom";
import {
  FormData,
  inputSignIn,
  inputSignUp,
  schemaSignIn,
  schemaSignUp,
} from "../../helpers";
import InputAuth from "../InputAuth/InputAuth";
import useMediaQueryResponsive from "../../hooks/useMediaQueryResponsive";

const SignUpAndSignIn: FC = () => {
  const { pathname } = useLocation();
  const { isTablet } = useMediaQueryResponsive();
  const isSignUp = pathname === "/register";
  const schema = isSignUp ? schemaSignUp : schemaSignIn;
  const inputAuthRender = isSignUp ? inputSignUp : inputSignIn;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <SignUpAndSignInWrapper>
      <Logo isAuth={isTablet} />
      <SignUpAndSignIn_Title>
        Expand your mind, reading{" "}
        <SignUpAndSignIn_Span>a book</SignUpAndSignIn_Span>
      </SignUpAndSignIn_Title>
      <SignUpAndSignIn_Form onSubmit={onSubmit}>
        {inputAuthRender?.map(({ name, span }, index) => (
          <InputAuth
            key={index}
            name={name}
            span={span}
            register={register}
            errors={errors}
            isValid={isValid}
          />
        ))}

        <SignUpAndSignInContainer>
          <SignUpAndSignIn_Button type="submit">
            {isSignUp ? "Registration" : "Log in"}
          </SignUpAndSignIn_Button>
          <SignUpAndSignIn_Link to={isSignUp ? "/login" : "/register"}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </SignUpAndSignIn_Link>
        </SignUpAndSignInContainer>
      </SignUpAndSignIn_Form>
    </SignUpAndSignInWrapper>
  );
};

export default SignUpAndSignIn;
