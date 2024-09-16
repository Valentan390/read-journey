import { useMediaQuery } from "react-responsive";

export const useMediaQueryResponsive = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDescktop = useMediaQuery({ query: "(min-width: 1280px)" });

  return { isMobile, isTablet, isDescktop };
};
