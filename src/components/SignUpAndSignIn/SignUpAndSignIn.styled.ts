import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpAndSignInWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.charcoal};
  padding: 20px 20px 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 168px 214px 64px;
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 20px) / 2);
    padding: 40px 64px;
  }
`;

export const SignUpAndSignIn_Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.64px;
  margin: 40px 0 20px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 0.94;
    letter-spacing: 1.28px;
    margin: 157px 0 40px;
  }

  @media screen and (min-width: 1280px) {
    margin: 107px 0 40px;
  }
`;

export const SignUpAndSignIn_Span = styled.span`
  color: ${({ theme }) => theme.colors.transparentLightGray};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.64px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 60px;
    letter-spacing: 1.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const SignUpAndSignIn_Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const SignUpAndSignInContainer = styled.div<{ $marginTop: boolean }>`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  margin: ${({ $marginTop }) => ($marginTop ? "12px" : "77px")} 0 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin: ${({ $marginTop }) => ($marginTop ? "82px" : "157px")} 0 0;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const SignUpAndSignIn_Button = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: 0.28px;
  width: calc((100% - 8px) / 2);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.transparentWhite20};
    background: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    padding: 16px;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 0.4px;
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
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
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
  }
`;
