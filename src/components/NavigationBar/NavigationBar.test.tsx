import { screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a NavigationBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an icon link to log out", () => {
      renderWithProviders(wrapWithRouter(<NavigationBar />));
      const expectedAltText = "logout icon";

      const logoutIcon = screen.getByAltText(expectedAltText);
      expect(logoutIcon).toBeInTheDocument();
    });
    test("Then it should show an icon link to home", () => {
      renderWithProviders(wrapWithRouter(<NavigationBar />));
      const expectedAltText = "home icon";

      const homeIcon = screen.getByAltText(expectedAltText);

      expect(homeIcon).toBeInTheDocument();
    });
    test("Then it should show an icon link to add microstory", () => {
      renderWithProviders(wrapWithRouter(<NavigationBar />));
      const expectedAltText = "add icon";

      const addIcon = screen.getByAltText(expectedAltText);

      expect(addIcon).toBeInTheDocument();
    });
  });
});
