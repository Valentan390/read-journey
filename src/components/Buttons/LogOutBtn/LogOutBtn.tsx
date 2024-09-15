import { FC } from "react";
import { LogOutButton } from "./LogOutBtn.styled";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { userSignOutThunk } from "../../../redux/userAuth/operationsUserAuth";

const LogOutBtn: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <LogOutButton type="button" onClick={() => dispatch(userSignOutThunk())}>
      Log out
    </LogOutButton>
  );
};

export default LogOutBtn;
