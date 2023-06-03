import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MicroStateStructure, MicroStructure } from "../types";

const initialMicrosState: MicroStateStructure = {
  micros: [],
};

export const MicrosSlice = createSlice({
  name: "micros",
  initialState: initialMicrosState,
  reducers: {
    loadMicros: (
      currentState,
      action: PayloadAction<MicroStructure[]>
    ): MicroStateStructure => ({
      ...currentState,
      micros: [...action.payload],
    }),
  },
});

export const { loadMicros: loadMicrosActionCreator } = MicrosSlice.actions;
export const microsReducer = MicrosSlice.reducer;
