import { FC } from "react";
import { Dashboard_Wrapper } from "./Dashboard.styled";
import Filters from "../Filters/Filters";
import DescriptionFunctionality from "../DescriptionFunctionality/DescriptionFunctionality";
import Quote from "../Quote/Quote";
import { useMediaQueryResponsive } from "../../hooks";
import { useLocation } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import RecommendedBooks from "../RecommendedBooks/RecommendedBooks";

const Dashboard: FC = () => {
  const { isDescktop } = useMediaQueryResponsive();
  const { pathname } = useLocation();
  const isRecommended = pathname === "/recommended";
  return (
    <Dashboard_Wrapper>
      {isRecommended ? <Filters /> : <AddBook />}
      {isRecommended ? <DescriptionFunctionality /> : <RecommendedBooks />}
      {isRecommended && isDescktop ? <Quote /> : null}
    </Dashboard_Wrapper>
  );
};

export default Dashboard;
