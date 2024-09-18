import { FC, useEffect } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Recommended_Wrapper } from "./RecommendedPage.styyled";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";
import {
  useAppDispatch,
  useAppSelector,
  useMediaQueryResponsive,
} from "../../hooks";
import { booksRecommendedThunk } from "../../redux/books/operationsBooks";
import { selectPage } from "../../redux/books/booksSelectors";
import { selectAuthor, selectTitle } from "../../redux/filter/filterSelectors";
import { getLimit } from "../../helpers";

const RecommendedPage: FC = () => {
  const { isMobile, isTablet, isDescktop } = useMediaQueryResponsive();
  const limit = getLimit(isMobile, isTablet, isDescktop);
  const page = useAppSelector(selectPage);
  const title = useAppSelector(selectTitle);
  const author = useAppSelector(selectAuthor);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (limit !== null) {
      dispatch(
        booksRecommendedThunk({
          title,
          author,
          page,
          limit,
        })
      );
    }
  }, [dispatch, limit, page, title, author]);

  return (
    <MainComponent>
      <Recommended_Wrapper>
        <Dashboard />
        <RecommendedBooks />
      </Recommended_Wrapper>
    </MainComponent>
  );
};

export default RecommendedPage;
