import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/features/theme/store/themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
