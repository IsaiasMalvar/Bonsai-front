import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CreateMicroPage from "./CreateMicroPage";

describe("Given a CreateMicroPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Add your micros'", () => {
      const expectedText = "Add your micros";
      renderWithProviders(wrapWithRouter(<CreateMicroPage />));

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});