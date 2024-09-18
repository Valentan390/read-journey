import { FC } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import Dashboard from "../../components/Dashboard/Dashboard";
import { Recommended_Wrapper } from "./RecommendedPage.styyled";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";

const RecommendedPage: FC = () => {
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
