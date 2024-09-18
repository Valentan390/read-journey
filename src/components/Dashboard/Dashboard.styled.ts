import styled from "styled-components";

export const Dashboard_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  align-items: center;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.charcoal};
  padding: 40px 20px 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    align-items: start;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 353px;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    align-items: center;
    padding: 40px 20px 20px;
  }
`;
