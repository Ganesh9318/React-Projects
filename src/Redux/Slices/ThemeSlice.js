import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: [{ mode: "light" }],
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme[0].mode =
        state.currentTheme[0].mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export const ThemeReducer = ThemeSlice.reducer;
