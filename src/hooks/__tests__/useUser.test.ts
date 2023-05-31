import { renderHook } from "@testing-library/react";
import { tokenMock, userCredentialsMock } from "../../mocks/mocks";
import useUser from "../useUser";

describe("Given a getUserToken function", () => {
  describe("When it is called with valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const user = userCredentialsMock;
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
