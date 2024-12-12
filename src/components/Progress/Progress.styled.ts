import styled from "styled-components";
import StarMob1x from "../../images/mobile/star-mob-@1x.webp";
import StarMob2x from "../../images/mobile/star-mob-@2x.webp";
import StarTab1x from "../../images/tablet/Star-Tab-@1x.webp";
import StarTab2x from "../../images/tablet/Star-Tab-@2x.webp";

export const ProgressWrapper = styled.div`
  width: 100%;
`;

export const Progress_h3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Progress_p = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Progress_div = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkGray};
  margin-left: auto;
  margin-right: auto;

  background-image: image-set(url(${StarMob1x}) 1x, url(${StarMob2x}) 2x);
  background-repeat: no-repeat;
  background-size: initial;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;

    background-image: image-set(url(${StarTab1x}) 1x, url(${StarTab2x}) 2x);
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const Progress = styled.``
// export const Progress = styled.``
// export const Progress = styled.``
// export const Progress = styled.``
// export const Progress = styled.``
// export const Progress = styled.``
// export const Progress = styled.``
