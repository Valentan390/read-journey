import { FC } from "react";
import CloseBtn from "../../Buttons/CloseBtn/CloseBtn";
import {
  BookLibrary_Div,
  BookLibrary_H3,
  BookLibrary_P,
  BookLibrary_Span,
  BookLibraryWrapper,
} from "./BookLibraryModal.styled";

const BookLibraryModal: FC = () => {
  return (
    <BookLibraryWrapper>
      <CloseBtn modal />
      <BookLibrary_Div />
      <BookLibrary_H3>Good job</BookLibrary_H3>
      <BookLibrary_P>
        Your book is now in <BookLibrary_Span>the library!</BookLibrary_Span>{" "}
        The joy knows no bounds and now you can start your training
      </BookLibrary_P>
    </BookLibraryWrapper>
  );
};

export default BookLibraryModal;
