import { UserInitialStateMock, loggedUserDataMock } from "../../../mocks/mocks";
import { logoutUserActionCreator, userReducer } from "../userSlice";

describe("Given a logoutUser reducer", () => {
  describe("When it is called", () => {
    test("Then it should reset state to initialUserState", () => {
      const currentState = loggedUserDataMock;

      const resetState = userReducer(currentState, logoutUserActionCreator());

      expect(resetState).toStrictEqual(UserInitialStateMock);
    });
  });
});
