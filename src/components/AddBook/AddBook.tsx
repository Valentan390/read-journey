import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  FormDataAddBooks,
  inputAddBooksRender,
  schemaAddBook,
} from "../../helpers";
import InputAddBoks from "../InputAddBoks/InputAddBoks";
import {
  AddBook_Button,
  AddBook_Form,
  AddBook_P,
  AddBook_Wrapper,
} from "./AddBook.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useHandlerModal } from "../../hooks";
import { addNewBookUserThunk } from "../../redux/books/operationsBooks";
import { toast } from "react-toastify";

const AddBook: FC = () => {
  const { handlerModalOpen } = useHandlerModal();
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormDataAddBooks>({
    mode: "onChange",
    resolver: yupResolver(schemaAddBook),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await dispatch(addNewBookUserThunk(data)).unwrap();
      handlerModalOpen("BookLibrary");
      reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  });

  return (
    <AddBook_Wrapper>
      <AddBook_P>Create your library:</AddBook_P>
      <AddBook_Form onSubmit={onSubmit}>
        {inputAddBooksRender.map(({ name, span }) => (
          <InputAddBoks
            key={span}
            name={name}
            span={span}
            register={register}
            errors={errors}
            isValid={isValid}
          />
        ))}
        <AddBook_Button type="submit" disabled={!isValid}>
          Add book
        </AddBook_Button>
      </AddBook_Form>
    </AddBook_Wrapper>
  );
};

export default AddBook;
