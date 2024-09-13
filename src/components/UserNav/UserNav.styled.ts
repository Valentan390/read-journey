import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: max-content;

  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const UserNav_NavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28;
  letter-spacing: -0.28px;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.colors.white};
  }

  &.active::before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 2px;
    animation: expandLine 0.3s linear forwards;
  }

  @keyframes expandLine {
    from {
      width: 2px;
    }
    to {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
    letter-spacing: -0.32px;

    &.active::before {
      bottom: -8px;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;
