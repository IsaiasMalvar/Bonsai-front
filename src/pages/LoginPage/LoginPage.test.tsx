import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'A blink, a story'", () => {
      const expectedText = "A blink, a story";
      renderWithProviders(wrapWithRouter(<LoginPage />));

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
