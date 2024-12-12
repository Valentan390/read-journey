import { FC } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectBookUser,
  selectIsReadingBook,
} from "../../redux/books/booksSelectors";
import {
  AddReading_button,
  AddReading_form,
  AddReading_input,
  AddReading_label,
  AddReading_P,
  AddReading_p,
  AddReading_span,
} from "./AddReading.styled";
import { FormPageData, schemaPageBook } from "../../helpers";
import {
  saveFinishReadingBookThunk,
  saveStartReadingBookThunk,
} from "../../redux/books/operationsBooks";
import { toast } from "react-toastify";

const AddReading: FC = () => {
  const { _id } = useAppSelector(selectBookUser);
  const isReadingBook = useAppSelector(selectIsReadingBook);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormPageData>({
    mode: "onChange",
    resolver: yupResolver(schemaPageBook),
    defaultValues: {
      id: _id,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isReadingBook) {
        await dispatch(saveFinishReadingBookThunk(data)).unwrap();
        reset();
      } else {
        await dispatch(saveStartReadingBookThunk(data)).unwrap();
        reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
      }
    }
  });
  return (
    <AddReading_form onSubmit={onSubmit}>
      <AddReading_P>
        {isReadingBook ? "Stop page:" : "Start page:"}
      </AddReading_P>

      <AddReading_label>
        <AddReading_span>Page number:</AddReading_span>
        <AddReading_input
          $error={!!errors.page}
          $isValid={isValid}
          type="text"
          autoComplete="off"
          {...register("page")}
        />

        {(errors.page || isValid) && (
          <AddReading_p $error={!!errors.page}>
            {errors.page ? `${errors.page.message}` : "Success Page number"}
          </AddReading_p>
        )}
      </AddReading_label>
      <AddReading_button disabled={!isValid} type="submit">
        {isReadingBook ? "To stop" : "To start"}
      </AddReading_button>
    </AddReading_form>
  );
};

export default AddReading;
