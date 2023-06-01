import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginForm from "./LoginForm";
import { screen } from "@testing-library/react";

beforeAll(() => vi.clearAllMocks);

const handleLoginOnSubmit = vi.fn();

const usernameLabelText = "Username:";
const passwordLabelText = "Password:";
const expectedButtonText = "login";
const usernameInput = "astronary";
const passwordInput = "starstuff";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show username and password input fields'", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm submitForm={handleLoginOnSubmit} />)
      );

      const usernameText = screen.getByLabelText(usernameLabelText);
      const passwordText = screen.getByLabelText(passwordLabelText);

      expect(usernameText).toBeInTheDocument();
      expect(passwordText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'login''", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm submitForm={handleLoginOnSubmit} />)
      );
      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });
      expect(buttonText).toBeInTheDocument();
    });

    describe("When it is rendered and the username and input fields are empty", () => {
      test("Then it should show a disabled button with the text 'Login'", () => {
        renderWithProviders(
          wrapWithRouter(<LoginForm submitForm={handleLoginOnSubmit} />)
        );
        const buttonText = screen.getByRole("button", {
          name: expectedButtonText,
        });
        expect(buttonText).toBeDisabled();
      });
    });
  });

  describe("When it is rendered and the username and password fields have been wrriten on", () => {
    test("Then it should show an enabled button with the text 'Login'", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm submitForm={handleLoginOnSubmit} />)
      );

      const userLabel = screen.getByLabelText(usernameLabelText);
      const passwordLabel = screen.getByLabelText(passwordLabelText);

      await userEvent.type(userLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(loginButton).toBeEnabled();
    });
  });

  describe("When it is rendered and the username input field has been written on with 'astronary'", () => {
    test("then the text 'astronary should be shown on the username field", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm submitForm={handleLoginOnSubmit} />)
      );

      const userLabel = screen.getByLabelText(usernameLabelText);

      await userEvent.type(userLabel, usernameInput);

      expect(userLabel).toHaveValue(usernameInput);
    });
  });

  describe("When it is rendered and the password input field has been written on with 'starstuff'", () => {
    test("then the text 'starstuff should be shown on the username field", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm submitForm={handleLoginOnSubmit} />)
      );

      const passwordLabel = screen.getByLabelText(passwordLabelText);

      await userEvent.type(passwordLabel, passwordInput);

      expect(passwordLabel).toHaveValue(passwordInput);
    });
  });

  describe("When it is rendered, the username and password are correct and the button login is clicked", () => {
    test("Then it should call the handLoginOnSubmit function", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm submitForm={handleLoginOnSubmit} />)
      );

      const userLabel = screen.getByLabelText(usernameLabelText);
      const passwordLabel = screen.getByLabelText(passwordLabelText);

      await userEvent.type(userLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(loginButton);

      expect(handleLoginOnSubmit).toHaveBeenCalled();
    });
  });
});
