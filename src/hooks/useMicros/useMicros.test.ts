import { renderHook } from "@testing-library/react";
import { microsMock } from "../../mocks/mocks";
import useMicros from "./useMicros";
import { wrapWithProviders } from "../../utils/testUtils";

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
});
