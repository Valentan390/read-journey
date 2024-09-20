import styled from "styled-components";

export const AboutBook_Wrapper = styled.div`
  width: 335px;
  height: 421px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.transparentGray20};
  background: ${({ theme }) => theme.colors.charcoal};
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 483px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AboutBook_Image = styled.div<{ $image?: string }>`
  width: 140px;
  height: 213px;

  border-radius: 8px;
  background: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 153px;
    height: 233px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const AboutBook_H3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;
  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AboutBook_H4 = styled.h4`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.25;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AboutBook_P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: Gilroy;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AboutBook_Button = styled.button`
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.transparentWhite20};

  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: 0.28px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.charcoal};
    background: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: 1.12;
    letter-spacing: 0.32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const AboutBook = styled.``;
// export const AboutBook = styled.``;
// export const AboutBook = styled.``;
// export const AboutBook = styled.``;
// export const AboutBook = styled.``;
// export const AboutBook = styled.``;
// export const AboutBook = styled.``;
