import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Loader from "./Loader";
import { expect } from "vitest";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the loading animation", () => {
      const expectedLoaderName = "loader-animation";

      renderWithProviders(wrapWithRouter(<Loader />));

      const loader = screen.getByLabelText(expectedLoaderName);

      expect(loader).toBeInTheDocument();
    });
  });
});
