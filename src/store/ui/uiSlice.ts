import { createSlice } from "@reduxjs/toolkit";
import { UiStateStruture } from "../types";

const uiState: UiStateStruture = {
  isLoading: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    showLoader: (currentState: UiStateStruture) => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoader: (currentState: UiStateStruture) => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
