import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MicroStateStructure, MicroStructure } from "../types";

const initialMicrosState: MicroStateStructure = {
  micros: [],
};

export const RoutesSlice = createSlice({
  name: "routes",
  initialState: initialMicrosState,
  reducers: {
    loadRoutes: (
      currentState,
      action: PayloadAction<MicroStructure[]>
    ): MicroStateStructure => ({
      ...currentState,
      micros: [...action.payload],
    }),
  },
});
