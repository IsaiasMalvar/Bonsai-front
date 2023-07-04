import { renderHook, screen } from "@testing-library/react";
import {
  RouteObject,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { createdModal, notCreatedModal } from "../../modals/modals";
import useMicros from "./useMicros";
import { renderWithProviders, wrapWithProviders } from "../../utils/testUtils";
import Layout from "../../components/Layout/Layout";
import { microMock } from "../../mocks/mocks";
import { server } from "../../mocks/servers";
import { errorHandlers, handlers } from "../../mocks/handlers";

describe("Given a createMicro function", () => {
  describe("When it is called with a valid newly created micro", () => {
    test("Then it should show a message feedback with text 'Micro added successfully!'", async () => {
      server.resetHandlers(...handlers);
      const expectedMessageFeedback = createdModal.message;
      const {
        result: {
          current: { createMicro },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await createMicro(microMock);

      const message = await screen.getByLabelText("feedback-message");

      await expect(message).toHaveTextContent(expectedMessageFeedback);
    });
  });
  describe("When it is called with an invalid newly created micro", () => {
    test("Then it should show a message feedback with text 'Dang it! The micro could not be created'", async () => {
      server.resetHandlers(...errorHandlers);
      const invalidMicroData = {
        title: "xxx",
      };
      const expectedMessageFeedback = notCreatedModal.message;
      const {
        result: {
          current: { createMicro },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await createMicro(invalidMicroData);

      const message = await screen.getByLabelText("feedback-message");

      await expect(message).toHaveTextContent(expectedMessageFeedback);
    });
  });
});
