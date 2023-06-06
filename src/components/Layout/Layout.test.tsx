import Layout from "./Layout";
import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a Bonsai logo", () => {
      renderWithProviders(wrapWithRouter(<Layout />));
      const expectedAltText = "bonsai logo";

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
describe("When it is rendered and the properties isOn and isError are true on the uiStore", () => {
  test("Then it should show a button to close feedback and a message with the text 'Oops, wrong credentials! Please, try again.'", () => {
    const textButton = "X";
    const message = "Oops, wrong credentials! Please, try again.";

    const routes: RouteObject[] = [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Navigate to="/login" replace />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
    ];

    const router = createMemoryRouter(routes);

    renderWithProviders(<RouterProvider router={router}></RouterProvider>, {
      uiStore: { isError: true, message: message, isOn: true },
    });

    const button = screen.getByRole("button", {
      name: textButton,
    });

    const feedback = screen.getByText(message);

    expect(button).toBeInTheDocument();
    expect(feedback).toBeInTheDocument();
  });
});
