import styled from "styled-components";
import GoodMob1x from "../../../images/mobile/Good_Mob_@1x.webp";
import GoodMob2x from "../../../images/mobile/good_Mob_@2x.webp";
import GoodTab1x from "../../../images/tablet/Good_Tab_@1x.webp";
import GoodTab2x from "../../../images/tablet/Good_Tab_@2x.webp";

export const BookLibraryWrapper = styled.div`
  width: 335px;
  flex-shrink: 0;
  padding: 60px 46px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.transparentGray20};
  background: ${({ theme }) => theme.colors.charcoal};
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 50px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BookLibrary_Div = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: inherit;

  background-image: image-set(url(${GoodMob1x}) 1x, url(${GoodMob2x}) 2x);
  background-repeat: no-repeat;
  background-size: initial;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 32px;

    background-image: image-set(url(${GoodTab1x}) 1x, url(${GoodTab2x}) 2x);
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BookLibrary_H3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.4px;

    margin-bottom: 14px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BookLibrary_P = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
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

export const BookLibrary_Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

// export const BookLibrary = styled.``;
// export const BookLibrary = styled.``;
// export const BookLibrary = styled.``;
// export const BookLibrary = styled.``;
