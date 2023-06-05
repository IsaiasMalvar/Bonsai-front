import { UiStateStructure } from "../types";
import { showLoaderActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it has an state with the property isLoading set to false", () => {
    test("Then it should return the new state with the property set to true ", () => {
      const currentUiState: UiStateStructure = {
        image: "",
        isError: true,
        isOn: true,
        message: "",
        isLoading: false,
      };

      const newCurrentUiState: UiStateStructure = {
        image: "",
        isError: true,
        isOn: true,
        message: "",
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