import { FC } from "react";
import Icon from "../Icon/Icon";
import {
  ItemUserBooks_div,
  ItemUserBooks_Div,
  ItemUserBooks_H3,
  ItemUserBooks_Li,
  ItemUserBooks_P,
  ItemUserBooksButton,
  ItemUserBooksContainer,
} from "./ItemUserBooks.styled";
import { useAppDispatch, useHandlerModal } from "../../hooks";
import {
  deleteUserBookThunk,
  getInfoAboutUserBookThunk,
} from "../../redux/books/operationsBooks";
import { toast } from "react-toastify";

interface ItemUserBooksProps {
  imageUrl: string;
  title: string;
  author: string;
  _id: string;
}

const ItemUserBooks: FC<ItemUserBooksProps> = ({
  imageUrl,
  title,
  author,
  _id,
}) => {
  const { handlerModalOpen } = useHandlerModal();
  const dispatch = useAppDispatch();

  const handleUserBookModal = async (id: string) => {
    try {
      await dispatch(getInfoAboutUserBookThunk(id)).unwrap();
      handlerModalOpen("AboutUserBook");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  };
  return (
    <ItemUserBooks_Li>
      <ItemUserBooks_Div
        $url={imageUrl}
        onClick={() => handleUserBookModal(_id)}
      />
      <ItemUserBooksContainer>
        <ItemUserBooks_div>
          <ItemUserBooks_H3>{title}</ItemUserBooks_H3>
          <ItemUserBooks_P>{author}</ItemUserBooks_P>
        </ItemUserBooks_div>
        <ItemUserBooksButton onClick={() => dispatch(deleteUserBookThunk(_id))}>
          <Icon
            iconName="icon-trash-2"
            width={14}
            height={14}
            stroke="lightRed"
          />
        </ItemUserBooksButton>
      </ItemUserBooksContainer>
    </ItemUserBooks_Li>
  );
};

export default ItemUserBooks;
