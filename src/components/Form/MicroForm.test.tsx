import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MicroForm from "./MicroForm";

const handleOnSubmit = vi.fn();
describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Title text field", () => {
      const labelName = "Title";

      renderWithProviders(
        wrapWithRouter(<MicroForm actionOnSubmit={handleOnSubmit} />)
      );

      const label = screen.getByLabelText(labelName);

      expect(label).toBeInTheDocument();
    });
  });

  describe("When it is render and the user writes 'El fin' on the input field", () => {
    test("Then it should show the word 'El fin' on it", async () => {
      const expectedText = "El fin";

      const labelName = "Title";

      renderWithProviders(
        wrapWithRouter(<MicroForm actionOnSubmit={handleOnSubmit} />)
      );

      const titleLabel = screen.getByLabelText(labelName);

      await userEvent.type(titleLabel, expectedText);

      expect(titleLabel).toHaveValue(expectedText);
    });
  });

  describe("When it is render and the user clicks on the Public checkbox that is checked by default", () => {
    test("Then it should show the checkbox as unchecked", async () => {
      const labelName = "Public";

      renderWithProviders(
        wrapWithRouter(<MicroForm actionOnSubmit={handleOnSubmit} />)
      );

      const checkbox = screen.getByLabelText(labelName);

      await userEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe("When it is rendered and the Title, Image, Genre and Micro are empty", () => {
    test("Then it should show a disabled button with the text 'Make it happen'", async () => {
      const expectedButtonabel = "create-button";

      renderWithProviders(
        wrapWithRouter(<MicroForm actionOnSubmit={handleOnSubmit} />)
      );

      const button = screen.getByLabelText(expectedButtonabel);

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the Title, Image, Genre and Micro are filled", () => {
    test("Then it should show an enabled button with the text 'Make it happen', that calls the function handleOnSubmit when it is clicked", async () => {
      const expectedButtonabel = "create-button";
      const titleLabel = "Title";
      const imageLabel = "Image";
      const microLabel = "Micro";
      const genreLabel = "Genre";

      renderWithProviders(
        wrapWithRouter(<MicroForm actionOnSubmit={handleOnSubmit} />)
      );

      const inputTitle = screen.getByLabelText(titleLabel);
      const inputImage = screen.getByLabelText(imageLabel);
      const inputMicro = screen.getByLabelText(microLabel);
      const inputGenre = screen.getByLabelText(genreLabel);

      await userEvent.type(inputTitle, "El cuento");
      await userEvent.type(
        inputImage,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59Ed7VYb1yDNDgL0rK7jC6sRRssdgqOfj3A&usqp=CAU"
      );
      await userEvent.type(inputMicro, "El cuento es corto");
      await userEvent.selectOptions(inputGenre, "Horror");

      const button = screen.getByLabelText(expectedButtonabel);
      await userEvent.click(button);

      expect(button).toBeEnabled();
      expect(handleOnSubmit).toHaveBeenCalled();
    });
  });
});
