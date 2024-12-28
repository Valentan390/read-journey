import styled from "styled-components";

export const DetailsWrapper = styled.div`
  width: 100%;
`;

export const Details_div = styled.div<{ $icon?: boolean }>`
  width: ${({ $icon }) => ($icon ? "max-content" : "100%")};
  display: flex;
  gap: ${({ $icon }) => ($icon ? "8px" : "")};
  justify-content: ${({ $icon }) => ($icon ? "center" : "space-between")};
  align-items: center;
  margin-bottom: ${({ $icon }) => ($icon ? "" : "20px")};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ $icon }) => ($icon ? "" : "16px")};
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Details_h3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.36px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Details_button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
// export const Details = styled.``;
