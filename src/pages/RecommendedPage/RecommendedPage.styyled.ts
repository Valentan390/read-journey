import styled from "styled-components";

export const Recommended_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: start;
    align-items: initial;
  }
`;
