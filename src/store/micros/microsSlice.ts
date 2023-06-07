import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  MicroIdStructure,
  MicroStateStructure,
  MicroStructure,
} from "../types";

const initialMicrosState: MicroStateStructure = {
  microstories: [],
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
      microstories: [...action.payload],
    }),
    deleteMicro: (
      currentState: MicroStateStructure,
      action: PayloadAction<MicroIdStructure>
    ): MicroStateStructure => ({
      ...currentState,
      microstories: currentState.microstories.filter(
        (micro) => micro.id !== action.payload.microId
      ),
    }),
  },
});

export const { loadMicros: loadMicrosActionCreator } = MicrosSlice.actions;
export const microsReducer = MicrosSlice.reducer;
