import { FC } from "react";
import {
  Filters_Button,
  Filters_Form,
  Filters_Input,
  Filters_Label,
  Filters_P,
  Filters_Span,
  Filters_Wrapper,
} from "./Filters.styled";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { setFilter } from "../../redux/filter/filterSlise";

export interface FiltersFormData {
  title: string;
  author: string;
}

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch } = useForm<FiltersFormData>();
  const title = watch("title");
  const author = watch("author");
  const isButtonDisabled = !title && !author;

  const onSubmit = handleSubmit((data) => {
    dispatch(setFilter(data));
  });

  const filtersInputRender = (
    span: "Book title:" | "The author:",
    name: "title" | "author"
  ) => {
    return (
      <Filters_Label>
        <Filters_Span>{span}</Filters_Span>
        <Filters_Input
          $paddingLeft={span}
          type="text"
          {...register(name)}
          autoComplete="off"
        />
      </Filters_Label>
    );
  };

  return (
    <Filters_Wrapper>
      <Filters_P>Filters:</Filters_P>
      <Filters_Form onSubmit={onSubmit}>
        {filtersInputRender("Book title:", "title")}
        {filtersInputRender("The author:", "author")}
        <Filters_Button type="submit" disabled={isButtonDisabled}>
          To apply
        </Filters_Button>
      </Filters_Form>
    </Filters_Wrapper>
  );
};

export default Filters;
