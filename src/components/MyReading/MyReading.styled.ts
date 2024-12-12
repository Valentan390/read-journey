import styled from "styled-components";

export const MyReadingWrapper = styled.div`
  width: 100%;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.charcoal};

  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 40px 25px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const MyReading_time = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const MyReading_h3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
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

export const MyReading_div = styled.div`
  width: max-content;
  margin-left: auto;
  margin-right: auto;
`;

export const MyReading_coverBook = styled.div<{ $imageUrl: string }>`
  width: 137px;
  height: 208px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 169px;
    height: 256px;

    margin-bottom: 25px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const MyReading_h4 = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.28px;
  margin-bottom: 5px;

  max-width: 143px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.4px;

    max-width: 100%;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const MyReading_p = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
// export const MyReading = styled.``
