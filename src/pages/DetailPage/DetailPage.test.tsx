import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import DetailPage from "./DetailPage";
import { microMock, microMockPublic } from "../../mocks/mocks";

describe("Given a DetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title of the micro", () => {
      const microTestStore = {
        microstories: microMockPublic,
        totalMicrostories: microMockPublic.length,
        currentMicro: microMock,
      };
      const expectedTitle = microMock.title;

      renderWithProviders(wrapWithRouter(<DetailPage />), {
        microsStore: microTestStore,
      });

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
