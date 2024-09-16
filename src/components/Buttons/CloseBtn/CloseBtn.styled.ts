import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotateBackAnimation = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const CloseBtn_Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 34px;
  right: 40px;
  //   transition: transform 0.3s ease-in-out;
  transform-origin: center;

  &:hover {
    animation: ${rotateAnimation} 0.3s forwards;
  }

  &:not(:hover) {
    animation: ${rotateBackAnimation} 0.3s forwards;
  }
`;