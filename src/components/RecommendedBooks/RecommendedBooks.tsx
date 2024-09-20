import { FC } from "react";
import { RecommendedBooks_Wrapper } from "./RecommendedBooks.styled";
import BooksPagination from "../BooksPagination/BooksPagination";
import ListBooks from "../ListBooks/ListBooks";

const RecommendedBooks: FC = () => {
  return (
    <RecommendedBooks_Wrapper>
      <BooksPagination />
      <ListBooks />
    </RecommendedBooks_Wrapper>
  );
};

export default RecommendedBooks;
