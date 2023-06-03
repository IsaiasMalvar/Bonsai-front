import { screen } from "@testing-library/react";
import { microsMock } from "../../mocks/mocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MicrosList from "./MicrosList";

describe("Given a MicrosList component", () => {
  describe("when it has an initial empty state and it receives a micro", () => {
    test("Then it should show the title of that micro", () => {
      const expectedMicroTitle = microsMock[0].title;

      const microTestStore = {
        microsStore: {
          micros: microsMock,
        },
      };

      renderWithProviders(wrapWithRouter(<MicrosList />), microTestStore);

      const title = screen.getByRole("heading", { name: expectedMicroTitle });

      screen.debug();
      expect(title).toBeInTheDocument();
    });
  });
});
