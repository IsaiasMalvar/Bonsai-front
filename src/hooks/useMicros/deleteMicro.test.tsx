import { renderHook, screen } from "@testing-library/react";
import useMicros from "./useMicros";
import { renderWithProviders, wrapWithProviders } from "../../utils/testUtils";
import { server } from "../../mocks/servers";
import { errorHandlers, handlers } from "../../mocks/handlers";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Layout from "../../components/Layout/Layout";

describe("Given a deleteMicro function", () => {
  describe("When it is called with a valid microId", () => {
    test("Then it should show feedback indicating that the micro was delete with the text 'Micro deleted successfully!'", async () => {
      server.resetHandlers(...handlers);

      const microId = "6470f84c2f3216ee0f1d4b96";

      const {
        result: {
          current: { deleteMicro },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await deleteMicro(microId);

      const message = await screen.getByLabelText("feedback-message");

      expect(message).toBeInTheDocument();
    });
  });
});

describe("When it is called with an invalid microId", () => {
  test("Then it should show feedback indicating that the micro was delete with the text 'Dang it! The micro could not be deleted.'", async () => {
    server.resetHandlers(...errorHandlers);

    const microId = "6470f84c2f3sdfe0f1d4b9c";

    const {
      result: {
        current: { deleteMicro },
      },
    } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

    const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

    const router = createMemoryRouter(routes);

    renderWithProviders(<RouterProvider router={router} />);

    await deleteMicro(microId);

    const message = await screen.getByLabelText("feedback-message");

    expect(message).toBeInTheDocument();
  });
});
