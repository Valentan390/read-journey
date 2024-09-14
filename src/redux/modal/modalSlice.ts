import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isModalOpen: boolean;
  modalName: string;
}

const initialState: ModalState = {
  isModalOpen: false,
  modalName: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setModalName: (state, action: PayloadAction<string>) => {
      state.modalName = action.payload;
    },
  },
});

export const { setModalName, setModalOpen } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
