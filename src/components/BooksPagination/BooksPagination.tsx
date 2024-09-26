import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  BooksPagination_Button,
  BooksPagination_Container,
  BooksPagination_H2,
  BooksPagination_Wrapper,
} from "./BooksPagination.styled";
import {
  useAppDispatch,
  useAppSelector,
  useMediaQueryResponsive,
} from "../../hooks";
import {
  selectBooksRecommendet,
  selectPage,
  selectToTalPages,
} from "../../redux/books/booksSelectors";
import { setNextPage, setPreviousPage } from "../../redux/books/booksSlice";

const BooksPagination: FC = () => {
  const { isTablet } = useMediaQueryResponsive();
  const page = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectToTalPages);
  const books = useAppSelector(selectBooksRecommendet);
  const dispatch = useAppDispatch();

  const isBook = books.length === 0;
  const isDisabledNext = page === totalPages;
  const isDisabledPrevious = page === 1;

  const handlePageChange = (direction: "next" | "previous") => {
    if (direction === "next" && !isDisabledNext) {
      dispatch(setNextPage());
    } else if (direction === "previous" && !isDisabledPrevious) {
      dispatch(setPreviousPage());
    }
  };

  return (
    <BooksPagination_Wrapper>
      <BooksPagination_H2>Recommended</BooksPagination_H2>
      <BooksPagination_Container>
        <BooksPagination_Button
          disabled={isDisabledPrevious || isBook}
          onClick={() => handlePageChange("previous")}
        >
          <Icon
            iconName="icon-chevron-left"
            width={isTablet ? 20 : 16}
            height={isTablet ? 20 : 16}
            stroke={isDisabledPrevious || isBook ? "white20" : "white"}
          />
        </BooksPagination_Button>
        <BooksPagination_Button
          disabled={isDisabledNext || isBook}
          onClick={() => handlePageChange("next")}
        >
          <Icon
            iconName="icon-chevron-right"
            width={isTablet ? 20 : 16}
            height={isTablet ? 20 : 16}
            stroke={isDisabledNext || isBook ? "white20" : "white"}
          />
        </BooksPagination_Button>
      </BooksPagination_Container>
    </BooksPagination_Wrapper>
  );
};

export default BooksPagination;
