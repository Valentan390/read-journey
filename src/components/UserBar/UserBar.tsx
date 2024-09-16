import { FC } from "react";
import { selectUser } from "../../redux/userAuth/userAuthSelectors";
import { UserBar_I, UserBar_p, UserBarWrapper } from "./UserBar.styled";
import { useAppSelector, useMediaQueryResponsive } from "../../hooks";

const UserBar: FC = () => {
  const user = useAppSelector(selectUser);
  const { isDescktop } = useMediaQueryResponsive();
  return (
    <UserBarWrapper>
      <UserBar_I>I</UserBar_I>
      {isDescktop && <UserBar_p>{user?.name}</UserBar_p>}
    </UserBarWrapper>
  );
};

export default UserBar;
