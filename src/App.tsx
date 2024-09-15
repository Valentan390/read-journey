import { FC, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";
import useAuthUser from "./hooks/useAuthUser";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";
import { useAppDispatch } from "./hooks/useReduxHooks";
import { userRefreshTokenThunk } from "./redux/userAuth/operationsUserAuth";

const App: FC = () => {
  const { isLoggedin } = useAuthUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userRefreshTokenThunk());
  }, [dispatch]);

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

      <ModalContainer>
        <ModalContent />
      </ModalContainer>

      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
