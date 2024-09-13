import { FC } from "react";
import useMediaQueryResponsive from "../../../hooks/useMediaQueryResponsive";
import Icon from "../../Icon/Icon";
import { LogOutButton, LogOutButtonIcon } from "./LogOutBtn.styled";

const LogOutBtn: FC = () => {
  const { isMobile } = useMediaQueryResponsive();
  return (
    <div>
      {isMobile ? (
        <LogOutButtonIcon>
          <Icon iconName="icon-menu-04" width={25} height={25} stroke="white" />
        </LogOutButtonIcon>
      ) : (
        <LogOutButton>Log out</LogOutButton>
      )}
    </div>
  );
};

export default LogOutBtn;
