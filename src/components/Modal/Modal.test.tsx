import { renderWithProviders } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { store } from "../../store";

describe("Given a Modal component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with an 'X' that once it is pressed it empties the uiStore", async () => {
      const expectedButtonText = "X";

      renderWithProviders(<Modal image="" isError={false} text="" />, {
        uiStore: {
          isError: false,
          isLoading: false,
          isOn: true,
          message: "hola",
        },
      });

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();

      await userEvent.click(button);

      const testStore = store.getState();

      expect(testStore.uiStore.message).toBeFalsy();
    });
  });
  describe("When it is rendered and it is positive feedback", () => {
    test("Then it should show a window with a green border", async () => {
      renderWithProviders(<Modal image="" isError={false} text="" />);

      const feedback = screen.getByTestId("modal-container");

      expect(feedback).toHaveStyle("border: 5px solid #309973");
    });
  });
  describe("When it is rendered and the type of modal is negative feedback", () => {
    test("Then it should show a window with a red border", async () => {
      renderWithProviders(<Modal image="" isError={true} text="" />);

      const feedback = screen.getByTestId("modal-container");

      expect(feedback).toHaveStyle("border: 5px solid #910101");
    });
  });
});
