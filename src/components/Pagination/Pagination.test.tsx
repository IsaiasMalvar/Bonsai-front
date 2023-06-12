import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a next and previous buttons", () => {
      const handleOnClick = vi.fn();
      const textNextButton = "Next";
      const textPreviousButton = "Previous";

      renderWithProviders(
        <Pagination
          skip={0}
          count={1}
          onClickNextPage={handleOnClick}
          onClickPreviousPage={handleOnClick}
        />
      );

      const nextButton = screen.getByRole("button", { name: textNextButton });
      const previousButton = screen.getByRole("button", {
        name: textPreviousButton,
      });

      expect(nextButton).toBeInTheDocument();
      expect(previousButton).toBeInTheDocument();
    });
  });
});
