import { FC } from "react";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { selectUser } from "../../redux/userAuth/userAuthSelectors";
import useMediaQueryResponsive from "../../hooks/useMediaQueryResponsive";
import { UserBar_I, UserBar_p, UserBarWrapper } from "./UserBar.styled";

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
