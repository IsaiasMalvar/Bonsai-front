import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'click'", () => {
    test("Then the button should show the text 'click", () => {
      const expectedText = "click";

      renderWithProviders(wrapWithRouter(<Button text={expectedText} />));

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });
});
