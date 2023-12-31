import { screen } from "@testing-library/react";
import { microMock, microMockPublic } from "../../mocks/mocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MicrosList from "./MicrosList";

describe("Given a MicrosList component", () => {
  describe("when it has an initial empty state and it receives a micro", () => {
    test("Then it should show the title of that micro", () => {
      const expectedMicroTitle = microMockPublic[2].title;

      const microTestStore = {
        microstories: microMockPublic,
        totalMicrostories: microMockPublic.length,
        currentMicro: microMock,
      };

      const userTestStore = {
        id: "",
        isLogged: false,
        token: "",
        username: "admin",
      };

      renderWithProviders(wrapWithRouter(<MicrosList />), {
        microsStore: microTestStore,
        userStore: userTestStore,
      });

      const title = screen.getByRole("heading", { name: expectedMicroTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
