import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import { LazyLoginPage, LazyMicrosPage, LazyNotFoundPage } from "./lazyPages";
import CreateMicroPage from "../pages/CreateMicroPage/CreateMicroPage";

import DetailPage from "../pages/DetailPage/DetailPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense>
            <LazyMicrosPage />
          </Suspense>
        ),
      },
      {
        path: "/create",
        element: <CreateMicroPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
