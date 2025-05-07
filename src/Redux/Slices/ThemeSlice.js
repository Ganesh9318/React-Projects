import { createSlice } from "@reduxjs/toolkit";

const intialMode = localStorage.getItem("themeMode") || "light"

const initialState = {
  ThemeMode:  intialMode ,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.ThemeMode =
        state.ThemeMode === "light" ? "dark" : "light";
        localStorage.setItem("themeMode", state.ThemeMode)
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export const ThemeReducer = ThemeSlice.reducer;
