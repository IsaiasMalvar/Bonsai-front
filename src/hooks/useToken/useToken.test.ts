import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/mocks";
import useToken from "./useToken";
import { UserDataStructure } from "../../store/types";

describe("Given a getUserToken function", () => {
  describe("When it is called with valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const expectedUserData: UserDataStructure = {
        id: "1",
        username: "mockUser",
      };
      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const token = await getTokenData(expectedToken);

      expect(expectedUserData).toStrictEqual(token);
    });
  });
});
