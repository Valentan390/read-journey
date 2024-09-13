import styled from "styled-components";

export const HeaderSection = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding-top: 20px;
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HeaderContainer = styled.div``;

export const Header_header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.charcoal};
  padding: 11px 20px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Header_div = styled.div`
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  width: max-content;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

// export const Header = styled.``
// export const Header = styled.``
// export const Header = styled.``
// export const Header = styled.``
// export const Header = styled.``
