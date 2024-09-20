import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { selectBooksRecommendet } from "../../redux/books/booksSelectors";
import ItemBook from "../ItemBook/ItemBook";
import { ListBooks_ul } from "./ListBooks.styled";

const ListBooks: FC = () => {
  const books = useAppSelector(selectBooksRecommendet);
  return (
    <ListBooks_ul>
      {books?.map(({ title, author, imageUrl, _id }) => (
        <ItemBook
          key={_id}
          title={title}
          author={author}
          imageUrl={imageUrl}
          _id={_id}
        />
      ))}
    </ListBooks_ul>
  );
};

export default ListBooks;
