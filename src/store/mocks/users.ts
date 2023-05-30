import { UserStateStructure, UserTokenStructure } from "../types";

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
