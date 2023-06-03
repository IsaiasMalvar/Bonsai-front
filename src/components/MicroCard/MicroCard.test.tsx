import { screen } from "@testing-library/react";
import { microsMock } from "../../mocks/mocks";
import { MicroStructure } from "../../store/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MicroCard from "./MicroCard";

describe("Given a RobotCard component", () => {
  describe("When it receives the 'Wall-E' robot item", () => {
    test("Then it should show a heading with 'ROBOT'", () => {
      const receivedMicro: MicroStructure = microsMock[0];
      const expectedHeading = receivedMicro.title;

      renderWithProviders(wrapWithRouter(<MicroCard micro={receivedMicro} />));

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
