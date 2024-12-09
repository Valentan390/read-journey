import styled, { DefaultTheme } from "styled-components";

const getColorFromTheme = ($color: string | undefined, theme: DefaultTheme) => {
  switch ($color) {
    case "white":
      return theme.colors.white;
    case "green":
      return theme.colors.green;
    case "red":
      return theme.colors.red;
    case "black":
      return theme.colors.black;
    case "white20":
      return theme.colors.transparentWhite20;
    case "lightRed":
      return theme.colors.lightRed;
    default:
      return "none";
  }
};

export const Icon_svg = styled.svg<{ $fill?: string; $stroke?: string }>`
  fill: ${({ $fill, theme }) => getColorFromTheme($fill, theme)};
  stroke: ${({ $stroke, theme }) => getColorFromTheme($stroke, theme)};
`;
