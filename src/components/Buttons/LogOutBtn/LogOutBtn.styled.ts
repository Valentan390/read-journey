import styled from "styled-components";

export const LogOutButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogOutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: 0.32px;
  background: inherit;

  &:hover,
  &:focus {
    // border: 1px solid ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;
