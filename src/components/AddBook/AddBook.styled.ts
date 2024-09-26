import styled from "styled-components";

export const AddBook_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: start;
  align-items: start;
`;

export const AddBook_P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AddBook_Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  align-items: start;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AddBook_Button = styled.button`
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.transparentWhite20};

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

// export const AddBook = styled.``;
// export const AddBook = styled.``;
// export const AddBook = styled.``;
// export const AddBook = styled.``;
// export const AddBook = styled.``;
// export const AddBook = styled.``;
// export const AddBook = styled.``;
// export const AddBook = styled.``;
