import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Modal, UiStateStructure } from "../types";

const uiState: UiStateStructure = {
  isOn: false,
  isError: false,
  message: "",
  image: "",
  isLoading: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    showLoader: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoader: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: false,
    }),
    showFeedback: (
      currentState: UiStateStructure,
      action: PayloadAction<Modal>
    ) => ({
      ...currentState,
      isOn: action.payload.isOn,
      image: action.payload.image,
      isError: action.payload.isError,
      message: action.payload.message,
    }),
    hideFeedback: (currentState: UiStateStructure) => ({
      ...currentState,
      isOn: false,
      isError: false,
      message: "",
      image: "",
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
