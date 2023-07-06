import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { Provider } from "react-redux";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
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

export const wrapWithRouter = (
  ui: React.ReactElement,
  ui2?: React.ReactElement,
  path2?: string
) => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: ui,
    },
    ui2 ? { path: path2, element: ui2 } : {},
  ];

  const router = createMemoryRouter(routes);

  return <RouterProvider router={router} />;
};

export const wrapWithProviders = ({
  children,
}: PropsWithChildren): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);
