import { screen } from "@testing-library/react";
import { microsMock } from "../../mocks/mocks";
import { MicroStructure } from "../../store/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MicroCard from "./MicroCard";

describe("Given a MicroCard component", () => {
  describe("When it receives a micro item", () => {
    test("Then it should show a heading with the title of the micro", () => {
      const receivedMicro: MicroStructure = microsMock[0];
      const expectedHeading = receivedMicro.title;

      renderWithProviders(wrapWithRouter(<MicroCard micro={receivedMicro} />));

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
