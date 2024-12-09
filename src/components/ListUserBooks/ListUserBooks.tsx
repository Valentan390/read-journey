import { FC } from "react";
import { ListUserBooks_Ul } from "./ListUserBooks.styled";
import { useAppSelector } from "../../hooks";
import { createBookUser } from "../../redux/books/booksSelectors";
import NoData from "../NoData/NoData";
import ItemUserBooks from "../ItemUserBooks/ItemUserBooks";

const ListUserBooks: FC = () => {
  const userBooks = useAppSelector(createBookUser);
  return (
    <ListUserBooks_Ul>
      {userBooks.length <= 0 ? (
        <NoData />
      ) : (
        userBooks.map(({ imageUrl, title, author, _id }) => (
          <ItemUserBooks
            key={_id}
            imageUrl={imageUrl}
            title={title}
            author={author}
            _id={_id}
          />
        ))
      )}
    </ListUserBooks_Ul>
  );
};

export default ListUserBooks;
