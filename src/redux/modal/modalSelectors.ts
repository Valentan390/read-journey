import { RootState } from "../store";

export const selectModalOpen = (state: RootState) => state.modal.isModalOpen;

export const selectModalName = (state: RootState) => state.modal.modalName;
