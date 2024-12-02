import { FC } from "react";
import {
  NoData_Book,
  NoData_P,
  NoData_Span,
  NoData_Wrapper,
} from "./NoData.styled";
import { useLocation } from "react-router-dom";

const NoData: FC = () => {
  const { pathname } = useLocation();
  const isRecommended = pathname === "/recommended";
  return (
    <NoData_Wrapper>
      <NoData_Book />
      <NoData_P>
        {isRecommended ? (
          <>
            Unfortunately{" "}
            <NoData_Span>there are no books with the specified</NoData_Span>{" "}
            parameters. Please change the search parameters.
          </>
        ) : (
          <>
            To start training, add <NoData_Span>some of your books</NoData_Span>{" "}
            or from the recommended ones
          </>
        )}
      </NoData_P>
    </NoData_Wrapper>
  );
};

export default NoData;
