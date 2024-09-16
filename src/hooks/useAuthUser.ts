import {
  selectIsLoadingUser,
  selectIsLoggedin,
  selectToken,
  selectUser,
} from "../redux/userAuth/userAuthSelectors";
import { useAppSelector } from "./useReduxHooks";

export const useAuthUser = () => {
  const user = useAppSelector(selectUser);
  const isLoggedin = useAppSelector(selectIsLoggedin);
  const isLoadingUser = useAppSelector(selectIsLoadingUser);
  const token = useAppSelector(selectToken);
  return { user, isLoadingUser, isLoggedin, token };
};
