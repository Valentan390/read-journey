import styled from "styled-components";

export const Main = styled.main``;

export const Section = styled.section`
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  height: max-content;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: stretch;
  }
`;
