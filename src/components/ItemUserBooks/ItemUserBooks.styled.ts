import styled from "styled-components";

export const ItemUserBooks_Li = styled.li`
  width: calc((100% - 21px) / 2);
  height: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 75px) / 4);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 100px) / 5);
  }
`;

export const ItemUserBooks_Div = styled.div<{ $url: string }>`
  width: 100%;
  height: 208px;
  border-radius: 8px;
  background: url(${({ $url }) => $url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 8px;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ItemUserBooksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ItemUserBooks_div = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ItemUserBooks_H3 = styled.h3`
  display: -webkit-box;
  width: 95px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ItemUserBooks_P = styled.p`
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

export const ItemUserBooksButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.transparentLightRed20};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.transparentLightRed10};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const ItemUserBooks = styled.``;
// export const ItemUserBooks = styled.``;
// export const ItemUserBooks = styled.``;
