import styled from "styled-components";
import BookMob1x from "../../images/mobile/Book-Mob-@1x.webp";
import BookMob2x from "../../images/mobile/Book-Mob-@2x.webp";
import BookTab1x from "../../images/tablet/Book-Tab-@1x.webp";
import BookTab2x from "../../images/tablet/Book-Tab-@2x.webp";

export const NoData_Wrapper = styled.div`
  width: 197px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    width: 274px;
    gap: 20px;
    margin-top: 28px;
  }

  @media screen and (min-width: 1280px) {
    gap: 28px;
    margin-top: 126px;
  }
`;

export const NoData_Book = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 50%;

  background-image: image-set(url(${BookMob1x}) 1x, url(${BookMob2x}) 2x);
  background-repeat: no-repeat;
  background-size: initial;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 130px;

    background-image: image-set(url(${BookTab1x}) 1x, url(${BookTab2x}) 2x);
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NoData_P = styled.p`
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NoData_Span = styled.span`
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
