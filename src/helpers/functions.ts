export const getLimit = (
  isMobile: boolean,
  isTablet: boolean,
  isDescktop: boolean
): number | null => {
  if (isMobile) return 2;
  if (isTablet) return 8;
  if (isDescktop) return 10;
  return null;
};
