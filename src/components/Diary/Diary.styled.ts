import styled from "styled-components";

export const Diary_ul = styled.ul`
  width: 100%;
  max-height: 211px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: start;
  align-items: start;

  border-radius: 12px;
  background: ${({ theme }) => theme.colors.darkGray};

  padding: 16px 16px 0 16px;

  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.lightGray} ${theme.colors.darkGray}`};

  &::-webkit-scrollbar {
    width: 8px; /* Ширина скроллбара */
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightGray}; /* Цвет ползунка */
    border-radius: 4px; /* Скругление ползунка */
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darkGray}; /* Цвет дорожки */
  }

  @media screen and (min-width: 768px) {
    max-height: 252px;
    gap: 18px;
  }

  @media screen and (min-width: 1280px) {
    max-height: 373px;
    gap: 23px;
    padding: 20px 20px 0 20px;
  }
`;

export const Diary_li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Diary_div = styled.div<{ $delete?: boolean }>`
  width: max-content;
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: ${({ $delete }) => ($delete ? "center" : "start")};

  @media screen and (min-width: 768px) {
    gap: 9px;
  }

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const Diary_h4 = styled.h4<{ $pages?: boolean }>`
  color: ${({ theme, $pages }) =>
    $pages ? theme.colors.gray : theme.colors.white};
  font-size: 12px;
  font-weight: ${({ $pages }) => ($pages ? "500" : "700")};
  line-height: 1.33;
  letter-spacing: ${({ $pages }) => ($pages ? "-1.24px" : "0.24px")};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: ${({ $pages }) => ($pages ? "14px" : "16px")};
    line-height: ${({ $pages }) => ($pages ? "1.28" : "1.12")};
    letter-spacing: ${({ $pages }) => ($pages ? "-0.28px" : "0.32px")};
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Diary_p = styled.p<{ $minutes?: boolean; $pages?: boolean }>`
  color: ${({ $minutes, theme }) =>
    $minutes ? theme.colors.gray : theme.colors.white};
  font-size: ${({ $minutes }) => ($minutes ? "10px" : "14px")};
  font-weight: 500;
  line-height: ${({ $minutes }) => ($minutes ? "1.2" : "1.28")};
  letter-spacing: ${({ $minutes }) => ($minutes ? "-0.2px" : "-0.28px")};
  margin-bottom: ${({ $minutes }) => ($minutes ? "" : "4px")};
  margin-top: ${({ $pages }) => ($pages ? "7px" : "")};
  max-width: ${({ $pages }) => ($pages ? "43px" : "")};
  text-align: ${({ $pages }) => ($pages ? "center" : "")};

  @media screen and (min-width: 768px) {
    font-size: ${({ $minutes }) => ($minutes ? "12px" : "20px")};
    line-height: ${({ $minutes }) => ($minutes ? "1.16" : "1")};
    letter-spacing: ${({ $minutes }) => ($minutes ? "-0.24px" : "-0.4px")};
    margin-bottom: ${({ $minutes }) => ($minutes ? "" : "8px")};
    margin-top: ${({ $pages }) => ($pages ? "8px" : "")};
    max-width: ${({ $pages }) => ($pages ? "55px" : "")};
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Diary_Content = styled.div`
  width: max-content;
`;

export const Diary_Icon = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 88px;
    background-color: ${({ theme }) => theme.colors.charcoal};

    @media screen and (min-width: 768px) {
      height: 100px;
    }

    @media screen and (min-width: 1280px) {
    }
  }
`;

// export const Diary = styled.``;
// export const Diary = styled.``;
// export const Diary = styled.``;
// export const Diary = styled.``;
// export const Diary = styled.``;
// export const Diary = styled.``;
// export const Diary = styled.``;
// export const Diary = styled.``;
// export const Diary = styled.``;
