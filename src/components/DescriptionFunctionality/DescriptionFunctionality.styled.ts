import { Link } from "react-router-dom";
import styled from "styled-components";

export const Description_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  align-items: start;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.darkGray};
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const Description_H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.4px;
    margin: 0 0 20px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Description_Container = styled.div<{ $Link?: boolean }>`
  display: flex;
  gap: ${({ $Link }) => ($Link ? "0" : "12px")};
  justify-content: ${({ $Link }) => ($Link ? "space-between" : "start")};
  align-items: ${({ $Link }) => ($Link ? "center" : "start")};
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Description_Number = styled.p`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Description_P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Description_Span = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Description_Link = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
