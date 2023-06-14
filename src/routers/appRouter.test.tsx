import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/testUtils";
import { tokenMock } from "../mocks/mocks";

localStorage.setItem("token", tokenMock);

describe("Given a appRouter", () => {
  describe("When rendered and a token exists in local storage", () => {
    test("Then it should show the 'logout', 'home icon' and 'add icon' links", async () => {
      const homeIconText = "bonsai logo";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const icon = screen.getByAltText(homeIconText);

      expect(icon).toBeInTheDocument();
    });
  });
});
