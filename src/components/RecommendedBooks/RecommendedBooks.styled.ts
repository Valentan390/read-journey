import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecommendedBooks_Wrapper = styled.div<{ $isRecommended: boolean }>`
  width: 100%;
  border-radius: ${({ $isRecommended }) => ($isRecommended ? "30px" : "12px")};
  background: ${({ theme, $isRecommended }) =>
    $isRecommended ? theme.colors.charcoal : theme.colors.darkGray};
  padding: ${({ $isRecommended }) => ($isRecommended ? "40px 20px" : "20px")};

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1280px) {
    height: 100%;
    padding: 40px 40px 28px;
  }
`;

export const RecommendedBooks_P = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;
  margin: 0 0 14px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const RecommendedBooks_Link = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0 0;

  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.24px;
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
