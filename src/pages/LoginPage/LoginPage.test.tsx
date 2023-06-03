import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import MicrosPage from "../MicrosPage/MicrosPage";
import { LazyLoginPage } from "../../routers/lazyPages.js";

const usernameLabelText = "Username:";
const passwordLabelText = "Password:";
const expectedButtonText = "login";
const usernameInput = "admin";
const passwordInput = "admin";

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'A blink, a story'", async () => {
      const expectedText = "A blink, a story";
      renderWithProviders(wrapWithRouter(<LazyLoginPage />));

      const text = await waitFor(() =>
        screen.getByRole("heading", { name: expectedText })
      );

      expect(text).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the username and password fields have been filled with correct credentials", () => {
    test("Then it should redirect the user to the home page", async () => {
      const routes: RouteObject[] = [
        { path: "/", element: <LoginPage /> },
        { path: "/home", element: <MicrosPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const validUsernameInput = screen.getByLabelText(usernameLabelText);
      const validPasswordInput = screen.getByLabelText(passwordLabelText);
      const buttonLogIn = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.type(validUsernameInput, usernameInput);
      await userEvent.type(validPasswordInput, passwordInput);
      await userEvent.click(buttonLogIn);

      expect(router.state.location.pathname).toBe("/home");
    });
  });
});
