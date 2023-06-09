import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Title text field", () => {
      const labelName = "Title";

      renderWithProviders(wrapWithRouter(<Form />));

      const label = screen.getByLabelText(labelName);

      expect(label).toBeInTheDocument();
    });
  });

  describe("When it is render and the user writes 'El fin' on the input field", () => {
    test("Then it should show the word 'El fin' on it", async () => {
      const expectedText = "El fin";

      const labelName = "Title";

      renderWithProviders(wrapWithRouter(<Form />));

      const titleLabel = screen.getByLabelText(labelName);

      await userEvent.type(titleLabel, expectedText);

      expect(titleLabel).toHaveValue(expectedText);
    });
  });

  describe("When it is render and the user clicks on the Public checkbox that is checked by default", () => {
    test("Then it should show the checkbox as unchecked", async () => {
      const labelName = "Public";

      renderWithProviders(wrapWithRouter(<Form />));

      const checkbox = screen.getByLabelText(labelName);

      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });
});
