import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import {
  LazyCreateMicroPage,
  LazyDetailPage,
  LazyLoginPage,
  LazyMicrosPage,
  LazyNotFoundPage,
} from "./lazyPages";
import ModifyMicroPage from "../pages/ModifyMicroPage/ModifyMicroPage";

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
        element: (
          <Suspense>
            <LazyCreateMicroPage />
          </Suspense>
        ),
      },
      {
        path: "/micros/id/:microId",
        element: (
          <Suspense>
            <LazyDetailPage />
          </Suspense>
        ),
      },
      {
        path: "/micros/modifyMicrostory",
        element: <ModifyMicroPage />,
      },

      {
        path: "*",
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
