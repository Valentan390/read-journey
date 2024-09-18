import styled from "styled-components";
import book1x from "../../images/desktop/Book-@1x.webp";
import book2x from "../../images/desktop/Book-@2x.webp";

export const Quote_Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.darkGray};
  padding: 15px 20px;
`;

export const Quote_Book = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  background-image: image-set(url(${book1x}) 1x, url(${book2x}) 2x);
  background-repeat: no-repeat;
  background-size: initial;
  background-position: center;
`;

export const Quote_P = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;

export const Quote_Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
// export const Quote = styled.``
