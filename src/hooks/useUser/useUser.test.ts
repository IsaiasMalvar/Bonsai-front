import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { tokenMock, userCredentialsMock } from "../../mocks/mocks";
import { wrapWithProviders } from "../../utils/testUtils";
import { UserCredentials } from "../../store/types";
import { server } from "../../mocks/servers";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a getUserToken function", () => {
  describe("When it is called with valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const user = userCredentialsMock;
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapWithProviders });

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
  describe("When it receives invalid user credentials", () => {
    test("Then it should throw a 'Wrong credentials' error", () => {
      server.resetHandlers(...errorHandlers);

      const userCredentialsMock: UserCredentials = {
        username: "user",
        password: "pass",
      };

      const expectedError = "Wrong Credentials";

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapWithProviders });

      const getTokenFunction = getUserToken(userCredentialsMock);

      expect(getTokenFunction).rejects.toThrowError(expectedError);
    });
  });
});
