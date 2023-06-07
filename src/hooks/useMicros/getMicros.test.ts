import { renderHook } from "@testing-library/react";
import { microsMock } from "../../mocks/mocks";
import useMicros from "./useMicros";
import { wrapWithProviders } from "../../utils/testUtils";
import { server } from "../../mocks/servers";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a getMicros function", () => {
  describe("When it is called", () => {
    test("Then it should return a collection of micros", async () => {
      const expectedMicros = microsMock;

      const {
        result: {
          current: { getMicros },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const micros = await getMicros();

      expect(micros).toStrictEqual(expectedMicros);
    });
  });
  describe("When it receives an invalid token", () => {
    test("Then it should throw a 'Oh no! Micros could not be loaded' error", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Oh no! Micros could not be loaded";

      const {
        result: {
          current: { getMicros },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const getTokenFunction = getMicros();

      expect(getTokenFunction).rejects.toThrowError(expectedError);
    });
  });
});
