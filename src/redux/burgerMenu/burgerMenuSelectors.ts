import { RootState } from "../store";

export const selectBurgerMenuOpen = (state: RootState) =>
  state.burgerMenu.isBurgerMenuOpen;
