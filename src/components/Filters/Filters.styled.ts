import styled from "styled-components";

export const Filters_Wrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const Filters_P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  margin: 0 0 8px 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Filters_Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin: 0 0 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Filters_Label = styled.label`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Filters_Span = styled.span`
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

export const Filters_Input = styled.input<{ $paddingLeft: string }>`
  width: 100%;
  display: inline-flex;
  padding: 14px 16px 14px
    ${({ $paddingLeft }) => {
      switch ($paddingLeft) {
        case "Book title:":
          return "77px";
        case "The author:":
          return "85px";
        default:
          return "88px";
      }
    }};
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.darkGray};

  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.transparentWhite};
  }

  &:-webkit-autofill {
    background: ${({ theme }) => theme.colors.darkGray} !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 18px 16px
      ${({ $paddingLeft }) => {
        switch ($paddingLeft) {
          case "Book title:":
            return "83px";
          case "The author:":
            return "91px";
          default:
            return "94px";
        }
      }};
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Filters_Button = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.transparentWhite20};
  margin: 22px 0 0;

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
    margin: 12px 0 0;
    font-size: 16px;
    line-height: 1.12;
    letter-spacing: 0.32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
