import { UiStateStruture } from "../types";
import { hideLoaderActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it has an state with the property isLoading set to true", () => {
    test("Then it should return the new state with the property set to false", () => {
      const currentUiState: UiStateStruture = {
        isLoading: true,
      };

      const newCurrentUiState: UiStateStruture = {
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
