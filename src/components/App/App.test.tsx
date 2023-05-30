import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import theme from "../../styles/theme/theme";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    const routes = [
      {
        path: "/",
        element: <App />,
      },
    ];
    test("Then it should show a header with the Bonsai logo", () => {
      const router = createBrowserRouter(routes);
      const expectedAltText = "bonsai logo";

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
