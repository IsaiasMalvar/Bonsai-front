import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CreateMicroPage from "./CreateMicroPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import MicrosPage from "../MicrosPage/MicrosPage";
import { vi } from "vitest";

beforeEach(() => vi.clearAllMocks());

describe("Given a CreateMicroPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Add your micro'", () => {
      const expectedText = "Add your micro";
      renderWithProviders(wrapWithRouter(<CreateMicroPage />));

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the handleOnSubmit function has been invoked", () => {
    test("Then it should redirect the user to the home-page and show the title 'Micros'", async () => {
      const expectedHeading = "Micros";
      const routes: RouteObject[] = [
        { path: "/", element: <CreateMicroPage /> },
        { path: "/home", element: <MicrosPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const expectedButtonabel = "create-button";
      const titleLabel = "Title";
      const imageLabel = "Image";
      const microLabel = "Micro";
      const genreLabel = "Genre";

      const inputTitle = screen.getByLabelText(titleLabel);
      const inputImage = screen.getByLabelText(imageLabel);
      const inputMicro = screen.getByLabelText(microLabel);
      const inputGenre = screen.getByLabelText(genreLabel);

      await userEvent.type(inputTitle, "El cuento");
      await userEvent.type(
        inputImage,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59Ed7VYb1yDNDgL0rK7jC6sRRssdgqOfj3A&usqp=CAU"
      );
      await userEvent.type(inputMicro, "El cuento es corto");
      await userEvent.selectOptions(inputGenre, "Horror");

      const button = screen.getByLabelText(expectedButtonabel);

      await userEvent.click(button);

      const title = screen.getByRole("heading", { name: expectedHeading });

      expect(router.state.location.pathname).toBe("/home");
      expect(title).toBeInTheDocument();
    });
  });
});
