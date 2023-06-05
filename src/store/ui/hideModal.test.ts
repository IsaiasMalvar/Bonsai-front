import { UiStateStructure } from "../types";
import { hideFeedbackActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it has an state with the property isOn set to true", () => {
    test("Then it should return the new state with the property set to false", () => {
      const currentUiState: UiStateStructure = {
        isError: false,
        message: "",
        isLoading: true,
        isOn: true,
      };

      const newCurrentUiState: UiStateStructure = {
        isError: false,
        message: "",
        isLoading: true,
        isOn: false,
      };

      const expectedNewState = uiReducer(
        currentUiState,
        hideFeedbackActionCreator()
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
