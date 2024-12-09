import { FC, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useHandlerModal,
} from "../../../hooks";
import {
  createBook,
  selectBookUser,
} from "../../../redux/books/booksSelectors";
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
import { useNavigate } from "react-router-dom";

interface AboutBookModalProps {
  aboutUserBook?: boolean;
}

const AboutBookModal: FC<AboutBookModalProps> = ({ aboutUserBook }) => {
  const { handlerModalClose } = useHandlerModal();
  const book = useAppSelector(createBook);
  const bookUser = useAppSelector(selectBookUser);
  const aboutBook = aboutUserBook ? bookUser : book;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!aboutBook) {
      handlerModalClose();
    }
  }, [aboutBook, handlerModalClose]);

  if (!aboutBook) return null;

  const { totalPages, _id, title, author, imageUrl } = aboutBook;

  const handlerAddRecommendBook = async (id: string) => {
    await dispatch(addBookRecommendThunk(id)).unwrap();
    handlerModalClose();
  };

  const navigateReading = () => {
    navigate("/reading");
    handlerModalClose();
  };

  const actionBook = aboutUserBook
    ? navigateReading
    : (_id: string) => handlerAddRecommendBook(_id);

  return (
    <AboutBook_Wrapper>
      <CloseBtn modal />
      <AboutBook_Image $image={imageUrl} />
      <AboutBook_H3>{title}</AboutBook_H3>
      <AboutBook_H4>{author}</AboutBook_H4>
      <AboutBook_P>{totalPages} pages</AboutBook_P>
      <AboutBook_Button type="button" onClick={() => actionBook(_id)}>
        {aboutUserBook ? "Start reading" : "Add to library"}
      </AboutBook_Button>
    </AboutBook_Wrapper>
  );
};

export default AboutBookModal;
