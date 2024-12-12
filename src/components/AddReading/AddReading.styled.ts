import styled, { DefaultTheme } from "styled-components";

export const AddReading_form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  // gap: 20px;
  justify-content: start;
  align-items: start;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AddReading_P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  margin-bottom: 8px;
  margin-left: 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AddReading_label = styled.label`
  width: 100%;
  position: relative;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AddReading_span = styled.span`
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

export const AddReading_input = styled.input<{
  $error: boolean;
  $isValid: boolean;
}>`
  width: 100%;
  display: inline-flex;
  padding: 14px 14px 14px 99px;
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
    padding: 16px 16px 16px 108px;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AddReading_p = styled.p<{ $error: boolean }>`
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

export const AddReading_button = styled.button`
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.transparentWhite20};
  background-color: transparent;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: 0.28px;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.charcoal};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
    font-size: 16px;
    line-height: 1.12;
    letter-spacing: 0.32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
// export const AddReading = styled.``
