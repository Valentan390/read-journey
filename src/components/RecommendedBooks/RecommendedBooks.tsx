import { FC } from "react";
import { RecommendedBooks_Wrapper } from "./RecommendedBooks.styled";
import BooksPagination from "../BooksPagination/BooksPagination";

const RecommendedBooks: FC = () => {
  return (
    <RecommendedBooks_Wrapper>
      <BooksPagination />
    </RecommendedBooks_Wrapper>
  );
};

export default RecommendedBooks;
