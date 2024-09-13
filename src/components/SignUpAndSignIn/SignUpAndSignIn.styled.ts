import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpAndSignInWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.charcoal};
  padding: 20px 20px 40px 20px;
`;

export const SignUpAndSignIn_Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.64px;
  margin: 40px 0 20px;
`;

export const SignUpAndSignIn_Span = styled.span`
  color: ${({ theme }) => theme.colors.transparentLightGray};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.64px;
`;

export const SignUpAndSignIn_Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

// export const SignUpAndSignIn = styled.``;
// export const SignUpAndSignIn = styled.``;
// export const SignUpAndSignIn = styled.``;
// export const SignUpAndSignIn = styled.``;
// export const SignUpAndSignIn = styled.``;

export const SignUpAndSignInContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  margin: 12px 0 0;
  width: 100%;
`;

export const SignUpAndSignIn_Button = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.charcoal};
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: 0.28px;
  width: calc((100% - 8px) / 2);

  &:hover,
  &:focus {
  }
`;

export const SignUpAndSignIn_Link = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.focus};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  width: calc((100% - 8px) / 2);

  &:hover,
  &:focus {
  }
`;

// export const SignUpAndSignIn = styled.``;
// export const SignUpAndSignIn = styled.``;
