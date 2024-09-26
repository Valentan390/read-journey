import { FC, useEffect } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { booksRecommendedThunk } from "../../redux/books/operationsBooks";
import { selectPage } from "../../redux/books/booksSelectors";

const MyLibraryPage: FC = () => {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(booksRecommendedThunk({ limit: 3, page }));
  }, [dispatch, page]);

  return (
    <MainComponent>
      <Dashboard />
    </MainComponent>
  );
};

export default MyLibraryPage;
