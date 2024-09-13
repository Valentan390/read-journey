import { ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";

interface PrivateRouteProps {
  component: ComponentType;
  redirectTo: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedin } = useAuthUser();
  return isLoggedin ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
