import { UiStateStructure } from "../../types";
import { hideFeedbackActionCreator, uiReducer } from "../uiSlice";

describe("Given a hideModal reducer", () => {
  describe("When it has an state with the property isOn set to true", () => {
    test("Then it should return the new state with the property set to false", () => {
      const currentUiState: UiStateStructure = {
        modals: { isError: false, message: "", image: "", isOn: true },
      };

      const newCurrentUiState: UiStateStructure = {
        modals: { isError: false, message: "", image: "", isOn: false },
      };

      const expectedNewState = uiReducer(
        currentUiState,
        hideFeedbackActionCreator()
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
