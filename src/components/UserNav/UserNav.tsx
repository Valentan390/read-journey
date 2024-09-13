import { FC } from "react";
import { userNavData } from "../../helpers";
import { Nav, UserNav_NavLink } from "./UserNav.styled";

const UserNav: FC = () => {
  return (
    <Nav>
      {userNavData.map(({ to, text }, index) => (
        <UserNav_NavLink key={index} to={to}>
          {text}
        </UserNav_NavLink>
      ))}
    </Nav>
  );
};

export default UserNav;
