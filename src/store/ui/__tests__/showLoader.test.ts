import { UiStateStructure } from "../../types";
import { showLoaderActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoader reducer", () => {
  describe("When it has an state with the property isLoading set to false", () => {
    test("Then it should return the new state with the property set to true ", () => {
      const currentUiState: UiStateStructure = {
        isLoading: false,
        modals: {
          image: "",
          isError: true,
          isOn: true,
          message: "",
        },
      };

      const newCurrentUiState: UiStateStructure = {
        isLoading: true,
        modals: { image: "", isError: true, isOn: true, message: "" },
      };

      const expectedNewState = uiReducer(
        currentUiState,
        showLoaderActionCreator()
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
