import { FC } from "react";
import { userNavData } from "../../helpers";
import { Nav, UserNav_NavLink } from "./UserNav.styled";
import { useBurgerMenu } from "../../hooks";

const UserNav: FC = () => {
  const { handlerBurgerMenuClose } = useBurgerMenu();
  return (
    <Nav>
      {userNavData.map(({ to, text }, index) => (
        <UserNav_NavLink key={index} to={to} onClick={handlerBurgerMenuClose}>
          {text}
        </UserNav_NavLink>
      ))}
    </Nav>
  );
};

export default UserNav;
