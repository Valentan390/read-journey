import { FC, useState } from "react";
import {
  getIconName,
  getIconStroke,
  getInputType,
  InputAuthProps,
} from "../../helpers";
import Icon from "../Icon/Icon";
import {
  InputAuth_Button_Eye,
  InputAuth_Input,
  InputAuth_Label,
  InputAuth_P,
  InputAuth_Span,
} from "./InputAuth.styled";
import useMediaQueryResponsive from "../../hooks/useMediaQueryResponsive";

const InputAuth: FC<InputAuthProps> = ({
  name,
  span,
  register,
  errors,
  isValid,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { isMobile } = useMediaQueryResponsive();

  return (
    <InputAuth_Label>
      <InputAuth_Input
        $paddingLeft={span}
        $error={!!errors[name]}
        $isValid={isValid}
        autoComplete={name === "password" ? "off" : "on"}
        type={getInputType(name, passwordVisible)}
        {...register(name)}
      />
      <InputAuth_Span>{span}</InputAuth_Span>

      {(errors[name] || isValid) && (
        <InputAuth_P $error={!!errors[name]}>
          {errors[name] ? `${errors[name]?.message}` : `Success ${span}`}
        </InputAuth_P>
      )}

      {name === "password" && (
        <InputAuth_Button_Eye
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            iconName={getIconName(errors, isValid, passwordVisible)}
            width={isMobile ? 18 : 20}
            height={isMobile ? 18 : 20}
            stroke={getIconStroke(errors, isValid)}
          />
        </InputAuth_Button_Eye>
      )}
    </InputAuth_Label>
  );
};

export default InputAuth;
