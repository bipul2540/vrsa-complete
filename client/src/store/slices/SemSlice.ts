import { createSlice } from "@reduxjs/toolkit";

export interface clicked {
  value: string;
}

const initialState: clicked = {
  value: "",
};

export const checkSlice = createSlice({
  name: "semesterValue",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = checkSlice.actions;

export default checkSlice.reducer;
