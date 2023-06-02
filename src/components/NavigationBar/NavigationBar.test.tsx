import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavigationBar from "./NavigationBar";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

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

  describe("When it is rendered and logout button is clicked", () => {
    test("Then it should take the user to the login page", async () => {
      const routes = [
        {
          path: "/",
          element: <NavigationBar />,
          children: [
            {
              path: "/login",
              element: <LoginPage />,
            },
          ],
        },
      ];

      const redirectionHomeRouter = createMemoryRouter(routes);
      const expectedPath = "/login";

      renderWithProviders(
        <RouterProvider router={redirectionHomeRouter}></RouterProvider>
      );

      const logoutButton = screen.getByRole("button", { name: "logout" });

      await userEvent.click(logoutButton);

      expect(redirectionHomeRouter.state.location.pathname).toBe(expectedPath);
    });
  });
});
