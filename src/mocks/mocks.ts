import {
  UserCredentials,
  UserStateStructure,
  UserTokenStructure,
} from "../store/types";

export const userTokenDataMock: UserTokenStructure = {
  id: "1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Im1vY2tVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.Y6yY_j_o6pmEOjq27T6VG9yLOMMy62N6SAtbq5kZ4JU",
  name: "mockUser",
};

export const userCredentialsMock: UserCredentials = {
  username: "John",
  password: "John",
};

export const loggedUserDataMock: UserStateStructure = {
  ...userTokenDataMock,
  isLogged: true,
};

export const UserInitialStateMock: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Im1vY2tVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.Y6yY_j_o6pmEOjq27T6VG9yLOMMy62N6SAtbq5kZ4JU";
