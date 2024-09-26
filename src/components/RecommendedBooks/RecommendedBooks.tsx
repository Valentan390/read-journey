import { FC } from "react";
import {
  RecommendedBooks_Link,
  RecommendedBooks_P,
  RecommendedBooks_Wrapper,
} from "./RecommendedBooks.styled";
import BooksPagination from "../BooksPagination/BooksPagination";
import ListBooks from "../ListBooks/ListBooks";
import { useLocation } from "react-router-dom";
import Icon from "../Icon/Icon";

const RecommendedBooks: FC = () => {
  const { pathname } = useLocation();
  const isRecommended = pathname === "/recommended";
  return (
    <RecommendedBooks_Wrapper $isRecommended={isRecommended}>
      {isRecommended && <BooksPagination />}
      {!isRecommended && (
        <RecommendedBooks_P>Recommended books</RecommendedBooks_P>
      )}

      <ListBooks />
      {!isRecommended && (
        <RecommendedBooks_Link to={"/recommended"}>
          Home{" "}
          <Icon iconName="icon-log-in" width={20} height={20} stroke="white" />
        </RecommendedBooks_Link>
      )}
    </RecommendedBooks_Wrapper>
  );
};

export default RecommendedBooks;
