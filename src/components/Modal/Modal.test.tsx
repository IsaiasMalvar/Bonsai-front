import { renderWithProviders } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { store } from "../../store";
import { createdModal } from "./modals";

describe("Given a Modal component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with an 'X' that once it is pressed it empties the uiStore", async () => {
      const expectedButtonText = "X";

      renderWithProviders(<Modal image="" isError={false} text="" />, {
        uiStore: {
          modals: {
            isError: false,
            isOn: true,
            message: "hola",
          },
        },
      });

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();

      await userEvent.click(button);

      const testStore = store.getState();

      expect(testStore.uiStore.modals.message).toBeFalsy();
    });
  });
  describe("When it is rendered and it is positive feedback", () => {
    test("Then it should show the message 'Micro added successfully!'", async () => {
      renderWithProviders(
        <Modal
          isError={false}
          text="Micro added successfully!"
          image={createdModal.image}
        />
      );

      const expectedText = "Micro added successfully!";

      const feedback = screen.getByText(expectedText);

      expect(feedback).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the type of modal is negative feedback", () => {
    test("Then it should show the message 'Oops, wrong credentials! Please, try again.'", async () => {
      renderWithProviders(
        <Modal
          isError={true}
          text="Oops, wrong credentials! Please, try again."
        />
      );

      const expectedText = "Oops, wrong credentials! Please, try again.";
      const feedback = screen.getByText(expectedText);

      expect(feedback).toBeInTheDocument();
    });
  });
});
