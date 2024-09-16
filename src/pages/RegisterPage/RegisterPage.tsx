import { FC } from "react";
import SignUpAndSignIn from "../../components/SignUpAndSignIn/SignUpAndSignIn";
import Iphone15 from "../../components/Iphone15/Iphone15";

import { useMediaQueryResponsive } from "../../hooks";
import MainComponent from "../../components/MainComponent/MainComponent";

const RegisterPage: FC = () => {
  const { isTablet } = useMediaQueryResponsive();
  return (
    <MainComponent>
      <SignUpAndSignIn />
      {!isTablet && <Iphone15 />}
    </MainComponent>
  );
};

export default RegisterPage;
