import { renderHook, screen } from "@testing-library/react";
import { microMockwithId } from "../../mocks/mocks";
import useMicros from "./useMicros";
import { renderWithProviders, wrapWithProviders } from "../../utils/testUtils";
import { server } from "../../mocks/servers";
import { errorHandlers } from "../../mocks/handlers";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Layout from "../../components/Layout/Layout";

describe("Given a getMicro function", () => {
  describe("When it is called with a valid id", () => {
    test("Then it should return the matching micro", async () => {
      const microId = "6470f84c2f3216ee0f1d4b96";
      const expectedMicro = microMockwithId;

      const {
        result: {
          current: { getMicro },
        },
      } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

      const micro = await getMicro(microId);

      expect(micro).toStrictEqual(expectedMicro);
    });
  });
});

describe("When it is called with an invalid microId", () => {
  test("Then it should show feedback indicating that the micro was delete with the text 'Dang it! The micro could not be deleted.'", async () => {
    server.resetHandlers(...errorHandlers);

    const microId = "6470f84c2f3sdfe0f1d4b9c";

    const {
      result: {
        current: { getMicro },
      },
    } = renderHook(() => useMicros(), { wrapper: wrapWithProviders });

    const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

    const router = createMemoryRouter(routes);

    renderWithProviders(<RouterProvider router={router} />);

    await getMicro(microId);

    const message = await screen.getByLabelText("feedback-message");

    expect(message).toBeInTheDocument();
  });
});
