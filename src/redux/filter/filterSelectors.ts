import { RootState } from "../store";

export const selectTitle = (state: RootState) => state.filter.title;
export const selectAuthor = (state: RootState) => state.filter.author;
