import {
  selectIsLoadingUser,
  selectIsLoggedin,
  selectUser,
} from "../redux/userAuth/userAuthSelectors";
import { useAppSelector } from "./useReduxHooks";

const useAuthUser = () => {
  const user = useAppSelector(selectUser);
  const isLoggedin = useAppSelector(selectIsLoggedin);
  const isLoadingUser = useAppSelector(selectIsLoadingUser);
  return { user, isLoadingUser, isLoggedin };
};

export default useAuthUser;
