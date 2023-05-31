import { screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a NavigationBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an icon link to log out", () => {
      renderWithProviders(wrapWithRouter(<NavigationBar />));

      const logoutIcon = screen.getByRole("button", { name: "logout" });
      expect(logoutIcon).toBeInTheDocument();
    });

    test("Then it should show an icon link to home", () => {
      renderWithProviders(wrapWithRouter(<NavigationBar />));

      const homeIcon = screen.getByRole("link", { name: "home icon" });

      expect(homeIcon).toBeInTheDocument();
    });

    test("Then it should show an icon link to add microstory", () => {
      renderWithProviders(wrapWithRouter(<NavigationBar />));

      const addIcon = screen.getByRole("link", { name: "add icon" });

      expect(addIcon).toBeInTheDocument();
    });
  });
});
