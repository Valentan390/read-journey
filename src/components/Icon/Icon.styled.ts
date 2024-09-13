import styled from "styled-components";

export const Icon_svg = styled.svg<{ $fill?: string; $stroke?: string }>`
  fill: ${({ $fill, theme }) => {
    switch ($fill) {
      case "white":
        return theme.colors.white;
      case "green":
        return theme.colors.green;
      case "red":
        return theme.colors.red;
      case "black":
        return theme.colors.black;
      default:
        return "none";
    }
  }};

  stroke: ${({ $stroke, theme }) => {
    switch ($stroke) {
      case "white":
        return theme.colors.white;
      case "green":
        return theme.colors.green;
      case "red":
        return theme.colors.red;
      case "black":
        return theme.colors.black;
      default:
        return "none";
    }
  }};
`;
