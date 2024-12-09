import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersFormData } from "../../components/Filters/Filters";

export interface FilterState {
  title: string | null;
  author: string | null;
  status: string;
}

const initialState: FilterState = {
  title: null,
  author: null,
  status: "",
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
    setStatusBookFilter: (
      state,
      action: PayloadAction<FilterState["status"]>
    ) => {
      state.status = action.payload;
    },
  },
});

export const { setFilter, setResetFilter, setStatusBookFilter } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
