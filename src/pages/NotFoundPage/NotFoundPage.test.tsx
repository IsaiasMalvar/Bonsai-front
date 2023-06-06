import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text '404'", () => {
      const expectedText = "404";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
  describe("When it is rendered and user clicks a button that redirects to the main page", () => {
    test("Then the button should disappear ", async () => {
      const buttonLabel = "home";
      const routes: RouteObject[] = [
        { path: "/", element: <NotFoundPage /> },
        { path: "/home" },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router}></RouterProvider>);

      const button = screen.getByRole("button", {
        name: buttonLabel,
      });

      await userEvent.click(button);

      expect(button).not.toBeInTheDocument();
    });
  });
});
