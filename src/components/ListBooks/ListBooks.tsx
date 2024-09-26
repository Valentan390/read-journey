import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { selectBooksRecommendet } from "../../redux/books/booksSelectors";
import ItemBook from "../ItemBook/ItemBook";
import { ListBooks_ul } from "./ListBooks.styled";
import NoData from "../NoData/NoData";
import { useLocation } from "react-router-dom";

const ListBooks: FC = () => {
  const books = useAppSelector(selectBooksRecommendet);
  const { pathname } = useLocation();
  const isRecommended = pathname === "/recommended";
  return (
    <ListBooks_ul $isRecommended={isRecommended}>
      {books.length === 0 ? (
        <NoData />
      ) : (
        books?.map(({ title, author, imageUrl, _id }) => (
          <ItemBook
            key={_id}
            title={title}
            author={author}
            imageUrl={imageUrl}
            _id={_id}
          />
        ))
      )}
    </ListBooks_ul>
  );
};

export default ListBooks;
