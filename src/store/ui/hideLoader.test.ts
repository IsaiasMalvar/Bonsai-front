import { UiStateStructure } from "../types";
import { hideLoaderActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it has an state with the property isLoading set to true", () => {
    test("Then it should return the new state with the property set to false", () => {
      const currentUiState: UiStateStructure = {
        isError: false,
        message: "",
        isLoading: true,
      };

      const newCurrentUiState: UiStateStructure = {
        isError: false,
        message: "",
        isLoading: false,
      };

      const expectedNewState = uiReducer(
        currentUiState,
        hideLoaderActionCreator()
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
