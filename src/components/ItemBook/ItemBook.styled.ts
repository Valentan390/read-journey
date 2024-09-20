import styled from "styled-components";

export const ItemBook_Li = styled.li`
  width: calc((100% - 21px) / 2);
  height: 100%;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 75px) / 4);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 80px) / 5);
  }
`;

export const ItemBook_Div = styled.div<{ $url: string }>`
  width: 100%;
  height: 208px;
  border-radius: 8px;
  background: url(${({ $url }) => $url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ItemBook_H3 = styled.h3`
  display: -webkit-box;
  //   width: 137px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ItemBook_P = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const ItemBook = styled.``;
// export const ItemBook = styled.``;
// export const ItemBook = styled.``;
// export const ItemBook = styled.``;
// export const ItemBook = styled.``;
