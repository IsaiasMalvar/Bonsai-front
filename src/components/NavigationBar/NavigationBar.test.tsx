import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a NavigationBar component", () => {
  describe("When it is rendered", () => {
    const routes = [
      {
        path: "/",
        element: <NavigationBar />,
      },
    ];
    test("Then it should show an icon link to log out", () => {
      const expectedAltText = "logout icon";
      const router = createBrowserRouter(routes);
      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />;
        </ThemeProvider>
      );
      const logoutIcon = screen.getByAltText(expectedAltText);

      expect(logoutIcon).toBeInTheDocument();
    });
    test("Then it should show an icon link to home", () => {
      const expectedAltText = "logout icon";
      const router = createBrowserRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const homeIcon = screen.getByAltText(expectedAltText);

      expect(homeIcon).toBeInTheDocument();
    });
    test("Then it should show an icon link to add microstory", () => {
      const expectedAltText = "add icon";
      const router = createBrowserRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const addIcon = screen.getByAltText(expectedAltText);

      expect(addIcon).toBeInTheDocument();
    });
  });
});
