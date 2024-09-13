import { FC } from "react";
import Icon from "../Icon/Icon";
import { Logo_Link } from "./Logo.styled";
import useMediaQueryResponsive from "../../hooks/useMediaQueryResponsive";

const Logo: FC<{ isAuth?: boolean }> = ({ isAuth }) => {
  const { isDescktop } = useMediaQueryResponsive();

  return (
    <Logo_Link to={"/"}>
      <Icon iconName="icon-Frame-8" width={42} height={17} fill="white" />
      {(isDescktop || isAuth) && "read journey"}
    </Logo_Link>
  );
};

export default Logo;
