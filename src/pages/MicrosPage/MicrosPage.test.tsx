import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MicrosPage from "./MicrosPage";
import { server } from "../../mocks/servers";
import { variantsHandlers } from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Given a MicrosPage component", () => {
  window.scrollTo = vi.fn().mockImplementation(() => ({}));
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Micros", () => {
      const expectedText = "Micros";

      renderWithProviders(wrapWithRouter(<MicrosPage />));

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the next button", () => {
    test("Then the next button should be enabled", async () => {
      server.resetHandlers(...variantsHandlers);

      renderWithProviders(<MicrosPage />);

      const nextButton = screen.getByRole("button", { name: "Next" });
      await userEvent.click(nextButton);

      waitFor(() => {
        expect(nextButton).toBeEnabled();
      });
    });
  });

  describe("When it is rendered and the user clicks on the next button and after that on the previous button", () => {
    test("Then the previous button should be enabled", async () => {
      server.resetHandlers(...variantsHandlers);

      renderWithProviders(<MicrosPage />);

      const nextButton = screen.getByRole("button", { name: "Next" });
      await userEvent.click(nextButton);

      const previousButton = screen.getByRole("button", {
        name: "Previous",
      });
      await userEvent.click(previousButton);

      waitFor(() => {
        expect(previousButton).toBeDisabled();
      });
    });
  });
});
