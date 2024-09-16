import styled from "styled-components";

export const LogOutButton = styled.button`
  display: flex;
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
  background: inherit;

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
    font-size: 16px;
    line-height: 1.12;
    letter-spacing: 0.32px;
    background: inherit;

    &:hover,
    &:focus {
      // border: 1px solid ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.charcoal};
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;
