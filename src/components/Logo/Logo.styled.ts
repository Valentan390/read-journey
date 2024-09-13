import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo_Link = styled(Link)`
  display: flex;
  gap: 4px;
  justify-content: start;
  align-items: center;
  width: max-content;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.36px;
  text-transform: uppercase;
`;
