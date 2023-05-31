import { renderHook } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";
import { tokenMock } from "../../mocks/mocks";

describe("Given a setLocalStorageKey function", () => {
  describe("When it a receives a key and a value", () => {
    test("Then it should store the key and the value in the local storage ", () => {
      const key = "token";
      const value = tokenMock;
      const {
        result: {
          current: { setLocalStorageKey },
        },
      } = renderHook(() => useLocalStorage());

      setLocalStorageKey(key, value);

      expect(localStorage).toHaveProperty(key);
      expect(localStorage.getItem(key)).toBe(value);
    });
  });
});
