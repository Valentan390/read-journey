import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";
import useAuthUser from "./hooks/useAuthUser";

const App: FC = () => {
  const { isLoggedin } = useAuthUser();

  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/recommended"
              component={RegisterPage}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/recommended" component={LoginPage} />
          }
        />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Navigate to={isLoggedin ? "/recommended" : "/register"} />
            }
          />

          <Route
            path="/recommended"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={RecommendedPage}
              />
            }
          />

          <Route
            path="/library"
            element={
              <PrivateRoute redirectTo="/register" component={MyLibraryPage} />
            }
          />

          <Route
            path="/reading"
            element={
              <PrivateRoute redirectTo="/register" component={ReadingPage} />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
