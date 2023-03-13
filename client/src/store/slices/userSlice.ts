import { createSlice } from "@reduxjs/toolkit";

export interface clicked {
  value: string;
  marksUpdated: boolean;
}

const initialState: clicked = {
  value: "",
  marksUpdated: false,
};

export const clickSlice = createSlice({
  name: "semValue",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    isMarksUpdated: (state, action) => {
      state.marksUpdated = action.payload;
    },
  },
});

export const { setValue, isMarksUpdated } = clickSlice.actions;

export default clickSlice.reducer;
