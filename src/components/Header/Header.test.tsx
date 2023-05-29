import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Bonsai logo", () => {
      const expectedAltText = "bonsai logo";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Header />
          </Provider>
        </ThemeProvider>
      );

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
