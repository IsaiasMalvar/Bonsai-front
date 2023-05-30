import Layout from "./Layout";
import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a Bonsai logo", () => {
      renderWithProviders(wrapWithRouter(<Layout />));
      const expectedAltText = "bonsai logo";

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
