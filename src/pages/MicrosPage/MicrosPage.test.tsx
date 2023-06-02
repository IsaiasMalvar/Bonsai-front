import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MicrosPage from "./MicrosPage";

describe("Given a MicrosPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Micros", () => {
      const expectedText = "Micros";

      renderWithProviders(wrapWithRouter(<MicrosPage />));

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
