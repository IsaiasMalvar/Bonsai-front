import { UiStateStructure } from "../types";
import { hideLoaderActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it has an state with the property isLoading set to true", () => {
    test("Then it should return the new state with the property set to false", () => {
      const currentUiState: UiStateStructure = {
        modals: { isError: true, message: "" },
        isLoading: true,
      };

      const newCurrentUiState: UiStateStructure = {
        modals: { isError: true, message: "" },
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
