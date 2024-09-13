import styled from "styled-components";

export const UserBarWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: max-content;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const UserBar_I = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: inherit;

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.32px;

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    line-height: 1.12;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const UserBar_p = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.32px;
`;

// export const UserBar = styled.``
// export const UserBar = styled.``
// export const UserBar = styled.``
// export const UserBar = styled.``
// export const UserBar = styled.``
// export const UserBar = styled.``
// export const UserBar = styled.``
// export const UserBar = styled.``
// export const UserBar = styled.``
