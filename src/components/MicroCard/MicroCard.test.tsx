import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { microsMock } from "../../mocks/mocks";
import { MicroStructure } from "../../store/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MicroCard from "./MicroCard";
import { vi } from "vitest";

describe("Given a MicroCard component", () => {
  const handleOnDelete = vi.fn();
  const receivedMicro: MicroStructure = microsMock[0];
  const expectedHeading = receivedMicro.title;
  describe("When it receives a micro item", () => {
    test("Then it should show a heading with the title of the micro", () => {
      renderWithProviders(
        wrapWithRouter(<MicroCard micro={receivedMicro} user="" />)
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it receives the function handleOnClick and the user clicks on delete button", () => {
    test("Then the function should be called", async () => {
      renderWithProviders(
        wrapWithRouter(
          <MicroCard micro={receivedMicro} user={receivedMicro.author} />
        )
      );

      const button = screen.getByLabelText("delete-button");

      await userEvent.click(button);

      expect(handleOnDelete.call.length).toBe(1);
    });
  });
});
