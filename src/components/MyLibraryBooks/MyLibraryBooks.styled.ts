import styled from "styled-components";

export const MyLibraryBooksWrapper = styled.div`
  width: 100%;
  padding: 40px 20px 100px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.charcoal};

  @media screen and (min-width: 768px) {
    padding: 40px 40px 160px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 40px 232px;
  }
`;

export const MyLibraryBooks_div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 14px;
`;

export const MyLibraryBooks_h3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14;
    letter-spacing: 0.56px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const MyLibraryBooks = styled.``;
// export const MyLibraryBooks = styled.``;
// export const MyLibraryBooks = styled.``;
// export const MyLibraryBooks = styled.``;
// export const MyLibraryBooks = styled.``;
// export const MyLibraryBooks = styled.``;
// export const MyLibraryBooks = styled.``;
