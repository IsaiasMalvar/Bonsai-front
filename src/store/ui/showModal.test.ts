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
        isCreated: false,
        isDeleted: false,
        isLoadingError: false,
        isModified: false,
        isNotCreated: false,
        isNotDeleted: false,
        isNotModified: false,
        isWrongCredentials: false,
      };

      const newCurrentUiState: UiStateStructure = {
        image: "",
        isError: true,
        message: "",
        isOn: true,
        isCreated: false,
        isDeleted: false,
        isLoadingError: false,
        isModified: false,
        isNotCreated: false,
        isNotDeleted: false,
        isNotModified: false,
        isWrongCredentials: false,
      };

      const expectedNewState = uiReducer(
        currentUiState,
        showFeedbackActionCreator({
          isError: true,
          message: "",
          image: "",
          isOn: true,
          isCreated: false,
          isDeleted: false,
          isLoadingError: false,
          isModified: false,
          isNotCreated: false,
          isNotDeleted: false,
          isNotModified: false,
          isWrongCredentials: false,
        })
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
