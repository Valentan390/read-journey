import styled from "styled-components";

export const InputAuth_Label = styled.label`
  width: 100%;
  position: relative;
`;

export const InputAuth_Input = styled.input<{
  $paddingLeft: string;
  $error: boolean;
  $isValid: boolean;
}>`
  width: 100%;
  display: inline-flex;
  padding: 14px 40px 14px
    ${({ $paddingLeft }) => {
      switch ($paddingLeft) {
        case "Name:":
          return "59px";
        case "Mail:":
          return "49px";
        case "Password:":
          return "78px";
        default:
          return "80px";
      }
    }};
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid
    ${({ $error, $isValid, theme }) =>
      $error
        ? theme.colors.red
        : $isValid
        ? theme.colors.green
        : "transparent"};
  background: ${({ theme }) => theme.colors.darkGray};

  color: ${({ theme }) => theme.colors.white};
  //   text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid
      ${({ $error, theme, $isValid }) =>
        $error
          ? theme.colors.red
          : $isValid
          ? theme.colors.green
          : theme.colors.transparentWhite};
  }

  &:-webkit-autofill {
    background: ${({ theme }) => theme.colors.darkGray} !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 48px 16px
      ${({ $paddingLeft }) => {
        switch ($paddingLeft) {
          case "Name:":
            return "65px";
          case "Mail:":
            return "53px";
          case "Password:":
            return "86px";
          default:
            return "90px";
        }
      }};

    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const InputAuth_Span = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
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

export const InputAuth_P = styled.p<{ $error: boolean }>`
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

export const InputAuth_Button_Eye = styled.button`
  position: absolute;
  right: 16px;
  top: 13px;

  display: flex;
  justify-content: centr;
  align-items: center;
  width: max-content;

  @media screen and (min-width: 768px) {
    right: 18px;
    top: 15px;
  }
`;
