import { ComponentType, FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthUser } from "../../hooks";

interface RestrictedRouteProps {
  component: ComponentType;
  redirectTo: string;
}

const RestrictedRoute: FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedin } = useAuthUser();
  return isLoggedin ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
