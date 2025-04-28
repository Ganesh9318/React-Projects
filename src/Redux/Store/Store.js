import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "../Slices/ThemeSlice";

export const Store = configureStore({
  reducer: {
    Theme : ThemeReducer
  },
});
