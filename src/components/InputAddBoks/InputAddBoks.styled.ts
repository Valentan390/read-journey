import styled, { DefaultTheme } from "styled-components";
import { SpanInputAddBooks } from "../../helpers";

export const InputAddBoks_Label = styled.label`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const InputAddBoks_Span = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

const inputBorderColor = (
  error: boolean,
  isValid: boolean,
  theme: DefaultTheme
) => {
  if (error) return theme.colors.red;
  if (isValid) return theme.colors.green;
  return "transparent";
};

const inputPaddingLeft = (text: SpanInputAddBooks, isMobile: boolean) => {
  switch (text) {
    case "Book title:":
      return isMobile ? "77px" : "86px";
    case "The author:":
      return isMobile ? "85px" : "95px";
    case "Number of pages:":
      return isMobile ? "119px" : "135px";
    default:
      return isMobile ? "123px" : "140px";
  }
};

export const InputAddBoks_Input = styled.input<{
  $error: boolean;
  $isValid: boolean;
  $span: SpanInputAddBooks;
  $isMobile: boolean;
}>`
  width: 100%;
  display: inline-flex;
  padding: 14px 31px 14px
    ${({ $span, $isMobile }) => inputPaddingLeft($span, $isMobile)};
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid
    ${({ $error, $isValid, theme }) =>
      inputBorderColor($error, $isValid, theme)};

  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  &:hover,
  &:focus {
    border-color: ${({ $error, $isValid, theme }) =>
      $error || $isValid ? undefined : theme.colors.transparentWhite};
  }

  &:-webkit-autofill {
    background: ${({ theme }) => theme.colors.darkGray} !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 57px 16px
      ${({ $span, $isMobile }) => inputPaddingLeft($span, $isMobile)};
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const InputAddBoks_P = styled.p<{ $error: boolean }>`
  position: absolute;
  left: 0;
  bottom: -14px;

  color: ${({ $error, theme }) =>
    $error ? theme.colors.red : theme.colors.green};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;

  @media screen and (min-width: 768px) {
    bottom: -16px;
    font-size: 12px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const InputAddBoks = styled.``;
// export const InputAddBoks = styled.``;
// export const InputAddBoks = styled.``;
// export const InputAddBoks = styled.``;
