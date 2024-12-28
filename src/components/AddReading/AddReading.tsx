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
  const { _id, progress } = useAppSelector(selectBookUser);
  const hasActiveStatus = progress?.some((entry) => entry.status === "active");
  const activeEntry = progress?.find((entry) => entry.status === "active");
  const startPage = activeEntry ? activeEntry.startPage : 1;
  const maxFinishPage = progress.reduce((max, entry) => {
    return entry.finishPage > max ? entry.finishPage : max;
  }, 0);

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
      // page: hasActiveStatus ? startPage : maxFinishPage + 1,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (hasActiveStatus || isReadingBook) {
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
        {hasActiveStatus || isReadingBook ? "Stop page:" : "Start page:"}
      </AddReading_P>

      <AddReading_label>
        <AddReading_span>Page number:</AddReading_span>
        <AddReading_input
          $error={!!errors.page}
          $isValid={isValid}
          type="text"
          autoComplete="off"
          defaultValue={hasActiveStatus ? startPage : maxFinishPage + 1}
          {...register("page")}
        />

        {(errors.page || isValid) && (
          <AddReading_p $error={!!errors.page}>
            {errors.page ? `${errors.page.message}` : "Success Page number"}
          </AddReading_p>
        )}
      </AddReading_label>
      <AddReading_button disabled={!isValid} type="submit">
        {hasActiveStatus || isReadingBook ? "To stop" : "To start"}
      </AddReading_button>
    </AddReading_form>
  );
};

export default AddReading;

// import { FC, useEffect, useMemo } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useAppDispatch, useAppSelector } from "../../hooks";
// import {
//   selectBookUser,
//   selectIsReadingBook,
// } from "../../redux/books/booksSelectors";
// import {
//   AddReading_button,
//   AddReading_form,
//   AddReading_input,
//   AddReading_label,
//   AddReading_P,
//   AddReading_p,
//   AddReading_span,
// } from "./AddReading.styled";
// import { FormPageData, schemaPageBook } from "../../helpers";
// import {
//   saveFinishReadingBookThunk,
//   saveStartReadingBookThunk,
// } from "../../redux/books/operationsBooks";
// import { toast } from "react-toastify";

// const AddReading: FC = () => {
//   const { _id, progress } = useAppSelector(selectBookUser);
//   const dispatch = useAppDispatch();
//   const isReadingBook = useAppSelector(selectIsReadingBook);

//   const hasActiveStatus = useMemo(
//     () => progress?.some((entry) => entry.status === "active"),
//     [progress]
//   );
//   console.log(progress);

//   const activeEntry = useMemo(
//     () => progress?.find((entry) => entry.status === "active"),
//     [progress]
//   );

//   console.log(activeEntry);

//   const startPage = activeEntry ? activeEntry.startPage : 1;
//   const maxFinishPage = useMemo(
//     () =>
//       progress?.reduce(
//         (max, entry) => (entry.finishPage > max ? entry.finishPage : max),
//         0
//       ) ?? 0,
//     [progress]
//   );

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors, isValid },
//   } = useForm<FormPageData>({
//     mode: "onChange",
//     resolver: yupResolver(schemaPageBook),
//     defaultValues: {
//       id: _id,
//       page: hasActiveStatus ? startPage : maxFinishPage + 1,
//     },
//   });

//   useEffect(() => {
//     setValue("page", hasActiveStatus ? startPage : maxFinishPage + 1);
//   }, [hasActiveStatus, maxFinishPage, setValue, startPage]);

//   const onSubmit = handleSubmit(async (data) => {
//     try {
//       if (hasActiveStatus || isReadingBook) {
//         await dispatch(saveFinishReadingBookThunk(data)).unwrap();
//         reset();
//       } else {
//         await dispatch(saveStartReadingBookThunk(data)).unwrap();
//         reset();
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("Error during operation:", error);
//         toast.error(`An error occurred: ${error.message}`);
//       }
//     }
//   });

//   return (
//     <AddReading_form onSubmit={onSubmit}>
//       <AddReading_P>
//         {hasActiveStatus || isReadingBook ? "Stop page:" : "Start page:"}
//       </AddReading_P>

//       <AddReading_label>
//         <AddReading_span>Page number:</AddReading_span>
//         <AddReading_input
//           $error={!!errors.page}
//           $isValid={isValid}
//           type="number"
//           autoComplete="off"
//           {...register("page")}
//         />

//         {(errors.page || isValid) && (
//           <AddReading_p $error={!!errors.page}>
//             {errors.page ? `${errors.page.message}` : "Success Page number"}
//           </AddReading_p>
//         )}
//       </AddReading_label>
//       <AddReading_button disabled={!isValid} type="submit">
//         {hasActiveStatus || isReadingBook ? "To stop" : "To start"}
//       </AddReading_button>
//     </AddReading_form>
//   );
// };

// export default AddReading;
