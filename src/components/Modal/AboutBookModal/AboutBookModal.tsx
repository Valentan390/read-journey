import { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useHandlerModal,
} from "../../../hooks";
import { createBook } from "../../../redux/books/booksSelectors";
import {
  AboutBook_Button,
  AboutBook_H3,
  AboutBook_H4,
  AboutBook_Image,
  AboutBook_P,
  AboutBook_Wrapper,
} from "./AboutBookModal.styled";
import CloseBtn from "../../Buttons/CloseBtn/CloseBtn";
import { addBookRecommendThunk } from "../../../redux/books/operationsBooks";

const AboutBookModal: FC = () => {
  const { handlerModalClose } = useHandlerModal();
  const book = useAppSelector(createBook);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!book) {
      handlerModalClose();
    }
  }, [book, handlerModalClose]);

  if (!book) {
    return <div>Book not found</div>;
  }

  const { totalPages, _id, title, author, imageUrl } = book;

  const handlerAddRecommendBook = async (id: string) => {
    await dispatch(addBookRecommendThunk(id)).unwrap();
    handlerModalClose();
  };

  return (
    <AboutBook_Wrapper>
      <CloseBtn modal />
      <AboutBook_Image $image={imageUrl} />
      <AboutBook_H3>{title}</AboutBook_H3>
      <AboutBook_H4>{author}</AboutBook_H4>
      <AboutBook_P>{totalPages} pages</AboutBook_P>
      <AboutBook_Button
        type="button"
        onClick={() => handlerAddRecommendBook(_id)}
      >
        Add to library
      </AboutBook_Button>
    </AboutBook_Wrapper>
  );
};

export default AboutBookModal;
