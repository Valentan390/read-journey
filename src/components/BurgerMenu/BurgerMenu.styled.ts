import styled from "styled-components";

export const BurgerMenu_Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.transparentBlack60};
  z-index: 2;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.8s ease;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

export const BurgerMenu_Wrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-50vw")};
  transition: right 0.8s ease;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  height: 100vh;
  padding: 36vh 0 40px;
  background: ${({ theme }) => theme.colors.darkGray};
`;
