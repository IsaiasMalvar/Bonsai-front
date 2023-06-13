import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  MicroIdStructure,
  MicroStateStructure,
  MicroStructure,
} from "../types";

const initialMicrosState: MicroStateStructure = {
  microstories: [],
  totalMicrostories: 0,
  currentMicro: {
    id: "",
    title: "",
    dateOfCreation: "",
    genre: "",
    isPublic: true,
    image: "",
    story: "",
    author: "",
  },
};

export const MicrosSlice = createSlice({
  name: "micros",
  initialState: initialMicrosState,
  reducers: {
    loadMicros: (
      currentState,
      action: PayloadAction<{
        microstories: MicroStructure[];
        totalMicrostories: number;
      }>
    ): MicroStateStructure => ({
      ...currentState,
      microstories: [...action.payload.microstories],
      totalMicrostories: action.payload.totalMicrostories,
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
    createMicro: (
      currentState: MicroStateStructure,
      action: PayloadAction<MicroStructure>
    ): MicroStateStructure => ({
      ...currentState,
      microstories: [...currentState.microstories, action.payload],
    }),
    loadMicro: (
      currentState: MicroStateStructure,
      action: PayloadAction<MicroStructure>
    ): MicroStateStructure => ({
      ...currentState,
      currentMicro: { ...action.payload },
    }),
  },
});

export const {
  loadMicros: loadMicrosActionCreator,
  deleteMicro: deleteMicroActionCreator,
  createMicro: createMicroActionCreator,
  loadMicro: loadMicroActionCreator,
} = MicrosSlice.actions;
export const microsReducer = MicrosSlice.reducer;
