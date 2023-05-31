import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStateStructure, UserTokenStructure } from "../types";

const userState: UserStateStructure = {
  id: "",
  isLogged: false,
  token: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    loginUser: (
      _currentState: UserStateStructure,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
