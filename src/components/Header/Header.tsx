import { FC } from "react";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import UserBar from "../UserBar/UserBar";
import LogOutBtn from "../Buttons/LogOutBtn/LogOutBtn";
import {
  Header_div,
  Header_header,
  HeaderContainer,
  HeaderSection,
} from "./Header.styled";
import useMediaQueryResponsive from "../../hooks/useMediaQueryResponsive";

const Header: FC = () => {
  const { isMobile } = useMediaQueryResponsive();
  return (
    <HeaderSection>
      <HeaderContainer className="container">
        <Header_header>
          <Logo />
          {!isMobile && <UserNav />}
          <Header_div>
            <UserBar />
            <LogOutBtn />
          </Header_div>
        </Header_header>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
