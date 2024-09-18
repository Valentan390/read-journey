import { FC } from "react";
import { Dashboard_Wrapper } from "./Dashboard.styled";
import Filters from "../Filters/Filters";
import DescriptionFunctionality from "../DescriptionFunctionality/DescriptionFunctionality";
import Quote from "../Quote/Quote";
import { useMediaQueryResponsive } from "../../hooks";
import { useLocation } from "react-router-dom";

const Dashboard: FC = () => {
  const { isDescktop } = useMediaQueryResponsive();
  const { pathname } = useLocation();
  const isRecommended = pathname === "/recommended";
  return (
    <Dashboard_Wrapper>
      {isRecommended ? <Filters /> : null}
      {isRecommended ? <DescriptionFunctionality /> : null}
      {isRecommended && isDescktop ? <Quote /> : null}
    </Dashboard_Wrapper>
  );
};

export default Dashboard;
