import { UserInitialStateMock, userTokenDataMock } from "../mocks/users";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives a current loginState and an action with an user on the payload", () => {
    test("Then it should return a new state witth the isLogged property set to true", () => {
      const currentUserState = UserInitialStateMock;

      const expectedState = true;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userTokenDataMock)
      );

      expect(newUserState.isLogged).toStrictEqual(expectedState);
    });
  });
});
