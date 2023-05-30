import { ThemeProvider } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme/theme";
describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    const routes = [
      {
        path: "/",
        element: <Layout />,
      },
    ];
    test("Then it should show a header with a Bonsai logo", () => {
      const expectedAltText = "bonsai logo";

      const router = createBrowserRouter(routes);

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
