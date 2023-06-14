import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { vi } from "vitest";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the Bonsai logo", () => {
      renderWithProviders(wrapWithRouter(<App />));
      const expectedAltText = "bonsai logo";

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
