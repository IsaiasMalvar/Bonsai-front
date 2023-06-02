import { renderHook } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";
import { tokenMock } from "../../mocks/mocks";
import { vi } from "vitest";

beforeEach(() => vi.clearAllMocks());

describe("Given a setLocalStorageKey function", () => {
  describe("When it  receives a key and a value", () => {
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

describe("Given a getLocalStorageKey function", () => {
  describe("When it receives a key", () => {
    test("Then it should retrieve a token", () => {
      const givenKey = "token";
      const expectedValue = tokenMock;

      const {
        result: {
          current: { getLocalStorageKey },
        },
      } = renderHook(() => useLocalStorage());

      localStorage.setItem(givenKey, expectedValue);

      const value = getLocalStorageKey(givenKey);

      expect(localStorage.getItem(givenKey)).toBe(value);
    });
  });
});

describe("Given a getLocalStorageKey function", () => {
  describe("When it receives a key", () => {
    test("Then it should retrieve a token", () => {
      const givenKey = "token";

      const {
        result: {
          current: { removeLocalStorageKey },
        },
      } = renderHook(() => useLocalStorage());

      removeLocalStorageKey(givenKey);

      expect(localStorage.getItem(givenKey)).toBe(null);
    });
  });
});
