import { renderHook, screen } from "@testing-library/react";
import {
  RouteObject,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import useMicros from "./useMicros";
import Layout from "../../components/Layout/Layout";
import { microMockwithId } from "../../mocks/mocks";
import { notModifiedModal } from "../../modals/modals";
import { renderWithProviders, wrapWithProviders } from "../../utils/testUtils";
import { server } from "../../mocks/servers";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a modifyMicro function", () => {
  describe("When it is called with a valid modified micro", () => {
    test("Then it should show a message feedback with text 'Micro modified successfully!'", async () => {
      const expectedMessage = "Micro modified successfully!";

      const {
        result: {
          current: { modifyMicro },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await modifyMicro(microMockwithId);

      const message = await screen.getByLabelText("feedback-message");

      await expect(message).toHaveTextContent(expectedMessage);
    });
  });
  describe("When it is called with a invalid modified route", () => {
    test("Then it should show a message feedback with text 'Dang it! The micro could not be modified.'", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedMessage = notModifiedModal.message;

      const {
        result: {
          current: { modifyMicro },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await modifyMicro(microMockwithId);

      const message = await screen.getByLabelText("feedback-message");

      await expect(message).toHaveTextContent(expectedMessage);
    });
  });
});
