import { MicroStructure, UserStateStructure } from "../store/types";
import {
  getMicrosMockData,
  getMicroMockData,
} from "./factories/microsFactory/microsFactory";
import {
  getMockUserCredentials,
  getUserMockData,
} from "./factories/userFactory/userFactory";

export const userTokenDataMock = getUserMockData(false, {
  id: "1",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Im1vY2tVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.Y6yY_j_o6pmEOjq27T6VG9yLOMMy62N6SAtbq5kZ4JU",
  username: "mockUser",
});

export const userCredentialsMock = getMockUserCredentials({
  username: "John",
  password: "John",
});

export const loggedUserDataMock: UserStateStructure = {
  ...userTokenDataMock,
  isLogged: true,
};

export const UserInitialStateMock = getUserMockData(true, {
  username: "",
  id: "",
  token: "",
  isLogged: false,
});

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Im1vY2tVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.Y6yY_j_o6pmEOjq27T6VG9yLOMMy62N6SAtbq5kZ4JU";

export const microsMock = getMicrosMockData(5);

export const microsMockList: MicroStructure[] = [];

microsMockList.push(getMicroMockData({ id: "elfin" }));
microsMockList.push(getMicroMockData({ id: "elcomienzo" }));
