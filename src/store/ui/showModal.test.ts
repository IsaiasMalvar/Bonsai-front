import { UiStateStructure } from "../types";
import { showFeedbackActionCreator, uiReducer } from "./uiSlice";

describe("Given a showFeedback reducer", () => {
  describe("When it receives an isError property set to true as payload", () => {
    test("Then it should set return a new state with that property set to true", () => {
      const currentUiState: UiStateStructure = {
        image: "",
        isError: false,
        isOn: true,
        message: "",
      };

      const newCurrentUiState: UiStateStructure = {
        image: "",
        isError: true,
        message: "",
        isOn: true,
      };

      const expectedNewState = uiReducer(
        currentUiState,
        showFeedbackActionCreator({
          isError: true,
          message: "",
          image: "",
          isOn: true,
        })
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
