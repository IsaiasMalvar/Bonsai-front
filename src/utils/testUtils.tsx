import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { Provider } from "react-redux";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <Provider store={testStore}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  };
  render(ui, { wrapper: Wrapper });
};
