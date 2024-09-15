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
import { useLocation, useNavigate } from "react-router-dom";
import {
  FormData,
  inputSignIn,
  inputSignUp,
  schemaSignIn,
  schemaSignUp,
} from "../../helpers";
import InputAuth from "../InputAuth/InputAuth";
import useMediaQueryResponsive from "../../hooks/useMediaQueryResponsive";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import {
  userSignInThunk,
  userSignUpThunk,
} from "../../redux/userAuth/operationsUserAuth";
import { toast } from "react-toastify";

const SignUpAndSignIn: FC = () => {
  const { pathname } = useLocation();
  const { isTablet } = useMediaQueryResponsive();
  const isSignUp = pathname === "/register";
  const schema = isSignUp ? schemaSignUp : schemaSignIn;
  const inputAuthRender = isSignUp ? inputSignUp : inputSignIn;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const action = isSignUp ? userSignUpThunk : userSignInThunk;
      await dispatch(action(data)).unwrap();
      navigate("/recommended");
      reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  });

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

        <SignUpAndSignInContainer $marginTop={isSignUp}>
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
