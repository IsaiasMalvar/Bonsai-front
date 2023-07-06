import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { test } from "vitest";
import userEvent from "@testing-library/user-event";

import { microsMock } from "../../mocks/mocks";
import ModifyMicroPage from "./ModifyMicroPage";
import MicrosPage from "../MicrosPage/MicrosPage";

describe("Given a ModifyMicroPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with text 'Modify your micro'", () => {
      const expectedTextHeading = "Modify your micro";

      renderWithProviders(wrapWithRouter(<ModifyMicroPage />));

      const heading = screen.getByRole("heading", {
        name: expectedTextHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the user presses the 'Make it happen' button", () => {
    test("Then it should redirect to the home page", async () => {
      const textButton = "create-button";
      const labelName = "Title";

      renderWithProviders(
        wrapWithRouter(<ModifyMicroPage />, <MicrosPage />, "/home"),
        {
          microsStore: {
            currentMicro: microsMock[0],
            microstories: microsMock,
            totalMicrostories: microsMock.length,
          },
        }
      );

      const inputName = screen.getByLabelText(labelName);

      await userEvent.type(inputName, "Pecado");

      const buttonModify = screen.getByLabelText(textButton);

      await userEvent.click(buttonModify);

      const filterHomePage = screen.getByLabelText("filter");

      expect(filterHomePage).toBeInTheDocument();
    });
  });
});
