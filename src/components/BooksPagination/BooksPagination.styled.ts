import styled from "styled-components";

export const BooksPagination_Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 22px;

  @media screen and (min-width: 768px) {
    margin: 0 0 20px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BooksPagination_H2 = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1, 14;
    letter-spacing: 0.56px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BooksPagination_Container = styled.div`
  width: max-content;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const BooksPagination_Button = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.transparentWhite20};
  border-radius: 50%;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
