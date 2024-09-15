import { FC } from "react";
import SignUpAndSignIn from "../../components/SignUpAndSignIn/SignUpAndSignIn";
import useMediaQueryResponsive from "../../hooks/useMediaQueryResponsive";
import Iphone15 from "../../components/Iphone15/Iphone15";
import MainComponent from "../../components/MainComponent/MainComponent";

const LoginPage: FC = () => {
  const { isTablet } = useMediaQueryResponsive();
  return (
    <MainComponent>
      <SignUpAndSignIn />
      {!isTablet && <Iphone15 />}
    </MainComponent>
  );
};

export default LoginPage;
