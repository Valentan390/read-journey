import styled from "styled-components";

export const ListBooks_ul = styled.ul<{ $isRecommended: boolean }>`
  width: 100%;
  display: flex;
  gap: ${({ $isRecommended }) => ($isRecommended ? "21px" : "20px")};
  justify-content: center;
  align-items: initial;

  @media screen and (min-width: 768px) {
    flex-wrap: ${({ $isRecommended }) => ($isRecommended ? "wrap" : "nowrap")};
    row-gap: 27px;
    column-gap: ${({ $isRecommended }) => ($isRecommended ? "25px" : "20px")};
  }

  @media screen and (min-width: 1280px) {
    column-gap: 20px;
  }
`;
