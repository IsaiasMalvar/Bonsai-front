import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Bonsai logo", () => {
      const expectedAltText = "bonsai logo";

      renderWithProviders(wrapWithRouter(<Header />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
