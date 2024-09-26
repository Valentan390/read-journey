import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  FormDataAddBooks,
  NameInputAddBooks,
  SpanInputAddBooks,
} from "../../helpers";
import {
  InputAddBoks_Input,
  InputAddBoks_Label,
  InputAddBoks_P,
  InputAddBoks_Span,
} from "./InputAddBoks.styled";
import { useMediaQueryResponsive } from "../../hooks";

interface InputAddBoksProps {
  name: NameInputAddBooks;
  span: SpanInputAddBooks;
  register: UseFormRegister<FormDataAddBooks>;
  errors: FieldErrors<FormDataAddBooks>;
  isValid: boolean;
}

const InputAddBoks: FC<InputAddBoksProps> = ({
  name,
  register,
  span,
  errors,
  isValid,
}) => {
  const { isMobile } = useMediaQueryResponsive();

  return (
    <InputAddBoks_Label>
      <InputAddBoks_Span>{span}</InputAddBoks_Span>
      <InputAddBoks_Input
        $isMobile={isMobile}
        $span={span}
        $error={!!errors[name]}
        $isValid={isValid}
        type="text"
        autoComplete="off"
        {...register(name)}
      />
      {(errors[name] || isValid) && (
        <InputAddBoks_P $error={!!errors[name]}>
          {errors[name] ? `${errors[name]?.message}` : `Success ${span}`}
        </InputAddBoks_P>
      )}
    </InputAddBoks_Label>
  );
};

export default InputAddBoks;
