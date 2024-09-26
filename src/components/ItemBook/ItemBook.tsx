import { FC } from "react";
import { Book } from "../../helpers";
import {
  ItemBook_Div,
  ItemBook_H3,
  ItemBook_Li,
  ItemBook_P,
} from "./ItemBook.styled";
import { useAppDispatch, useHandlerModal } from "../../hooks";
import { setIdBook } from "../../redux/books/booksSlice";
import { useLocation } from "react-router-dom";

type BookPreview = Pick<Book, "title" | "author" | "imageUrl" | "_id">;

const ItemBook: FC<BookPreview> = ({ author, title, imageUrl, _id }) => {
  const { handlerModalOpen } = useHandlerModal();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isRecommended = pathname === "/recommended";

  const handlerOpenModal = async (modal: string, id: string) => {
    dispatch(setIdBook(id));
    handlerModalOpen(modal);
  };

  return (
    <ItemBook_Li
      $isRecommended={isRecommended}
      onClick={() => handlerOpenModal("AboutBook", _id)}
    >
      <ItemBook_Div $isRecommended={isRecommended} $url={imageUrl} />
      <ItemBook_H3 $isRecommended={isRecommended}>{title}</ItemBook_H3>
      <ItemBook_P>{author}</ItemBook_P>
    </ItemBook_Li>
  );
};

export default ItemBook;
