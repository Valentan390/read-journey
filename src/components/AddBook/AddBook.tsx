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

const AddBook: FC = () => {
  const {
    register,
    // reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormDataAddBooks>({
    mode: "onChange",
    resolver: yupResolver(schemaAddBook),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

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
