import { renderHook } from "@testing-library/react";
import { tokenMock, userTokenDataMock } from "../../mocks/mocks";
import useToken from "../useToken";

describe("Given a getUserToken function", () => {
  describe("When it is called with valid user credentials", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const user = userTokenDataMock;
      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const token = await getTokenData(expectedToken);

      expect(user).toStrictEqual(token);
    });
  });
});
