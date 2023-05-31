import { UserStateStructure, UserTokenStructure } from "../store/types";

export const userTokenDataMock: UserTokenStructure = {
  id: "1",
  token: "takatakatoken",
  username: "mockUser",
};

export const loggedUserDataMock: UserStateStructure = {
  ...userTokenDataMock,
  isLogged: true,
};

export const UserInitialStateMock: UserStateStructure = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDY4YjE3YjExODRiMzYyNTQxNzliODYiLCJ1c2VyIjoiSWNlX0N1YmUiLCJpYXQiOjE2ODQ3MDM5NDZ9.EE4Pk5A2MFJSk5a2wrYIds2Zv6lvWTcHZt-1I6UvTbk";
