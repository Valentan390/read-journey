import { useCallback } from "react";
import { selectBurgerMenuOpen } from "../redux/burgerMenu/burgerMenuSelectors";
import { setBurgerMenuOpen } from "../redux/burgerMenu/burgerMenuSlice";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";

export const useBurgerMenu = () => {
  const isBurgerMenu = useAppSelector(selectBurgerMenuOpen);
  const dispatch = useAppDispatch();

  const handlerBurgerMenuOpen = useCallback(() => {
    dispatch(setBurgerMenuOpen(true));
  }, [dispatch]);

  const handlerBurgerMenuClose = useCallback(() => {
    dispatch(setBurgerMenuOpen(false));
  }, [dispatch]);

  return { isBurgerMenu, handlerBurgerMenuClose, handlerBurgerMenuOpen };
};
