import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersFormData } from "../../components/Filters/Filters";

export interface FilterState {
  title: string | null;
  author: string | null;
}

const initialState: FilterState = {
  title: null,
  author: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FiltersFormData>) => {
      const { author, title } = action.payload;
      state.author = author.trim() === "" ? null : author;
      state.title = title.trim() === "" ? null : title;
    },
    setResetFilter: (state) => {
      state.author = null;
      state.title = null;
    },
  },
});

export const { setFilter, setResetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
