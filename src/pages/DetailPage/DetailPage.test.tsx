import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import DetailPage from "./DetailPage";

describe("Given a MicroCard component", () => {
  describe("When it receives a micro item", () => {
    test("Then it should show a heading with the title of the micro", () => {
      const expectedTitle = "Title";
      renderWithProviders(wrapWithRouter(<DetailPage />));

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
