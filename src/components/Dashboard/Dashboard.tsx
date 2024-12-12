import { FC } from "react";
import { Dashboard_Wrapper } from "./Dashboard.styled";
import Filters from "../Filters/Filters";
import DescriptionFunctionality from "../DescriptionFunctionality/DescriptionFunctionality";
import Quote from "../Quote/Quote";
import { useAppSelector, useMediaQueryResponsive } from "../../hooks";
import { useLocation } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import RecommendedBooks from "../RecommendedBooks/RecommendedBooks";
import AddReading from "../AddReading/AddReading";
import Details from "../Details/Details";
import Progress from "../Progress/Progress";
import { selectBookUser } from "../../redux/books/booksSelectors";

const Dashboard: FC = () => {
  const { isDescktop } = useMediaQueryResponsive();
  const { pathname } = useLocation();
  const isRecommended = pathname === "/recommended";
  const isReading = pathname === "/reading";
  const { progress } = useAppSelector(selectBookUser);

  const RenderProgressAndDetails = progress.length > 0 ? Details : Progress;

  return (
    <Dashboard_Wrapper>
      {isRecommended ? <Filters /> : isReading ? <AddReading /> : <AddBook />}
      {isRecommended ? (
        <DescriptionFunctionality />
      ) : isReading ? (
        <RenderProgressAndDetails />
      ) : (
        <RecommendedBooks />
      )}
      {isRecommended && isDescktop ? <Quote /> : null}
    </Dashboard_Wrapper>
  );
};

export default Dashboard;
