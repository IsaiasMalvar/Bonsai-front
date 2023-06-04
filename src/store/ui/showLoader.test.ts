import { UiStateStruture } from "../types";
import { showLoaderActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it has an state with the property isLoading set to false", () => {
    test("Then it should return the new state with the property set to true ", () => {
      const currentUiState: UiStateStruture = {
        isLoading: false,
      };

      const newCurrentUiState: UiStateStruture = {
        isLoading: true,
      };

      const expectedNewState = uiReducer(
        currentUiState,
        showLoaderActionCreator()
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
