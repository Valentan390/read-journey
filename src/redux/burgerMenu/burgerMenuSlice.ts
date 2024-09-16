import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BurgerMenuState {
  isBurgerMenuOpen: boolean;
}

const initialState: BurgerMenuState = {
  isBurgerMenuOpen: false,
};

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    setBurgerMenuOpen: (state, action: PayloadAction<boolean | undefined>) => {
      if (typeof action.payload === "boolean") {
        state.isBurgerMenuOpen = action.payload;
      } else {
        state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
      }
    },
  },
});

export const { setBurgerMenuOpen } = burgerMenuSlice.actions;
export const burgerMenuReducer = burgerMenuSlice.reducer;
