import styled from "styled-components";

export const ListBooks_ul = styled.ul`
  width: 100%;
  display: flex;
  gap: 21px;
  justify-content: center;
  align-items: initial;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    row-gap: 27px;
    column-gap: 25px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 20px;
  }
`;

// export const ListBooks = styled.ul``;
// export const ListBooks = styled.ul``;
// export const ListBooks = styled.ul``;
