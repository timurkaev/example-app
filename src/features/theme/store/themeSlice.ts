import { createSlice } from "@reduxjs/toolkit";
import { Themes, type IThemeState } from "../types/themeTypes";
import { LOCAL_STORAGE_THEME_KEY } from "../constants/constants";

const initialState: IThemeState = {
  mode:
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const theme = state.mode === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
      state.mode = theme;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
