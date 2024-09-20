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

type BookPreview = Pick<Book, "title" | "author" | "imageUrl" | "_id">;

const ItemBook: FC<BookPreview> = ({ author, title, imageUrl, _id }) => {
  const { handlerModalOpen } = useHandlerModal();
  const dispatch = useAppDispatch();
  const handlerOpenModal = async (modal: string, id: string) => {
    dispatch(setIdBook(id));
    handlerModalOpen(modal);
  };
  return (
    <ItemBook_Li onClick={() => handlerOpenModal("AboutBook", _id)}>
      <ItemBook_Div $url={imageUrl} />
      <ItemBook_H3>{title}</ItemBook_H3>
      <ItemBook_P>{author}</ItemBook_P>
    </ItemBook_Li>
  );
};

export default ItemBook;
