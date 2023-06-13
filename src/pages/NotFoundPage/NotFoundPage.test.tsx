import { screen } from "@testing-library/react";

import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text '404'", () => {
      const expectedText = "404";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
